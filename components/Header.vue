<template>
  <div :class="headerClass">
    <div :class="breadcrumbClass">
      <Breadcrumb class="top-3" />
    </div>
    <div class="fixed flex right-2 top-2">
      <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
    " color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
      <UButton color="gray" variant="ghost" aria-label="github" to="https://github.com/engineerie" target="empty"
        class="px-2">
        <UIcon name="i-simple-icons-github" class="w-5 h-5" dynamic />
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  asideOpen: Boolean
});

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const route = useRoute();

const headerClass = computed(() => {
  return `fixed w-full h-10 ${route.path === "/" ? "bg-transparent" : "dark:bg-neutral-900 bg-neutral-100"}`;
});

const breadcrumbClass = computed(() => {
  return `transition-transform duration-300 ease-in-out ${props.asideOpen ? 'lg:translate-x-48' : 'lg:translate-x-8'}`;
});

function toggleDarkMode() {
  isDark.value = !isDark.value;
}
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}

@media (min-width: 1024px) {
  .lg:translate-x-60 {
    transform: translateX(48px);
    /* Adjust according to your layout */
  }

  .translate-x-0 {
    transform: translateX(0);
  }
}
</style>