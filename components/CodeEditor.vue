<template>
  <div class="flex justify-between dark:bg-[#011627]">
    <section class="overflow-hidden w-full dark:bg-[#011627]">
      <div class="flex justify-between items-center gap-2">
        <div
          class="dark:bg-[#011627] px-4 dark:text-white text-bold text-gray-500 text-2xl"
        >
          main.{{ lang?.extension }}
        </div>
        <div
          class="px-2 pt-2 pb-2.5 w-full dark:bg-tertiary-900 mb-2 border-x border-b border-solid border-gray-200 dark:border-gray-500 flex justify-end items-center"
        >
          <div class="border-wite flex cursor-pointer items-center pr-4">
            <button
              @click.prevent="toogle"
              class="dark:bg-tertiary-900 bg-white dark:border-gray-500 rounded border border-solid grid h-10 w-10 p-1 place-items-center text-[#6D6D93] dark:text-white"
            >
              <LightIcon v-if="colorMode.value === 'dark'" />
              <DarkIcon v-else />
            </button>
          </div>
          <div>
            <button
              @click.prevent="runCode"
              class="bg-primary-100 px-4 rounded py-2 text-white"
              :disabled="processing"
              :class="{ '!bg-gray-300': processing }"
            >
              {{ processing ? "Compiling..." : "Run" }}
            </button>
          </div>
        </div>
      </div>
      <div class="h-full">
        <div class="rounded-md overflow-hidden w-full h-ful shadow-full">
          <Suspense>
            <ClientOnly>
              <MonacoEditor
                class="no-scrollbar"
                :style="{
                  height: '800px',
                  width: '100%',
                }"
                v-model="playground.code"
                :lang="lang.value"
                :options="options"
              >
                Loading...</MonacoEditor
              >
            </ClientOnly>
          </Suspense>

          <div
            class="bg-white dark:bg-[#011627] p-3 border-t border-solid dark:border-gray-700 border-gray-300"
          >
            <div class="px-5">
              <div>
                <div
                  class="flex dark:text-white text-gray-500 font-bold text-xl justify-between py-2"
                >
                  <h3>Input</h3>
                </div>
                <div
                  class="w-full h-40 rounded-md border border-solid border-gray-200 text-white font-normal text-sm"
                >
                  <textarea
                    v-model="input"
                    placeholder="Please enter your input here"
                    class="w-full h-full p-2 text-black focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div
        class="bg-white dark:bg-tertiary-900 dark:text-white px-2 pt-2 pb-2 flex items-center justify-between border-b border-solid dark:border-gray-500 border-gray-300"
      >
        <h2>Output</h2>

        <div class="flex gap-2">
          <button
            @click.prevent="clearConsole"
            class="border border-gray-400 border-solid px-4 rounded py-2 text-primary-100 dark:text-white"
          >
            Clear
          </button>
        </div>
      </div>

      <div
        class="bg-white dark:bg-[#011627] h-full border-l border-solid dark:border-gray-700 border-gray-300"
      >
        <div class="px-5">
          <div
            id="output"
            class="w-full h-full text-white font-normal text-sm overflow-y-auto"
          >
            <pre
              className="px-2 py-1 font-normal text-xs text-red-500"
              v-if="compiledResult?.status === 6"
              >{{ compiledResult?.compile_output }}</pre
            >

            <pre
              className="px-2 py-1 font-normal text-xs text-green-500"
              v-if="compiledResult?.status === 3"
              >{{
                compiledResult?.stdout !== null ? compiledResult?.stdout : null
              }}</pre
            >

            <pre
              className="px-2 py-1 font-normal text-xs text-red-500"
              v-if="compiledResult?.status === 5"
              >{{ `Time Limit Exceeded` }}</pre
            >

            <pre
              v-if="compiledResult?.stderr"
              className="px-2 py-1 font-normal text-xs text-red-500"
              >{{ compiledResult?.stderr }}</pre
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, watch } from "vue";
import { languageOptions } from "~/helpers/languages";
import axios from "axios";
import LightIcon from "~/assets/icons/lightIcon.svg";
import DarkIcon from "~/assets/icons/darkIcon.svg";

const config = useRuntimeConfig();
const { $graphql, $toast } = useNuxtApp();
const monaco = useMonaco();
const colorMode = useColorMode();
const loading = ref(false);
const props = defineProps(["id", "lang"]);

