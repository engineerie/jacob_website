<template>
  <div class="hidden">
    <div v-for="project in projects">
      <NuxtImg width="390" height="234" :src="`/images/${project.thumbnail}`" :alt="project.title"
        class="transition-transform duration-300 sm:hover:scale-105 rounded-xl" format="webp" />
    </div>
  </div>
  <div class="w-full">
    <!-- <div class="flex justify-between">
      <h2 class="text-xl">Works</h2>
      <div class="flex items-end mb-2"></div>
    </div> -->
    <div class="relative">
      <transition name="fade" mode="out-in">
        <div v-if="isVisible" key="table" class="absolute w-full pb-12">
          <div class=" dark:border-gray-800 border-gray-300 overflow-hidden rounded-sm ">
            <div v-if="isMobile" class="divide-y divide-gray-200 dark:divide-gray-800">
              <button v-for="project in sortedProjects" :key="project.id" type="button"
                class="flex w-full items-start gap-4 p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                @click="select(project)">
                <div class="h-16 w-20 shrink-0 overflow-hidden rounded">
                  <NuxtImg v-if="project.avatar" :src="`images/avatars/${project.avatar}`" :alt="project.title"
                    class="h-full w-full object-cover" width="80" height="64" />
                  <NuxtImg v-else :src="`/images/${project.thumbnail}`" :alt="project.title"
                    class="h-full w-full object-cover" width="80" height="64" />
                </div>
                <div class="flex-1 min-w-0 space-y-1">
                  <div class="flex items-start justify-between gap-2">
                    <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 break-words">
                      {{ project.title }}
                    </h3>
                    <span class="text-sm text-gray-600 dark:text-gray-300 shrink-0">{{ project.year }}</span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ project.medium }}</p>
                </div>
              </button>
            </div>
            <UTable v-else :rows="sortedProjects" :columns="columns" @select="select" :ui="{
              tr: {
                active: 'hover:bg-opacity-0 sm:hover:bg-opacity-100',
              },
            }">
              <template #avatarDisplay-data="{ row }">
                <div v-if="row.avatar" class="h-12 w-16 -m-3 rounded">
                  <NuxtImg :src="`images/avatars/${row.avatar}`" :alt="row.title" class="h-12 w-16 rounded" width="75"
                    height="50" />
                </div>

                <div v-else
                  class="h-12 w-16 -m-3 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
                  <UIcon name="i-heroicons-pencil" class="h-5 w-5" />
                </div>
                <!-- <UAvatar :src="`images/avatars/${row.avatar}`" :alt="row.title" format="webp"
                  class="rounded-md -mr-4" /> -->
              </template>
            </UTable>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMediaQuery } from '@vueuse/core';

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});

const isMobile = useMediaQuery('(max-width: 767px)');

// Your projects data
const projects = [
  {
    id: "skogssvamp",
    title: "Skogssvamp",
    year: 2024,
    medium: "Web application",
    thumbnail: "/Skogssvamp.jpg",
    avatar: "Skogssvamp_Avatar.jpg"
  },
  {
    id: "overtired-plots",
    title: "Overtired plots",
    year: 2023,
    medium: "Video",
    thumbnail: "Overtired_15.png",
    avatar: "Overtired_Avatar.jpg"
  },
  {
    id: "forestAugmentations",
    title: "Forest Augmentations",
    year: 2022,
    medium: "Video",
    thumbnail: "AforP_10.jpg",
    avatar: "AforP_Avatar.jpg"
  },
  {
    id: "_Subplots_01ew",
    title: "_Subplot_01ew",
    year: 2021,
    medium: "Installation",
    thumbnail: "_Subplot_01_01.jpg",
    avatar: "_Subplot_01_Avatar.jpg"
  },
  {
    id: "travel-park",
    title: "Travel park",
    year: 2021,
    medium: "Video",
    thumbnail: "Travel_park.jpg",
    avatar: "Travel_park_Avatar.jpg"
  },
  {
    id: "conversing-with-the-other-than-human",
    title: "Conversing with the other-than-human",
    year: 2020,
    medium: "Publication",
    thumbnail: "Conversing_05.jpg",
    avatar: "Conversing_Avatar.jpg"
  },
  {
    id: "cant-see-the-trees-for-the-forest",
    title: "Cant see the trees for the forest",
    year: 2019,
    medium: "Exhibition",
    thumbnail: "Ground_floor_01.jpg",
    avatar: "Ground_floor_Avatar.jpg"
  },
  {
    id: "manual",
    title: "Manual",
    year: 2019,
    medium: "Publication",
    thumbnail: "Title.png",
    avatar: "Paper_score_Avatar.jpg"
  },
  {
    id: "insensibleRelations",
    title: "Insensible relations at the margins of ecosystem care",
    year: 2024,
    medium: "Writing",
    thumbnail: "Title.png",
    avatar: "",
    route: "/works/insensibleRelations"
  },
  {
    id: "dataEncounters",
    title: "Database encounters",
    year: 2024,
    medium: "Writing",
    thumbnail: "Title.png",
    avatar: "",
    route: "/works/dataEncounters"
  },
  {
    id: "consideringForestry",
    title: "Considering forestry: A science for managing the outside",
    year: 2022,
    medium: "Writing",
    thumbnail: "considering-forestry_02.jpg",
    avatar: "",
    route: "/works/consideringForestry"
  },

  // { id: 6, title: "Can't see the trees for the forest", year: 2021, medium: 'Exhibition', thumbnail: 'url-to-thumbnail-2' },
];

const sortedProjects = computed(() => {
  // Default to year descending, fall back to title for stable ordering within the same year
  return [...projects].sort((a, b) => {
    const yearDiff = b.year - a.year;
    return yearDiff !== 0 ? yearDiff : a.title.localeCompare(b.title);
  });
});

const getProjectRoute = (project) => {
  return project.route || `/works/${project.id}`;
};

const columns = [
  { key: "avatarDisplay", label: "", sortable: false },
  { key: "title", label: "Title", sortable: true },
  { key: "year", label: "Year", sortable: true },
  { key: "medium", label: "Medium", sortable: true },

  // Add more columns as needed
];

const router = useRouter();

function select(row) {
  router.push(getProjectRoute(row));
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
