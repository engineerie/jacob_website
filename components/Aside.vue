<template>
  <div class="lg:p-1 px-2 pt-2">
    <UVerticalNavigation :links="links" :ui="{ size: 'lg:text-sm text-2xl' }" @click="closeAside" />
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';

const toggleAside = inject('toggleAside');
const isSmallScreen = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 1024; // Check if screen width is less than 'lg' breakpoint
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

const closeAside = () => {
  if (isSmallScreen.value && toggleAside) {
    toggleAside();
  }
};

const links = [{
  label: 'Jacobb',
  icon: 'i-heroicons-home',
  // avatar: {
  //  src: '/profile.jpg',
  //  ui: {rounded: 'rounded'}
  // },
  to: '/'

}, 
{
  label: 'Projects',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/projects'
  
},
{label: 'Writing',
  icon: 'i-heroicons-pencil',
  to: '/writing'
},
// {
//   label: 'Research',
//   icon: 'i-heroicons-bookmark-square',
//   to: '/research'
// },  
{
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: `/about`
}, 
{
  label: 'Contact',
  icon: 'i-heroicons-envelope',
  to: '/contact'
}
];


// Don't forget to clean up the event listener when the component is destroyed
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>
