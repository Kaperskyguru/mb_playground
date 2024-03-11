<template>
  <main>
    <header
      class="p-5 border-b border-solid dark:bg-[#1F2023] dark:text-white border-gray-300 dark:border-gray-500"
    >
      <Nav />
    </header>
    <slot />
  </main>
</template>

<script setup>
definePageMeta({
  colorMode: "system",
});
</script>

<style>
</style>