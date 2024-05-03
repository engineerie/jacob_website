<template>
  <div class="flex relative">
    <header class="z-20">
      <Header />
    </header>

    <!-- Toggle Button for Small Screens -->
    <UButton
    color="white" 
    size="xl"
    :icon="toggleIcon"
    class="lg:hidden z-40 fixed bottom-4 right-4 rounded-full border-[0.5px] border-gray-700 bg-opacity-55"
    @click="isAsideOpen = !isAsideOpen"
  />
  
    <!-- Aside Section -->
    <transition name="slide">

    <aside 
    v-if="isAsideOpen || isLargeScreen"
      class="z-30 fixed h-screen lg:block w-60 lg:dark:bg-gray-800 dark:bg-gray-900 lg:dark:bg-opacity-20 bg-gray-200 border-r dark:border-gray-800 border-gray-300"
      :class="{'block': isAsideOpen, 'hidden': !isAsideOpen, 'w-full': isAsideOpen, 'w-60': !isAsideOpen}"
      @close="isAsideOpen = false"
    >
      <Aside />
    </aside>
  </transition>


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
  import { ref, computed, provide, onMounted, onUnmounted, watch } from 'vue';
  
  const isAsideOpen = ref(false);
  
  const toggleAside = () => {
    isAsideOpen.value = !isAsideOpen.value;
  };
  
  // Provide toggleAside function
  provide('toggleAside', toggleAside);
  
  const toggleIcon = computed(() => {
    return isAsideOpen.value ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3';
  });
  
  // Computed property for large screen check
  const isLargeScreen = ref(false); // initialized as false
  
  // Function to check and update isLargeScreen
  const updateScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint
  };
  
  onMounted(() => {
    updateScreenSize(); // Update screen size on client-side mount
    window.addEventListener('resize', updateScreenSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
  });
  
  watch(isAsideOpen, (newValue) => {
    if (newValue) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  });
  
  // Make sure to remove the class when the component is destroyed to clean up
  onUnmounted(() => {
    document.body.classList.remove('no-scroll');
  });
  </script>
  
  

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter-from, .slide-leave-to {
    transform: translateY(100%);
  }
  .slide-enter-to, .slide-leave-from {
    transform: translateY(0);
  }
  </style>
  