const processing = ref(false);
const showOutput = ref(false);
const showInput = ref(false);
const compiledResult = ref({});
const playground = reactive({
  code: props.lang?.snippet,
  language: props.lang.value ?? "",
  isReadyOnly: true,
  shouldShowInput: false,
});
const found = ref(false);
const input = ref("");
const theme = ref("system");
const options = ref({
  automaticLayout: true,
  lineNumbers: "on",
  roundedSelection: false,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  readOnly: false,
});

watch(
  () => props.id,
  async (value) => {
    if (value) return; //await loadPlayground(value);
  },
  { immediate: true }
);

watch(
  () => playground?.language,
  async (value) => {
    if (value) props.lang.value = value?.trim();
  }
);

onBeforeMount(() => {
  loading.value = true;
});

onMounted(() => {
  loading.value = false;
});

async function loadPlayground(id) {
  try {
    const variables = {
      id: id,
    };

    const result = await $graphql.default.request(GET_PlAYGROUND, variables);
    const Playground = result.getPlayground;
    playground.code = Playground.code;
    playground.language = Playground.language;
    playground.isReadyOnly = Playground.isReadyOnly;
    playground.shouldShowInput = Playground.shouldShowInput;
    found.value = true;
  } catch (error) {
    found.value = false;
  }
}

async function resetPlayground() {
  await loadPlayground(props.id);
}

function clearConsole() {
  const elem = document.querySelector("#output");
  elem.innerHTML = "";
}

async function runCode() {
  showInput.value = false;

  await handleCompile({
    code: playground.code,
    language: playground.language,
    input: input.value,
  });

  showOutput.value = true;
}

function getLanguageId(language) {
  const lang = languageOptions.find((lang) => lang.value == language);
  if (lang) return lang.id;

  return null;
}

const handleCompile = async ({ code, language, input }) => {
  const languageId = getLanguageId(language);

  if (!languageId || !code) return;

  processing.value = true;
  const formData = {
    language_id: languageId,
    // encode source code in base64
    source_code: btoa(code),
    stdin: btoa(input),
  };
  const options = {
    method: "POST",
    url: config.public.RAPID_API_URL,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Host": config.public.RAPID_API_HOST,
      "X-RapidAPI-Key": config.public.RAPID_API_KEY,
    },
    data: formData,
  };

  try {
    const response = await axios.request(options);

    const token = response.data.token;
    checkStatus(token);
  } catch (err) {
    // get error status
    let status = err.response?.status;
    if (status === 429) {
      $toast.negative(
        `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
        10000
      );
    }
    processing.value = false;
  }
};

const checkStatus = async (token) => {
  const options = {
    method: "GET",
    url: config.public.RAPID_API_URL + "/" + token,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Host": config.public.RAPID_API_HOST,
      "X-RapidAPI-Key": config.public.RAPID_API_KEY,
    },
  };
  try {
    let response = await axios.request(options);
    let statusId = response.data.status?.id;

    // Processed - we have a result
    if (statusId === 1 || statusId === 2) {
      setTimeout(() => {
        checkStatus(token);
      }, 2000);
      return;
    } else {
      processing.value = false;
      setOutputDetails(response.data);
      return;
    }
  } catch (err) {
    console.log("err", err);
    processing.value = false;
  }
};

function setOutputDetails(outputDetails) {
  if (!outputDetails) return;

  compiledResult.value = {
    status: outputDetails?.status?.id,
    compile_output: atob(outputDetails?.compile_output),
    stdout: atob(outputDetails?.stdout),
    stderr: outputDetails?.stderr ? atob(outputDetails?.stderr) : null,
    time: outputDetails?.time,
  };
}

function toogle() {
  theme.value === "dark" ? (theme.value = "light") : (theme.value = "dark");

  colorMode.preference = theme.value;
  actviateTheme(theme.value);
}

function actviateTheme(theme) {
  if (theme.includes("light"))
    import("monaco-themes/themes/Xcode_default.json").then((data) => {
      monaco?.editor?.defineTheme("vs", data);
      monaco?.editor?.setTheme("vs");
    });
  else
    import("monaco-themes/themes/Night Owl.json").then((data) => {
      monaco.editor.defineTheme("night-owl", data);
      monaco.editor.setTheme("night-owl");
    });
}

watch(
  () => colorMode.value,
  (value) => {
    actviateTheme(value);
  },
  { immediate: true }
);
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none !important;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none !important;
  /* IE and Edge */
  scrollbar-width: none !important;
  /* Firefox */
}
</style>