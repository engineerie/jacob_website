
<template>
    <div class="p-6">
    <UVerticalNavigation :links="links" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Jacobb',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Projects',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/projects'
},  
{label: 'Writing',
  icon: 'i-heroicons-pencil',
  to: '/writing'
},
{
  label: 'About',
  icon: 'i-heroicons-user-circle',
  to: `/about`
}, {
  label: 'Contact',
  icon: 'i-heroicons-envelope',
  to: '/contact'
}]
</script>

