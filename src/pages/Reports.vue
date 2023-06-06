<template>
  <div>
    <div class="w-full h-16 shadow-sm bg-white px-6 lg:px-0">
      <div class="max-w-7xl mx-auto h-full flex items-center justify-between">
        <img src="../assets/logo.png" class="h-[2rem]" />
        <div class="hidden items-center gap-x-2 md:flex">
          <button class="bg-green-500 text-white rounded-md">
            <a
              href="/"
              class="router-link-active router-link-exact-active px-6 w-32 flex items-center justify-center rounded-md py-2 text-sm hover:bg-green-500 hover:text-white transition-all text-white bg-primaryGreen"
              aria-current="page"
              >Home</a
            >
          </button>
          <a
            href="/renthouse"
            class="px-6 w-32 flex items-center justify-center rounded-md py-2 text-sm hover:bg-green-500 hover:text-white transition-all bg-transparent"
            >Rest House</a
          ><a
            href="/bookings"
            class="px-6 w-32 flex items-center justify-center rounded-md py-2 text-sm hover:bg-green-500 hover:text-white transition-all bg-transparent"
            >Bookings</a
          ><a
            href="/reports"
            class="px-6 w-32 flex items-center justify-center rounded-md py-2 text-sm hover:bg-green-500 hover:text-white transition-all bg-transparent"
            >Reports</a
          ><a
            href="/account"
            class="px-6 w-32 flex items-center justify-center rounded-md py-2 text-sm hover:bg-green-500 hover:text-white transition-all bg-transparent"
            >My Account</a
          >
          <img src="../assets/ei_user.png" />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between px-24 py-8">
      <p class="flex flex-start font-medium">Reports</p>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center gap-x-5 rounded-md bg-green-500 text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            ><ChevronDownIcon
              class="-mr-1 h-5 w-5 text-white"
              aria-hidden="true"
            />
            Last 28 days
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Account settings</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Support</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >License</a
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>

    <div class="flex justify-start items-center px-24 space-x-20">
      <div class="w-[15rem] h-[8rem] bg-white flex flex-col">
        <p class="flex justify-start px-5 pt-5">Number of bookings</p>
        <h1 class="text-5xl pt-2 text-right text-green-500 pr-5 font-semibold">
          10
        </h1>
      </div>
      <div class="w-[15rem] h-[8rem] bg-white">
        <p class="flex justify-start px-5 pt-5">Total Income</p>
        <h1 class="text-5xl pt-2 text-right text-green-500 pr-5 font-semibold">
          2774 <span class="text-sm">SAR</span>
        </h1>
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex flex-col justify-start items-start px-24 space-y-2">
        <p class="font-medium pb-2">Last Bookings</p>
        <div
          class="flex items-center justify-between px-2 w-[33rem] h-[3rem] rounded-md bg-green-500 text-white"
        >
          <p>Khadeed Ahmad</p>
          <p>12/11/2022</p>
          <p>Resthouse 1</p>
        </div>
        <div
          class="flex items-center justify-between px-2 w-[33rem] h-[3rem] rounded-md bg-green-500 text-white"
        >
          <p>Khadeed Ahmad</p>
          <p>12/11/2022</p>
          <p>Resthouse 1</p>
        </div>
        <div
          class="flex items-center justify-between px-2 w-[33rem] h-[3rem] rounded-md bg-green-500 text-white"
        >
          <p>Khadeed Ahmad</p>
          <p>12/11/2022</p>
          <p>Resthouse 1</p>
        </div>
        <div
          class="flex items-center justify-between px-2 w-[33rem] h-[3rem] rounded-md bg-green-500 text-white"
        >
          <p>Khadeed Ahmad</p>
          <p>12/11/2022</p>
          <p>Resthouse 1</p>
        </div>
        <div
          class="flex items-center justify-between px-2 w-[33rem] h-[3rem] rounded-md bg-green-500 text-white"
        >
          <p>Khadeed Ahmad</p>
          <p>12/11/2022</p>
          <p>Resthouse 1</p>
        </div>
      </div>
      <img src="../assets/reports.png" class="flex justify-end" />
    </div>
  </div>
  <footer class="flex justify-center">All Rights Reserved @ 2022</footer>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>

<style scoped></style>
