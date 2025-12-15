<template>
  <div>
    <Loader
      class="w-full h-full fixed top-0 left-0 bg-white opacity-100 z-50"
      v-if="loading"
    />
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </div>
    </NuxtLayout>
    <script src="https://topbanner.app/api/embed/774350f4fcbd3d3d91206c2478a57c1a.js" async></script>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
