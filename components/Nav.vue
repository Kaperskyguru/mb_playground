<template>
  <nav
    class="text-light-100 bg-light-200 flex w-full items-center justify-between py-3 dark:md:text-white dark:text-black"
  >
    <div class="flex items-center">
      <a
        :href="`https://masteringbackend.com?ref=playground&utm_source=codeplayground.site&utm_medium=${
          useRoute().params?.language
        }&utm_campaign=header`"
        target="_blank"
        class="text-light-100 dark:md:text-white dark:text-black text-2xl lg:text-3xl"
      >
        <logo />
        <p class="text-sm dark:md:text-white dark:text-white capitalize pt-2">
          Online {{ useRoute().params?.language }} Playground
        </p>
      </a>
    </div>
    <div class="hidden items-center justify-center gap-10 lg:flex">
      <a
        :href="`https://masteringbackend.beehiiv.com/p/becoming-a-great-backend-engineer?ref=playground&utm_source=codeplayground.site&utm_medium=${
          useRoute().params?.language
        }&utm_campaign=header`"
        class="text-md rounded-lg px-3 py-2 font-sans"
        >Become a Great Backend Engineer</a
      >
      <a
        :href="`https://masteringbackend.com/community?ref=playground&utm_source=codeplayground.site&utm_medium=${
          useRoute().params?.language
        }&utm_campaign=header`"
        class="text-md rounded-lg px-3 py-2"
        >Join Backend Community</a
      >
      <!-- <a
        :href="`https://masteringbackend.com/academy?ref=playground&utm_source=codeplayground.site&utm_medium=${
          useRoute().params?.language
        }&utm_campaign=header`"
        class="text-md rounded-lg px-3 py-2"
        >Join Backend Academy</a
      > -->
    </div>
    <div class="hidden items-center lg:flex">
      <a
        :href="`https://masteringbackend.com/hubs/backend-engineering?ref=playground&utm_source=codeplayground.site&utm_medium=${
          useRoute().params?.language
        }&utm_campaign=header`"
        class="text-md ml-5 rounded-lg bg-[#3E48AD] px-3 py-2 font-semibold text-white"
        >Learn Backend Engineering</a
      >
    </div>

    <!-- mobile menu -->
    <div class="group relative inline-block text-left lg:hidden" tabindex="-1">
      <span class="rounded-md shadow-sm">
        <button
          class="active:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium leading-5 text-gray-700 focus-within:border-transparent focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:text-gray-500 active:bg-gray-50 active:text-gray-800"
          type="button"
          aria-haspopup="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </span>
      <div
        class="invisible origin-top-right -translate-y-2 scale-95 transform opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
      >
        <div
          class="absolute flex flex-col right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
          role="menu"
        >
          <a
            :href="`https://masteringbackend.beehiiv.com/p/becoming-a-great-backend-engineer?ref=playground&utm_source=codeplayground.site&utm_medium=${
              useRoute().params?.language
            }&utm_campaign=header`"
            class="text-md rounded-lg px-3 py-2 font-sans"
            >Become a Great Backend Engineer</a
          >
          <a
            :href="`https://masteringbackend.com/community?ref=playground&utm_source=codeplayground.site&utm_medium=${
              useRoute().params?.language
            }&utm_campaign=header`"
            class="text-md rounded-lg px-3 py-2"
            >Join Backend Community</a
          >
          <a
            :href="`https://masteringbackend.com/academy?ref=playground&utm_source=codeplayground.site&utm_medium=${
              useRoute().params?.language
            }&utm_campaign=header`"
            class="text-md rounded-lg px-3 py-2"
            >Join Backend Academy</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
</style>