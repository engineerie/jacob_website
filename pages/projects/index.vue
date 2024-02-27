<template>
  <div class="w-full">
    <div class="flex justify-between">
      <h2 class="text-xl">Projects</h2>
      <div class="flex items-end mb-2">
        <!-- USelectMenu for sorting criteria -->
        <USelectMenu
          v-if="!isTableView"
          v-model="sortCriteria"
          :options="sortingOptions"
          placeholder="Sort by"
          value-attribute="value"
          option-attribute="label"
          class="mr-2" 
        />
        <!-- UButton for toggling view -->
        <UButton
          :icon="toggleIcon"
          @click="toggleView"
          variant="ghost"
          color="black"
        />
      </div>
    </div>
    <div class="relative">
    <transition name="fade" mode="out-in">
      <div v-if="isTableView" key="table" class="border border-gray-800 rounded-xl absolute w-full">
        <UTable 
          :rows="projects" 
          :columns="columns" 
          @select="select"
        >
          <!-- Custom row template if needed -->
        </UTable>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="!isTableView" key="grid" class="absolute">
        <transition-group name="list" tag="div" class="grid grid-cols-3 gap-4">
          <div v-for="project in sortedProjects" :key="project.id" class="relative group overflow-hidden rounded-xl border border-gray-900">
            <nuxt-link :to="`/projects/${project.id}`">
              <NuxtImg
                width="300"
                height="180"
                :src="project.thumbnail"
                :alt="project.title"
                class="transition-transform duration-300 hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-xs">
                {{ project.title }}
              </div>
            </nuxt-link>
          </div>
        </transition-group>
      </div>
    </transition>
  </div>
</div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

  
  <script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const sortingOptions = [
  { value: 'year', label: 'Year' },
  { value: 'title', label: 'Title' },
  { value: 'medium', label: 'Medium' }
];

   // Your projects data
   const projects = [
    { id: 'skogssvamp', title: 'Skogssvamp', year: 2024, medium: 'Web application', thumbnail: 'Skogssvamp.jpg' },
    { id: 'smart-forest', title: 'Architectures for perception', year: 2022, medium: 'Video', thumbnail: 'AforP_10.jpg' },
    { id: '_subplots_01ew', title: '_Subplot_01ew', year: 2021, medium: 'Installation', thumbnail: '_Subplot_01_01.jpg' },
    { id: 'travel-park', title: 'Travel Park', year: 2021, medium: 'Video', thumbnail: 'Travel_park.jpg' },
    { id: 'conversing-with-the-other-than-human', title: 'Conversing with the other-than-human', year: 2020, medium: 'Publication', thumbnail: 'Conversing_05.jpg' },
    // { id: 6, title: "Can't see the trees for the forest", year: 2021, medium: 'Exhibition', thumbnail: 'url-to-thumbnail-2' },
  ];

  const isTableView = ref(false);
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
  { key: 'medium', label: 'Medium', sortable: true },
    // Add more columns as needed
  ];

  const router = useRouter();

function select(row) {
  router.push(`/projects/${row.id}`);
}
  </script>

<script>
export default {
  pageTransition: 'slide'
}
</script>

<style>
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


  