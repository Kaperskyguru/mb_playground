<template>
  <section
    v-if="lang"
    class="dark:bg-tertiary-900 border-t border-solid border-gray-300 bg-white px-6 py-10 dark:border-gray-600 dark:text-white"
  >
    <div class="mx-auto max-w-3xl">
      <h1 class="text-2xl font-bold md:text-3xl">
        Online {{ lang.displayName }} Playground
      </h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Runs on {{ lang.runtime }} · Free · No signup required
      </p>

      <p class="mt-5 leading-relaxed">{{ lang.intro }}</p>

      <h2 class="mt-8 text-xl font-bold">
        {{ lang.displayName }} Playground — Frequently Asked Questions
      </h2>
      <dl class="mt-4 space-y-4">
        <div v-for="(item, i) in lang.faq" :key="i">
          <dt class="font-semibold">{{ item.q }}</dt>
          <dd class="mt-1 leading-relaxed text-gray-700 dark:text-gray-300">
            {{ item.a }}
          </dd>
        </div>
      </dl>

      <h2 class="mt-8 text-xl font-bold">Try another language</h2>
      <ul class="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        <li v-for="other in others" :key="other.value">
          <nuxt-link
            :to="`/${other.value}`"
            class="text-[#525CBF] underline hover:no-underline dark:text-[#8f97e6]"
          >
            Online {{ other.displayName }} Playground
          </nuxt-link>
        </li>
      </ul>

      <p class="mt-8 text-sm text-gray-600 dark:text-gray-400">
        Ready to build real backends rather than test snippets?
        <a
          href="https://masteringbackend.com/?utm_source=playground&utm_medium=seo&utm_campaign=language_page"
          class="text-[#525CBF] underline hover:no-underline dark:text-[#8f97e6]"
          >Explore backend engineering courses and projects at MasteringBackend</a
        >.
      </p>
    </div>
  </section>
</template>

<script setup>
import { languageOptions } from "~/helpers/languages";

const props = defineProps({
  lang: { type: Object, required: true },
});

// Internal linking: every language page links to every other language page.
const others = computed(() =>
  languageOptions.filter((l) => l.value !== props.lang?.value)
);
</script>
