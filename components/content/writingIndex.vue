<template>
    <div class="w-full">
      <div class="flex justify-between">
        <h2 class="text-xl mb-2">Writing</h2>
        <div class="flex items-end mb-2">
          <!-- USelectMenu for sorting criteria -->
         
          <!-- <USelectMenu
            v-if="!isTableView"
            v-model="sortCriteria"
            :options="sortingOptions"
            placeholder="Sort by"
            value-attribute="value"
            option-attribute="label"
            class="mr-2" 
            variant="ghost"
          /> -->
          <!-- UButton for toggling view -->
          <!-- <UButton
            :icon="toggleIcon"
            @click="toggleView"
            variant="ghost"
            color="gray"
          /> -->
        </div>
      </div>
      <div class="relative">
      <transition name="fade" mode="out-in">
        <div key="table" class=" absolute w-full pb-12">
          <div class="border dark:border-gray-800 border-gray-300 overflow-hidden rounded-xl">
          <UTable :rows="projects" :columns="columns" @select="select" :ui="{
    tr: {
      active: 'hover:bg-opacity-0 sm:hover:bg-opacity-100',
    }
  }">
    <!-- <template #avatarDisplay-data="{ row }">
      <UAvatar :src="`images/avatars/${row.avatar}`" :alt="row.title" format="webp" class=" rounded-md -mr-4" />
    </template> -->
    <!-- Templates for other columns -->
  </UTable>
  </div>
    </div>
  
      </transition>
      <!-- <transition name="fade" mode="out-in">
        <div v-if="!isTableView" key="grid" class="absolute pb-12">
          <transition-group name="list" tag="div" class="grid max-sm:grid-cols-1 grid-cols-3 gap-4">
            <div v-for="project in sortedProjects" :key="project.id" class="relative group overflow-hidden rounded-xl">
              <nuxt-link :to="`/projects/${project.id}`">
                <NuxtImg
                  width="390"
                  height="234"
                  :src="project.thumbnail"
                  :alt="project.title"
                  class="transition-transform duration-300 hover:scale-105 rounded-xl"
                  format="webp"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-xs">
                  {{ project.title }}
                </div>
              </nuxt-link>
            </div>
          </transition-group>
        </div>
      </transition> -->
    </div>
  </div>
  </template>
    
    <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const isTableViewVisible = ref(false);
  
  onMounted(() => {
    isTableViewVisible.value = true;
  });
  
  
  const sortingOptions = [
    { value: 'year', label: 'Year' },
    { value: 'title', label: 'Title' },
  ];
  
     // Your projects data
     const projects = [
     { id: 'stadjans-edelweiss', title: "Städjan's edelweiss", year: 2023, thumbnail: '', avatar: '' },
      { id: 'considering-forestry', title: 'Considering forestry: A science for managing the outside', year: 2022, thumbnail: '', avatar: ''},
    ];
  
    const isTableView = ref(true);
    const sortCriteria = ref('year');
  
    const toggleIcon = computed(() => {
    return isTableView.value ? 'i-heroicons-squares-2x2' : 'i-heroicons-table-cells' ;
  });
  
  const sortedProjects = computed(() => {
    return [...projects].sort((a, b) => {
      let comparison = 0;
      if (sortCriteria.value === 'year') {
        comparison = b.year - a.year; // Sort by year in descending order
      } else if (sortCriteria.value === 'title') {
        comparison = a.title.localeCompare(b.title); // Sort titles alphabetically
      } else if (sortCriteria.value === 'medium') {
        comparison = a.medium.localeCompare(b.medium);
      }
      return comparison === 0 ? a.id - b.id : comparison; // Stable sort
    });
  });
  
  
    function toggleView() {
      isTableView.value = !isTableView.value;
    }
    
    const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'year', label: 'Year', sortable: true },
    ];
  
    const router = useRouter();
  
  function select(row) {
    router.push(`/writing/${row.id}`);
  }
    </script>
  
  <script>
  export default {
    pageTransition: 'slide'
  }
  </script>
  
  <style scoped>
  /* Fade transition for both table and grid */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s; /* Include transform transition */
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(0.75); /* Start slightly smaller for entering, slightly larger for leaving */
  }
  
  /* Position and scale transition for the list (grid) */
  .list-move { /* This class is added for moving items within the transition-group */
    transition: transform 0.5s;
  }
  .list-enter-active, .list-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: scale(0.5); /* Start smaller and fade out */
  }
  
  /* Ensure that the absolute positioning doesn't overlap in an undesired way */
  .table-view, .grid-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  </style>
  
  
    