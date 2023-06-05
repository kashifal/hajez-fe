<template>
  <div class="max-w-7xl px-6 mx-auto md:mt-20 mt-16 py-12 lg:px-8">
    <div class="w-full">
      <div class="mt-4">
        <div class="flex items-center  justify-between">
          <h1 class="text-2xl lg:text-left text-center text-gray-900">Reports</h1>
          <MonthDropdown />
        </div>
      </div>
    </div>
    <div class="my-32 grid lg:grid-cols-2">

      <div class="relative "> 

        <div class="grid lg:grid-cols-2 lg:max-w-lg gap-y-6">
          <div class="px-6 bg-white lg:w-56 py-3 shadow-md ring-1 ring-gray-200">
            <h1 class="leading-loose">Number of bookings</h1>
            <h1 class="text-5xl pt-2 text-right text-primaryGreen">10</h1>
          </div>
           <div class="px-6 bg-white lg:w-56 py-3 shadow-md ring-1 ring-gray-200">
            <h1 class="leading-loose">Number of bookings</h1>
            <h1 class="text-5xl pt-2 text-right text-primaryGreen">10</h1>
          </div>

          <div class="px-6 lg:w-56 bg-white py-3 shadow-md ring-1 ring-gray-200">
            <h1 class="leading-loose">Total Income</h1>
            <h1 class="text-5xl pt-2 text-right text-primaryGreen">
              2774
              <span class="text-xs">SAR</span>
            </h1>
          </div>
        </div>
        <div class=" mt-24 rounded-md "> 
          <ul role="list" class="">

            <li v-for="item in items" :key="item.id" class="px-6 relative border flex items-center justify-between  my-4 rounded-md bg-primaryGreen py-4">
             <h1 class="text-white">{{item.name}}</h1>
             <h1 class="text-white">{{item.date}}</h1>
             <h1 class="text-white">{{item.status}}</h1>

             <router-link to="#" class="absolute left-0 top-0 w-full h-full"></router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full relative lg:flex items-start justify-center hidden">
      <img :src="reportPng"   class=" -right-32     w-[400px]  top-16" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vue-hooks-form";
import { ref } from "vue";
import Card from "@/components/GlobalComponents/Card.vue";
import UserSvg from "@/svgs/UserSvg.vue";
import PaymentSvg from "@/svgs/PaymentSvg.vue";
import NoteSvg from "@/svgs/NoteSvg.vue";
import Lang from "@/svgs/Lang.vue";
import ReadingSvg from "@/svgs/ReadingSvg.vue";
import HandSvg from "@/svgs/HandSvg.vue";
import DropDown from "@/components/HomePageComponents/DropDown.vue";
import greenHand from '../assets/greenhand.png';
import reportPng from '../assets/reportPng.png';
import MonthDropdown from '@/components/ReportPageComponents/MonthDropdown.vue';

const { useField, handleSubmit } = useForm({
  defaultValues: {}
});

const phone = useField("phone", {
  rule: { required: true }
});

const onSubmit = data => {
  console.log(data);
};

const items = [
  {name:'kashif', status:'confirmed', date:'12/12/2010' },
  {name:'hamza', status:'not confirmed', date:'10/08/2010' },
  {name:'ali', status:'verified', date:'12/12/2020' },
  {name:'hassaan', status:'review', date:'12/04/2010' },
  // More items...
];
</script>
