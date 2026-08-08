<template>
  <div>
    <div class="flex">
      <section class="">
        <nav
          class="dark:bg-tertiary-900 bg-tertiary-100 h-full border-gray-300 dark:border-gray-600 w-auto overflow-y-auto border-x border-solid"
        >
          <div class="pl-4 pt-2 pb-2">
            <ul>
              <li
                :title="`Online ${lang.displayName} Playground`"
                class="hover:bg-light-200 border-white dark:bg-tertiary-900 bg-tertiary-100 mb-2 flex cursor-pointer items-center gap-2 rounded-lg pr-4 py-1"
                v-for="(lang, i) in languageOptions"
                :key="i"
              >
                <nuxt-link
                  :to="`/${lang.value}`"
                  :aria-label="`Online ${lang.displayName} Playground`"
                  class="dark:bg-tertiary-900 bg-[#D3DCE6] dark:border-gray-400 border border-solid grid h-10 w-10 p-1.5 place-items-center text-[#6D6D93] dark:text-white"
                >
                  <Icon class="h-full w-full" :name="lang.icon" />
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section class="w-full h-sceen overflow-hidden">
        <CodeEditor :lang="language" />
      </section>
    </div>

    <LanguageSeoContent :lang="language" />
  </div>
</template>

<script setup>
import { languageOptions } from "~/helpers/languages";

const SITE_URL = "https://playground.masteringbackend.com";

const route = useRoute();
const slug = route.params?.language;

const resolved = languageOptions.find((l) => l.value === slug);

// Unknown language slugs previously redirected to /javascript, which created an
// unlimited space of soft-404 URLs. Return a real 404 instead.
if (!resolved) {
  throw createError({
    statusCode: 404,
    statusMessage: `No playground exists for "${slug}".`,
    fatal: true,
  });
}

const language = ref(resolved);

const canonical = `${SITE_URL}/${resolved.value}`;

// TODO: replace with per-language OG images at /og/<language>.png once designed.
// Using the shared MasteringBackend OG image for now — a real, hosted image beats
// pointing at a file that does not exist.
const ogImage =
  "https://global.divhunt.com/d66f4ba20c653e2dbe491d598f110e8d_83072.png";

useHead({
  title: resolved.seoTitle,
  link: [{ rel: "canonical", href: canonical }],
  meta: [
    { name: "description", content: resolved.seoDescription },
    { name: "robots", content: "index, follow, max-image-preview:large" },

    { property: "og:title", content: resolved.seoTitle },
    { property: "og:description", content: resolved.seoDescription },
    { property: "og:url", content: canonical },
    { property: "og:image", content: ogImage },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "MasteringBackend Code Playground" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: resolved.seoTitle },
    { name: "twitter:description", content: resolved.seoDescription },
    { name: "twitter:image", content: ogImage },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            name: `Online ${resolved.displayName} Playground`,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any (web-based)",
            url: canonical,
            description: resolved.seoDescription,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "FAQPage",
            mainEntity: resolved.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }),
    },
  ],
});
</script>

<style>
</style>
