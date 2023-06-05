<template>
  <div class="w-full h-16 shadow-sm bg-white px-6 lg:px-0">
    <div class="max-w-7xl mx-auto h-full flex items-center justify-between">
      <img src="../assets/logo.png" class="h-[2rem]" />
      <div class="flex justify-end items-center space-x-4">
        <button class="bg-green-500 text-white rounded-2xl w-[5rem] h-[2rem]">
          Home
        </button>
        <p class="flex">Rest House</p>
        <p>Bookings</p>
        <p>Reports</p>
        <img src="../assets/ei_user.png" />
      </div>
    </div>
  </div>

  <div>
    <div class="relative">
      <div
        class="flex items-center mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8"
      >
        <div
          class="px-6 pb-24 pt-20 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-38 xl:col-span-6"
        >
          <div class="mx-auto max-w-2xl lg:mx-0">
            <p class="font-semibold">Account</p>
            <h1
              class="mt-5 font-semibold tracking-tight text-gray-900 sm:text-4xl"
            >
              Welcome
              <span class="text-green-500 underline underline-offset-1"
                >Kashif Sulehria</span
              >
            </h1>
            <div class="grid grid-cols-2 space-x-10 space-y-4 py-10 gap-y-10">
              <div
                class="flex flex-col justify-center items-start mx-auto bg-white w-78 h-40 max-w-6xl px-4 sm:px-6 lg:px-8 border-transparent border-8 hover:border-b-green-500 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#bbf7d0"
                  stroke="#059669"
                  className="w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                <div class="mx-auto pt-3 max-w-3xl">Edit your information</div>
              </div>

              <div
                class="flex flex-col justify-center items-start mx-auto bg-white w-78 h-40 max-w-6xl px-4 sm:px-6 lg:px-8 border-transparent border-8 hover:border-b-green-500 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#bbf7d0"
                  stroke="#059669"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <div class="mx-auto pt-3 max-w-3xl">Terms and conditions</div>
              </div>

              <div
                class="flex flex-col justify-center items-start mx-auto bg-white w-78 h-40 max-w-6xl px-4 sm:px-6 lg:px-8 border-transparent border-8 hover:border-b-green-500 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#bbf7d0"
                  stroke="#059669"
                  className="w-6 h-6"
                >
                  <path
                    d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <div class="mx-auto pt-3 max-w-3xl">Payments</div>
              </div>

              <div
                class="flex flex-col justify-center items-start mx-auto bg-white w-78 h-40 max-w-6xl px-4 sm:px-6 lg:px-8 border-transparent border-8 hover:border-b-green-500 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#bbf7d0"
                  stroke="#059669"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                    clipRule="evenodd"
                  />
                </svg>
                <div class="mx-auto pt-3 max-w-3xl">Language</div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex justify-center items-center lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
        >
          <img
            class="aspect-[3/2] object-cover h-[25rem] lg:inset-0 lg:aspect-auto"
            src="../assets/illustration.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <footer class="flex justify-center">All Rights Reserved @ 2022</footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
