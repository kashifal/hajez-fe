<template>
  <div>
    <div>
      <div
        class="flex flex-1 flex-col justify-center max-w-xl px-6 md:bg-white mx-auto md:mt-48 mt-32 py-12 mb-12 lg:px-8"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Sign Up
          </h2>
          <h3 class="mt-2 text-center text-2xl font-bold text-gray-600">
            Let's get you started
          </h3>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="company-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Company name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autocomplete="given-name"
                    placeholder="Indusappps"
                    class="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="captainkashi4@gmail.com"
                    autocomplete="email"
                    class="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Kashif"
                    autocomplete="given-name"
                    class="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Sulehria"
                    autocomplete="family-name"
                    class="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  placeholder="Alia Town Lahore"
                  autocomplete="street-address"
                  class="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                class="flex w-[15rem] justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Have an account?
            <router-link to="/" class="font-semibold leading-6 text-green-500"
              >Login now</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
