<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="sr-only">Change published status</ListboxLabel>
    <div class="relative">
      <div class="inline-flex divide-x divide-primaryGreen rounded-md shadow-sm">
        <div class="inline-flex items-center gap-x-1.5 rounded-l-md bg-primaryGreen px-3 py-2 text-white shadow-sm">
          <CheckIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
          <p class="text-sm font-semibold">{{ selected.description }}</p>
        </div>
        <ListboxButton class="inline-flex items-center rounded-l-none rounded-r-md bg-primaryGreen p-2 hover:bg-primaryGreen focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:ring-offset-2 focus:ring-offset-gray-50">
          <span class="sr-only">Change published status</span>
          <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
        </ListboxButton>
      </div>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ListboxOption as="template" v-for="option in publishingOptions" :key="option.title" :value="option" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-primaryGreen text-white' : 'text-gray-900', 'cursor-default select-none p-2 text-sm']">
              <div class="flex flex-col">
                <div class="flex justify-start items-center">
                  <!-- <p :class="selected ? 'font-semibold' : 'font-normal'">{{ option.title }}</p> -->
                  <span v-if="selected" :class="active ? 'text-white' : 'text-primaryGreen'">
                    <CheckIcon class="h-4 w-4" aria-hidden="true" />
                  </span>
                <p :class="[active ? 'text-indigo-200' : 'text-gray-500', 'ml-2']">{{ option.description }}</p>

                </div>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

const publishingOptions = [
  { title: 'Report', description: 'January', current: true },
  { title: 'Report', description: 'Febuary', current: true },
  { title: 'Report', description: 'March', current: true },
  { title: 'Report', description: 'April', current: true }, 
  { title: 'Report', description: 'May', current: true }, 
  { title: 'Report', description: 'June', current: true }, 
  { title: 'Report', description: 'July', current: true }, 
  { title: 'Report', description: 'August', current: true }, 
  { title: 'Report', description: 'September', current: true }, 
  { title: 'Report', description: 'October', current: true }, 
  { title: 'Report', description: 'November', current: true }, 
  { title: 'Report', description: 'December', current: true }, 
]

const selected = ref(publishingOptions[0])
</script>