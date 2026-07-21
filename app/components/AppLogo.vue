<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL;
</script>

<template>
  <img
    class="monogram-image"
    :src="`${baseURL}rv-logo.svg`"
    alt="RV."
    width="70"
    height="36"
  />
</template>
