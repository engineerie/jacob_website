<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbLinks = computed(() => {
  const pathArray = route.path.split('/').filter(p => p);
  const links = [];

  for (let i = 0; i < pathArray.length; i++) {
    let path = '/' + pathArray.slice(0, i + 1).join('/');
    let label = pathArray[i].replace(/-/g, ' '); // Replace hyphens with spaces
    label = label.charAt(0).toUpperCase() + label.slice(1);

    links.push({
      label: label,
      to: path,
    });
  }

  return links;
});
</script>

<template>
  <UBreadcrumb :links="breadcrumbLinks" divider="/" :ui= "{ base: 'flex items-center gap-x-1.5 group font-normal min-w-0' }" />
</template>
