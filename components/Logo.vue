<template>
  <a href="/">
    <img
      data-not-lazy
      v-if="colorMode.value === 'dark'"
      src="~/assets/img/logo-white.png"
      alt="logo"
      width="200"
      height="auto"
      class="d-inline-block align-text-top"
    />

    <img
      data-not-lazy
      v-else
      src="~/assets/img/logo.png"
      alt="logo"
      width="200"
      height="auto"
      class="d-inline-block align-text-top"
    />
  </a>
</template>
<script setup>
const colorMode = useColorMode();
</script>
<style scoped>
</style>
