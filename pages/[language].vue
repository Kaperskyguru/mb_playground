<template>
  <div class="flex">
    <section class="">
      <nav
        class="dark:bg-tertiary-900 bg-tertiary-100 h-full border-gray-300 dark:border-gray-600 w-auto overflow-y-auto border-x border-solid"
      >
        <div class="pl-4 pt-2 pb-2">
          <ul>
            <li
              :title="lang.name"
              class="hover:bg-light-200 border-white dark:bg-tertiary-900 bg-tertiary-100 mb-2 flex cursor-pointer items-center gap-2 rounded-lg pr-4 py-1"
              v-for="(lang, i) in languageOptions"
              :key="i"
            >
              <nuxt-link
                :to="`/${lang.value}`"
                target="_blank"
                class="dark:bg-tertiary-900 bg-[#D3DCE6] dark:border-white border border-solid grid h-10 w-10 p-1.5 place-items-center text-[#6D6D93] dark:text-white"
              >
                <Icon class="h-full w-full" :name="lang.icon" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
    <section class="w-full h-sceen overflow-hidden">
      <CodeEditor :lang="langauge" />
    </section>
  </div>
</template>

<script setup>
import { languageOptions } from "~/helpers/languages";

const langauge = ref("");

function getLanguage() {
  const lang = languageOptions.find(
    (lang) => lang.value == useRoute().params?.language
  );
  if (lang) return lang;

  return null;
}

langauge.value = getLanguage();

useHead({
  title: `Online ${langauge.value?.label} Editor`,
  meta: [
    {
      hid: "keywords",
      name: "keywords",
      content: `${langauge.value?.value}, server-side programming languages, backend programming languages, C#, PHP, Java, JavaScript, Rust, Golang`,
    },
    {
      hid: "description",
      name: "description",
      content: `The user friendly ${langauge.value?.label} online compiler for server-side programming langauges and backend engineers that allows you to Write ${langauge.value?.label} code and run it online. The ${langauge.value?.label} text editor also supports taking input from the user and standard libraries. It uses the ${langauge.value?.label} compiler to compile code.`,
    },

    {
      hid: "og:title",
      property: "og:title",
      content: `Online ${langauge.value?.label} Editor`,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: `The user friendly ${langauge.value?.label} online compiler for server-side programming langauges and backend engineers that allows you to Write ${langauge.value?.label} code and run it online. The ${langauge.value?.label} text editor also supports taking input from the user and standard libraries. It uses the ${langauge.value?.label} compiler to compile code.`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `../assets/icons/lang/${langauge.value?.icon}.svg?raw`,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `/${langauge.value?.value}`,
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: "100",
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: "100",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "article",
    },
    // {
    //   hid: "article:published_time",
    //   property: "article:published_time",
    //   content: this.hub?.createdAt,
    // },
    // {
    //   hid: "article:modified_time",
    //   property: "article:modified_time",
    //   content: this.hub?.updatedAt,
    // },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});
</script>

<style>
</style>