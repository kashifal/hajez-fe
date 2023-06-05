<template>
  <div class="max-w-7xl px-6 mx-auto md:mt-20 mt-16 py-12 lg:px-8">
    <div class="w-full grid lg:grid-cols-2 grid-cols-1">
      <div class="mt-4">
        <h1 class="text-lg lg:text-left text-center">Account</h1>
        <h1 class="text-4xl text-center lg:text-left leading-snug">
          Welcome
          <router-link to="#" class="text-primaryGreen border-b border-primaryGreen">Kashif Sulehria</router-link>
        </h1>
        <div class="lg:grid lg:grid-cols-2  flex flex-col items-center mt-24 gap-y-8">
          <Card :icon="UserSvg" text="Edit your information" classes="w-full" />
          <Card :icon="PaymentSvg" text="Payments" classes="w-full"/>
          <Card  :icon="NoteSvg" text="Terms and conditions " classes="w-full"/>
          <Card  :icon="Lang" text="Language "  classes="w-full"/>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-end">
      <ReadingSvg />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vue-hooks-form";
import { ref } from "vue";
import Card from "@/components/GlobalComponents/Card.vue";
import UserSvg from '@/svgs/UserSvg.vue';
import PaymentSvg from '@/svgs/PaymentSvg.vue'
import NoteSvg from '@/svgs/NoteSvg.vue';
import Lang from '@/svgs/Lang.vue';
import ReadingSvg from '@/svgs/ReadingSvg.vue'

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
