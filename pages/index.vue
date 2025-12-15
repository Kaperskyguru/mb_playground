<template>
  <main class="font-inter px-6 py-2 dark:bg-[#011627]">
    <nav
      class="text-light-100 bg-light-200 dark:text-white flex w-full items-center justify-between px-5 py-3 lg:justify-evenly"
    >
      <div class="flex items-center">
        <a
          href="#"
          class="text-light-100 hover:text-light-100 text-2xl font-bold lg:text-3xl"
        >
          <logo />
          <p class="text-sm dark:md:text-white dark:text-white capitalize pt-2">
            Online Code Playground
          </p>
        </a>
      </div>
      <div class="hidden items-center justify-center gap-10 lg:flex">
        <a
          href="https://masteringbackend.beehiiv.com/p/becoming-a-great-backend-engineer"
          class="text-md rounded-lg px-3 py-2 font-sans"
          >Become a Great Backend Engineer</a
        >
        <a
          href="https://masteringbackend.com/community"
          class="text-md rounded-lg px-3 py-2"
          >Join Backend Community</a
        >
        <a
          href="https://masteringbackend.com/academy"
          class="text-md rounded-lg px-3 py-2"
          >Join Backend Academy</a
        >
      </div>
      <div class="hidden items-center lg:flex"></div>

      <!-- mobile menu -->
      <div
        class="group relative inline-block text-left lg:hidden"
        tabindex="-1"
      >
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
              href="https://masteringbackend.beehiiv.com/p/becoming-a-great-backend-engineer"
              class="text-md rounded-lg px-3 py-2 font-sans"
              >Become a Great Backend Engineer</a
            >
            <a
              href="https://masteringbackend.beehiiv.com/"
              class="text-md rounded-lg px-3 py-2"
              >Join Backend Weekly</a
            >
            <a
              href="https://masteringbackend.com/community"
              class="text-md rounded-lg px-3 py-2"
              >Join Backend Community</a
            >
            <a
              href="https://masteringbackend.com/academy"
              class="text-md rounded-lg px-3 py-2"
              >Join Backend Academy</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="mt-[100px] dark:text-white">
      <section class="pb-5">
        <div class="flex flex-col items-center justify-center">
          <h1
            class="text-light-300 max-w-4xl text-center text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            Online Code Playground for Backend Engineers
          </h1>
          <p class="text-light-100 mt-5 max-w-xl text-center">
            The ultimate online code playground, online code compiler, and
            online code editor designed specifically for backend engineers. You
            can quickly test and practice backend code in over 10+ backend
            languages, all in one convenient place.
          </p>
          <div class="mt-5 flex flex-col items-center justify-center">
            <a
              href="/javascript"
              class="text-light-100 bg-light-200 rounded-lg text-lg font-semibold"
            >
              <button class="rounded-lg bg-[#525CBF] py-5 px-10 text-white">
                Start Practicing
              </button>
            </a>
          </div>

          <div class="avatars mt-10 w-fit text-center">
            <div class="mx-auto mb-3 flex justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/2738.png"
                class="w-14 rounded-full border-2 border-solid border-gray-100 bg-white shadow-xl"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/3201.png"
                class="ml-[-15px] w-14 rounded-full border-2 border-solid border-gray-100 bg-white shadow-xl"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/5228.png"
                class="ml-[-15px] w-14 rounded-full border-2 border-solid border-gray-100 bg-white shadow-xl"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/6775.png"
                class="ml-[-15px] w-14 rounded-full border-2 border-solid border-gray-100 bg-white shadow-xl"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/9575.png"
                class="ml-[-15px] w-14 rounded-full border-2 border-solid border-gray-100 bg-white shadow-xl"
              />
            </div>
            
          </div>
        </div>
      </section>
      <section class="container mx-auto text-center mb-[100px]">
        <div class="py-10">
          <div class="py-12">
            <h2
              class="text-light-300 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Practice code in 10+ backend/server-side language
            </h2>
          </div>

          <div
            class="border border-solid border-gray-100 shadow-lg rounded-lg p-2"
          >
            <div class="w-full">
              <video controls autoplay>
                <source src="~/assets/video/playground.mp4" type="video/mp4" />
                <!-- <source src="movie.ogg" type="video/ogg" /> -->
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div class="mt-5 flex flex-col items-center justify-center">
          <a
            href="/javascript"
            class="text-light-100 bg-light-200 rounded-lg text-lg font-semibold"
          >
            <button class="rounded-lg bg-[#525CBF] py-5 px-10 text-white">
              Start Practicing
            </button>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "language",
  // middleware: ["force-redirect"],
});
</script>

<style>
</style>
