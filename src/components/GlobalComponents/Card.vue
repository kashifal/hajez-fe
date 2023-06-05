<template>
  <div
    :class="[`lg:w-64 py-6 relative duration-200 pl-6 bg-white hover:border-primaryGreen shadow-sm transition-all border-b-4 border-transparent , ${classes}`]"
  >
    <component :is="icon" class="h-8 w-8" />
    <p class="leading-snug mt-4">{{ text }}</p>

    <router-link  to="#" class="absolute top-0 w-full h-full z-50 left-0"></router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: Object,
  text: String,
  link: String,
  classes:Object
});
</script>

<style scoped>
</style>
