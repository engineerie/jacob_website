<template>
  <div class="hidden">
    <div v-for="project in projects">
      <NuxtImg width="390" height="234" :src="`/images/${project.thumbnail}`" :alt="project.title"
        class="transition-transform duration-300 sm:hover:scale-105 rounded-xl" format="webp" />
    </div>
  </div>
  <div class="w-full">
    <div class="flex justify-between">
      <h2 class="text-xl">Works</h2>
      <div class="flex items-end mb-2">
        <USelectMenu v-model="completionFilter" :options="completionOptions" placeholder="Filter by Completion"
          value-attribute="value" option-attribute="label" class="mr-2 rounded-sm" variant="none" :ui="{
      rounded: 'rounded-full',
      option: { rounded: 'rounded-sm' }
    }" />
        <USelectMenu v-if="!isTableView" v-model="sortCriteria" :options="sortingOptions" placeholder="Sort by"
          value-attribute="value" option-attribute="label" class="mr-2 rounded-sm" variant="none" :ui="{
      rounded: 'rounded-full',
      option: { rounded: 'rounded-sm' }
    }" />
        <UButton :icon="toggleIcon" @click="toggleView" variant="ghost" color="gray" />
      </div>
    </div>
    <div class="relative">
      <transition name="fade" mode="out-in">
        <div v-if="isTableView" key="table" class="absolute w-full pb-12">
          <div class="border dark:border-gray-800 border-gray-300 overflow-hidden rounded-sm shadow-md">
            <UTable :rows="sortedAndFilteredProjects" :columns="columns" @select="select" :ui="{
      tr: {
        active: 'hover:bg-opacity-0 sm:hover:bg-opacity-100',
      },
    }">
              <template #avatarDisplay-data="{ row }">
                <UAvatar :src="`images/avatars/${row.avatar}`" :alt="row.title" format="webp"
                  class="rounded-md -mr-4" />
              </template>
              <template #completed-data="{ row }">
                <!-- Only render the UBadge component when completed is false -->
                <UBadge v-if="!row.completed" size="xs" label="Work in progress" color="orange" variant="subtle" />
                <div v-else></div>
              </template>
            </UTable>
          </div>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="!isTableView && isGridViewVisible" key="grid" class="absolute pb-12">
          <div class="grid max-sm:grid-cols-1 grid-cols-3 gap-4">
            <transition-group name="list">
              <div v-for="project in sortedAndFilteredProjects" :key="project.id"
                class="relative group overflow-hidden focus:overflow-hidden active:overflow-hidden rounded-sm shadow-md">

                <nuxt-link :to="`/works/${project.id}`">
                  <LazyNuxtImg width="390" height="234" :src="`/images/${project.thumbnail}`" :alt="project.title"
                    class="transition-transform duration-300 sm:hover:scale-105 rounded-sm" format="webp" />
                  <!-- Year display when filtered by 'year' -->
                  <span v-if="sortCriteria === 'year'"
                    class="absolute top-1 right-1 bg-gray-900 bg-opacity-0 text-white px-1.5 py-1 rounded-lg text-xs ">
                    {{ project.year }}
                  </span>
                  <span v-if="sortCriteria === 'medium'"
                    class="absolute top-1 right-1 bg-gray-900 bg-opacity-0 text-white px-1.5 py-1 rounded-lg text-xs ">
                    {{ project.medium }}
                  </span>
                  <span v-if="sortCriteria === 'title'"
                    class="absolute top-1 right-1 bg-gray-900 bg-opacity-0 text-white px-1.5 py-1 rounded-lg text-xs ">
                    {{ project.title }}
                  </span>
                  <LazyThumbnailTitle :title="project.title" />
                </nuxt-link>
              </div>
            </transition-group>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Existing reactive states and imports...

const completionFilter = ref('all'); // Filter for completion status

const completionOptions = [
  { value: 'all', label: 'Show all works' },
  { value: 'completed', label: 'Past works' },
  { value: 'notCompleted', label: 'Work in progress' }
];

const isGridViewVisible = ref(false);

onMounted(() => {
  isGridViewVisible.value = true;
});

const sortingOptions = [
  { value: "unsorted", label: "Unsorted" },
  { value: "year", label: "Year" },
  { value: "title", label: "Title" },
  { value: "medium", label: "Medium" },
];

