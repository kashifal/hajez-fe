<template>
  <div>
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Log in
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="phone-number"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Phone Number</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <label for="country" class="sr-only">Country</label>
                  <h2 class="pl-3">+966</h2>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="567 8910 8888"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Don't have an account? <br />
            <a href="#" class="font-semibold leading-6 text-green-500"
              >Sign up now</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">All Rights Reserved @ 2022</div>
    <router-link to="/example" class="underline"
      >Go to Example Page</router-link
    >
  </div>
</template>

<script setup></script>

<style scoped></style>
