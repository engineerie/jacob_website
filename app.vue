<template>
  <div class="flex relative">
    <header class="z-20">
      <Header :asideOpen="isAsideOpen" />
    </header>

    <UButton color="gray" variant="ghost" class="hidden lg:flex z-50 px-1.5 fixed top-2 left-2" @click="toggleAside">
      <UIcon name="i-mynaui-sidebar" class="w-5 h-5" dynamic />
    </UButton>
    <!-- Toggle Button for Small Screens -->
    <UButton color="white" size="xl" :icon="toggleIcon"
      class="lg:hidden z-40 fixed bottom-4 right-4 rounded-full border-[0.5px] border-gray-700 bg-opacity-55"
      @click="toggleAside" />

    <!-- Aside Section -->
    <transition name="slide">
      <aside v-if="isAsideOpen"
        class="z-30 fixed h-screen w-48 lg:dark:bg-blue-300 dark:bg-gray-900 lg:dark:bg-opacity-5 lg:bg-blue-800 bg-white lg:bg-opacity-5 border-r dark:border-gray-800 border-gray-300"
        @mouseenter="keepOpen" @mouseleave="close"
        :class="{ block: isAsideOpen, hidden: !isAsideOpen, 'w-full': isAsideOpen && !isLargeScreen, }">
        <Aside />
      </aside>
    </transition>

    <main :class="{ 'lg:ml-48': isAsideOpen }"
      class="flex-1 flex justify-center mt-32 max-sm:mt-12 transition-all ease-in-out duration-300">
      <div class="w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl p-4">
        <transition name="fade" mode="out-in">
          <NuxtPage />
        </transition>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, provide, onMounted, onUnmounted, watch } from "vue";

const isAsideOpen = ref(false);
const isPinned = ref(false); // State to keep track of whether the sidebar is pinned open
let edgeTimer = null; // Timer to manage delayed opening


const toggleAside = () => {
  isPinned.value = !isPinned.value; // Toggle the pinned state
  isAsideOpen.value = isPinned.value; // Ensure sidebar opens or closes with the pin state
};

const keepOpen = () => {
  if (!isPinned.value) { // Only auto-open if not pinned
    isAsideOpen.value = true;
  }
};

const close = () => {
  if (!isPinned.value) { // Only auto-close if not pinned
    isAsideOpen.value = false;
  }
};

// Provide toggleAside function
provide("toggleAside", toggleAside);

const toggleIcon = computed(() => {
  return isAsideOpen.value ? "i-heroicons-x-mark" : "i-heroicons-bars-3";
});

// Computed property for large screen check
const isLargeScreen = ref(false); // initialized as false

// Function to check and update isLargeScreen
const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint
};

const detectMouseNearEdge = (e) => {
  if (e.clientX <= 0.1) { // Check if the cursor is at the very edge
    if (!edgeTimer) { // Start the timer if it isn't already running
      edgeTimer = setTimeout(() => {
        isAsideOpen.value = true;
        edgeTimer = null; // Reset timer after opening
      }, 600); // 2 seconds delay
    }
  } else {
    clearTimeout(edgeTimer); // Clear the timer if the mouse moves away from the edge
    edgeTimer = null;

  }
};

onMounted(() => {
  document.addEventListener("mousemove", detectMouseNearEdge);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", detectMouseNearEdge);
  if (edgeTimer) {
    clearTimeout(edgeTimer); // Ensure to clear the timer on component unmount
  }
});



onMounted(() => {
  updateScreenSize(); // Update screen size on client-side mount
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});

watch(isAsideOpen && !isLargeScreen, (newValue) => {
  if (newValue) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

// Make sure to remove the class when the component is destroyed to clean up
onUnmounted(() => {
  document.body.classList.remove("no-scroll");
});
</script>

<style scoped>
/* Transitions for mobile and desktop */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

@media (max-width: 1023px) {

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(100%);
    /* Slide from the bottom for mobile */
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
    /* Slide to normal position for mobile */
  }
}

@media (min-width: 1024px) {

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100%);
    /* Slide from the left for desktop */
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateX(0);
    /* Slide to normal position for desktop */
  }
}
</style>
