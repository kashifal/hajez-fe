
<template>
  <div
    class="flex flex-1 flex-col justify-center max-w-4xl px-6 md:bg-white mx-auto md:mt-20 mt-16 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-full flex flex-col">
      <div class="mx-auto h-10 inline-flex w-auto">
        <User />
      </div>
      <h2
        class="mt-10 text-center text-2xl font-medium tracking-normal leading-9 text-gray-700"
      >Signup</h2>
      <p class="text-center text-[#24445B] text-xl">Let’s get you started</p>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-full">
      <form @submit="onSubmit" class="grid md:grid-cols-2 grid-cols-1 w-full gap-6">
        <div class="md:col-span-1 col-span-2">
          <label
            for="phone-number"
            class="block text-medium font-normal leading-6 text-gray-900"
          >Company Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="compmay"
              id="phone-number"
              v-model="phone.value"
              :ref="phone.ref"
              class="block w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen focus:outline-none sm:text-sm sm:leading-6"
              placeholder="indusappps"
            />
          </div>
        </div>
        <div class="md:col-span-1 col-span-2">
          <label
            for="phone-number"
            class="block text-medium font-normal leading-6 text-gray-900"
          >Email</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              name="compmay"
              id="phone-number"
              v-model="phone.value"
              :ref="phone.ref"
              class="block w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen focus:outline-none sm:text-sm sm:leading-6"
              placeholder="ikashif@indusappps.com"
            />
          </div>
        </div>
        <div class="md:col-span-1 col-span-2">
          <label
            for="phone-number"
            class="block text-medium font-normal leading-6 text-gray-900"
          >First Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="compmay"
              id="phone-number"
              v-model="phone.value"
              :ref="phone.ref"
              class="block w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Kashif"
            />
          </div>
        </div>
        <div class="md:col-span-1 col-span-2">
          <label
            for="phone-number"
            class="block text-medium font-normal leading-6 text-gray-900"
          >Last Name</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="compmay"
              id="phone-number"
              v-model="phone.value"
              :ref="phone.ref"
              class="block w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Sulehria"
            />
          </div>
        </div>
        <div class="col-span-2">
          <label
            for="phone-number"
            class="block text-medium font-normal leading-6 text-gray-900"
          >Adress</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="compmay"
              id="phone-number"
              v-model="phone.value"
              :ref="phone.ref"
              class="block w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Alia Town Baghbanpurs Lhr"
            />
          </div>
        </div>

        <div class="col-span-2">
          <button
            type="submit"
            class="flex mx-auto w-56 justify-center rounded-md bg-primaryGreen px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryGreen/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen"
          >Sign up</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        <router-link
          to="#"
          class="font-semibold leading-6 text-gray-500 flex flex-col"
        >Have an account?</router-link>
        <router-link to="#" class="text-primaryGreen text-medium">Login now</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import User from "@/svgs/User.vue";
import { useForm } from "vue-hooks-form";
import { ref } from "vue";

const { useField, handleSubmit } = useForm({
  defaultValues: {}
});

const phone = useField("phone", {
  rule: { required: true }
});

const onSubmit = data => {
  console.log(data);
};
</script>
