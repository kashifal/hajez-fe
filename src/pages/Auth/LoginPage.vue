
<template>
  <div
    class="flex flex-1 flex-col justify-center max-w-xl px-6 md:bg-white mx-auto md:mt-48 mt-32 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col">
      <div class="mx-auto h-10 inline-flex w-auto">
        <User />
      </div>
      <h2
        class="mt-10 text-center text-2xl font-medium tracking-normal leading-9 text-gray-700"
      >Login</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit="onSubmit" class="space-y-6">
        <div>
          <label
            for="phone-number"
            class="block text-sm font-normal leading-6 text-gray-900"
          >Phone Number</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-2 flex items-center">
              <label for="country" class="sr-only">Country</label>
              +966
            </div>
            <input
              type="number"
              name="phone-number"
              id="phone-number"
              v-model="phone.value"
              :ref="phone.ref"
              class="block w-full rounded-md border-0 py-2.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryGreen focus:outline-none sm:text-sm sm:leading-6"
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-primaryGreen px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryGreen/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryGreen"
          >Login</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        <router-link
          to="#"
          class="font-semibold leading-6 text-gray-500 flex flex-col"
        >Don’t have an account?</router-link>
        <router-link to="#" class="text-primaryGreen text-medium">Sign up now</router-link>
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
