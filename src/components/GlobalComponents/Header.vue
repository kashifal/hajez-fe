<template>
  <div class="w-full h-16 shadow-sm bg-white px-6 lg:px-0">
    <div class="max-w-7xl mx-auto h-full flex items-center justify-between">
      <router-link to="/">
        <Logo />
      </router-link>
      <div class="hidden items-center gap-x-2 md:flex">
        <router-link
          v-for="link in auth.isLoggedIn ? menuLinks : offlineLinks"
          :key="link?.title"
          class="px-6 w-32 flex items-center justify-center rounded-md py-2 text-sm hover:bg-primaryGreen hover:text-white transition-all"
          :class="link.active === true ? 'text-white bg-primaryGreen' : 'bg-transparent'"
          :to="link?.href"
        >{{link?.title}}</router-link>
      </div>
      <div v-if="auth.isLoggedIn" class="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
          @click="setSidebar"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
      <!-- <router-link to="/about" class="px-4 py-2 text-sm rounded-sm bg-primaryGreen text-white">About us</router-link> -->
    </div>

    <div
      class="fixed right-0 top-0 bg-white h-screen z-50 w-96"
      :class="openMenu ? 'transform translate-x-0 transition-all duration-300' : 'transform translate-x-96 transition-all duration-300'"
    >
      <div class="absolute top-8 right-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
          @click="setSidebar"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <ul>
        <li class="px-8 py-16">
          <router-link
            v-for="link in menuLinks  "
            :key="link?.title"
            class="px-6 w-full flex mt-4 items-start justify-start rounded-md py-2 text-md hover:bg-primaryGreen hover:text-white transition-all"
            :class="link.active === true ? 'text-white bg-primaryGreen' : 'bg-transparent'"
            :to="link?.href"
          >{{link?.title}}</router-link>
        </li>
      </ul>
    </div>
    <div
      class="fixed right-0 top-0 bg-black/40 h-screen z-40 w-full"
       @click="setSidebar"
      :class="openMenu ? 'transform block transition-all duration-100' : 'transform hidden transition-all duration-100'"
    ></div>
  </div>
</template>

<script setup>
import Logo from "@/svgs/Logo.vue";
import { useAuthenticate } from "../../store/Auth";
import { ref } from "vue";

const openMenu = ref(false);

const auth = useAuthenticate();

const login = auth.isLoggedIn;

const menuLinks = [
  {
    title: "Home",
    href: "/",
    active: true
  },
  {
    title: "Rest House",
    href: "renthouse",
    active: "false"
  },
  {
    title: "Bookings",
    href: "/bookings",
    active: "false"
  },
  {
    title: "Reports",
    href: "/reports",
    active: "false"
  },
  {
    title: "My Account",
    href: "/account",
    active: "false"
  }
];

const offlineLinks = [];


function setSidebar(){ 
    openMenu.value = !openMenu.value;
 
}
</script>

<style lang="scss" scoped>
</style>