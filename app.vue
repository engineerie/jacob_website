<template>
  <div class="flex relative">
    <header class="z-20 max-sm:hidden">
      <Header />
    </header>

    <!-- Toggle Button for Small Screens -->
    <UButton
    size="xl"
    class="lg:hidden z-40 fixed top-4 right-4 p-1 rounded"
    :icon="toggleIcon"
    @click="isAsideOpen = !isAsideOpen"
    variant="outline"
  />


    <!-- Aside Section -->
    <aside 
      class="z-30 fixed h-screen lg:block w-60 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 max-sm:bg-opacity-100 max-sm:dark:bg-opacity-100 bg-gray-200 border-r dark:border-gray-800 border-gray-300"
      :class="{'block': isAsideOpen, 'hidden': !isAsideOpen, 'w-full': isAsideOpen, 'w-60': !isAsideOpen}"
      @close="isAsideOpen = false"
    >
      <Aside />
    </aside>

    <main class="flex-1 flex justify-center mt-32 max-sm:mt-12 lg:ml-60">
      <div class="w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl p-4">
        <transition name="fade" mode="out-in">
          <NuxtPage />
        </transition>
      </div>
    </main>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  
  const isAsideOpen = ref(false);
  
  const toggleAside = () => {
    isAsideOpen.value = !isAsideOpen.value;
  };
  
  const toggleIcon = computed(() => {
    return isAsideOpen.value ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3';
  });
  </script>