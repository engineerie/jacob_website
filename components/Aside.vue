
<template>
    <div class="p-1">
    <UVerticalNavigation :links="links" :ui="{ 
    }" @click="closeAside"/>
    </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['close']);

const closeAside = () => {
  emits('close');
};

const links = [{
  label: 'Jacobb',
  avatar: {
   src: '/profile.jpg',
   ui: {rounded: 'rounded'}
  },
  to: '/'

}, {
  label: 'Projects',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/projects'
  
},  
// {label: 'Writing',
//   icon: 'i-heroicons-pencil',
//   to: '/writing'
// },
{
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: `/about`
}, 
// {
//   label: 'Contact',
//   icon: 'i-heroicons-envelope',
//   to: '/contact'
// }
]
</script>

