<template>
    <div class="">
      <div class="flex justify-between mb-2">
        <h2 class="text-xl"><slot /></h2>
        <UButton
          icon="i-heroicons-arrow-uturn-left"
          @click="goBack"
        variant="ghost"
          color="gray"
        />
      </div>
    </div>
  </template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