// Your projects data
const projects = [
  {
    id: "skogssvamp",
    title: "Skogssvamp",
    year: 2024,
    medium: "Web application",
    thumbnail: "/Skogssvamp.jpg",
    avatar: "Skogssvamp_Avatar.jpg",
    completed: false
  },
  {
    id: "overtired-plots",
    title: "Overtired plots",
    year: 2023,
    medium: "Video",
    thumbnail: "Overtired_15.png",
    avatar: "Overtired_Avatar.jpg",
    completed: false
  },
  {
    id: "forestAugmentations",
    title: "Forest Augmentations",
    year: 2022,
    medium: "Video",
    thumbnail: "AforP_10.jpg",
    avatar: "AforP_Avatar.jpg",
    completed: true
  },
  {
    id: "_Subplots_01ew",
    title: "_Subplot_01ew",
    year: 2021,
    medium: "Installation",
    thumbnail: "_Subplot_01_01.jpg",
    avatar: "_Subplot_01_Avatar.jpg",
    completed: true
  },
  {
    id: "travel-park",
    title: "Travel park",
    year: 2021,
    medium: "Video",
    thumbnail: "Travel_park.jpg",
    avatar: "Travel_park_Avatar.jpg",
    completed: true
  },
  {
    id: "conversing-with-the-other-than-human",
    title: "Conversing with the other-than-human",
    year: 2020,
    medium: "Publication",
    thumbnail: "Conversing_05.jpg",
    avatar: "Conversing_Avatar.jpg",
    completed: true
  },
  {
    id: "cant-see-the-trees-for-the-forest",
    title: "Cant see the trees for the forest",
    year: 2019,
    medium: "Exhibition",
    thumbnail: "Ground_floor_01.jpg",
    avatar: "Ground_floor_Avatar.jpg",
    completed: true
  },
  {
    id: "manual",
    title: "Manual",
    year: 2019,
    medium: "Publication",
    thumbnail: "Title.png",
    avatar: "Paper_score_Avatar.jpg",
    completed: true
  },

  // { id: 6, title: "Can't see the trees for the forest", year: 2021, medium: 'Exhibition', thumbnail: 'url-to-thumbnail-2' },
];

const isTableView = ref(false);
const sortCriteria = ref("unsorted");

const toggleIcon = computed(() => {
  return isTableView.value
    ? "i-heroicons-squares-2x2"
    : "i-heroicons-table-cells";
});

function shuffleArray(array) {
  let result = [...array]; // Make a copy to avoid in-place modification
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // Swap elements
  }
  return result;
}

const sortedAndFilteredProjects = computed(() => {
  let projectsFiltered = [];
  if (completionFilter.value === 'completed') {
    projectsFiltered = projects.filter(project => project.completed);
  } else if (completionFilter.value === 'notCompleted') {
    projectsFiltered = projects.filter(project => !project.completed);
  } else {
    projectsFiltered = [...projects]; // Ensure all projects are shown when no filter is applied.
  }

  if (sortCriteria.value === 'unsorted') {
    return shuffleArray(projectsFiltered);
  } else {
    return projectsFiltered.sort((a, b) => {
      let comparison = 0;
      if (sortCriteria.value === "year") {
        comparison = b.year - a.year; // Sort by year in descending order
      } else if (sortCriteria.value === "title") {
        comparison = a.title.localeCompare(b.title); // Alphabetical by title
      } else if (sortCriteria.value === "medium") {
        comparison = a.medium.localeCompare(b.medium); // Alphabetical by medium
      }
      return comparison;
    });
  }
});

function toggleView() {
  isTableView.value = !isTableView.value;
}

const columns = [
  { key: "avatarDisplay", label: "", sortable: false },
  { key: "title", label: "Title", sortable: true },
  { key: "year", label: "Year", sortable: true },
  { key: "medium", label: "Medium", sortable: true },
  { key: "completed", label: "Status", sortable: true },

  // Add more columns as needed
];

const router = useRouter();

function select(row) {
  router.push(`/works/${row.id}`);
}
</script>

<script>
export default {
  pageTransition: "slide",
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
  /* Include transform transition */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.75);
  /* Start slightly smaller for entering, slightly larger for leaving */
}

.list-move {
  transition: transform 0.5s;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(0.5);
  /* Start smaller and fade out */
}

.table-view,
.grid-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
