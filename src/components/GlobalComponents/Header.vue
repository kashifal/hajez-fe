<template>
    <div class="w-full h-16 shadow-sm bg-white px-6 lg:px-0">
        <div class="max-w-7xl mx-auto h-full flex items-center justify-between">
            <router-link to="/"><Logo /></router-link>
            <router-link to="/about" class="px-4 py-2 text-sm rounded-sm bg-primaryGreen text-white">About us</router-link>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/svgs/Logo.vue';

</script>

<style lang="scss" scoped>

</style>