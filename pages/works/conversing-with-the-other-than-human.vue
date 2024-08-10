<template>
  <div class="hidden">
    <div v-for="img in items" :key="img" class="rounded-sm overflow-hidden">
      <NuxtImg :src="`images/${img}`" width="300" height="190" format="webp" />
      <NuxtImg :src="`images/${img}`" width="1000" height="660" format="webp" />
    </div>
  </div>
  <div class="pb-10">
    <div class="flex justify-between">
      <h2 class="text-xl truncate">Conversing with the other-than-human </h2>
      <div class="flex items-end mb-2 shrink-0">
        <!-- USelectMenu for sorting criteria -->

        <!-- UButton for toggling view -->
        <div>
          <UButton :icon="toggleIcon" @click="toggleView" variant="ghost" color="gray" />
          <UButton icon="i-heroicons-arrow-uturn-left" to="/works" variant="ghost" color="gray" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <div>
        <div class="relative transition-all" :style="{ height: computedHeight }">
          <transition name="fade">
            <div v-if="isGridView" key="table" ref="gridRef" class="absolute">
              <div class="grid grid-cols-3 gap-4">
                <div v-for="img in items" :key="img" class="rounded-sm overflow-hidden">
                  <NuxtImg :src="`images/${img}`" width="300" height="190" format="webp" class="w-full rounded-sm "
                    draggable="false" />
                </div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="!isGridView && isCarouselViewVisible" key="grid" class="group" ref="carouselRef">
              <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full', container: 'rounded-sm' }"
                :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: 'invisible group-hover:visible scale-0 group-hover:scale-100 transition-transform'
    }" :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: 'invisible group-hover:visible scale-0 group-hover:scale-100 transition-transform'
    }" class="rounded-sm" arrows>
                <NuxtImg :src="`images/${item}`" width="1000" height="660" format="webp" class="w-full rounded-sm"
                  draggable="false" />
              </UCarousel>
            </div>
          </transition>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
          <div
            class="col-span-3 border-r border-t rounded-tr-sm rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">

            <p>
              This publication brings together practitioners from diverse fields, including archaeology, biology, art,
              and law, to explore methods of communication with the other-than-human.
              <br><br>
              With texts by: MT Ursch, Sami Hammana, Arvid&Marie, Claire Tio, Maaike van Papeveld, Niekolaas Johannes
              Lekkerkerk, Menno Schilthuizen, Marjolijn Kok, Lisa Velema, Quentin Lazzareschi, Rob Stone, Josué Amador,
              Niina Ratsep
              <br><br>
              Publication presentation given at Print Room Rotterdam.
            </p>
          </div>
          <div
            class="col-span-1 border-l border rounded-sm dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">

            <ul class="divide-y divide-gray-300 dark:divide-gray-800 list-none ">
              <li class="py-2 pl-4">2020</li>
              <li class="py-2 pl-4">Publication 45 pages</li>
              <li class="py-2 pl-4"> Co-edited with Maaike van Papeveld
              </li>
              <li class="py-2 pl-4"><nuxt-link to="https://printroom.org/" target="blank"
                  class="text-blue-600 dark:text-blue-500">Print Room Rotterdam</nuxt-link> </li>
            </ul>




          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const isCarouselViewVisible = ref(false);
const isGridView = ref(false);
const carouselRef = ref(null);
const gridRef = ref(null);
const computedHeight = ref('0px');

const items = [
  'Conversing_05.jpg',
  'Conversing_03.jpg',
  'Conversing_01.jpg',
  'Conversing_02.jpg',
];

// Helper function to check if all images are loaded
function allImagesLoaded(parentElement) {
  return new Promise(resolve => {
    const images = parentElement.querySelectorAll('img');
    let loadedCount = 0;
    images.forEach(img => {
      function onImageLoad() {
        loadedCount++;
        img.removeEventListener('load', onImageLoad);
        img.removeEventListener('error', onImageLoad);
        if (loadedCount === images.length) {
          resolve();
        }
      }
      img.addEventListener('load', onImageLoad);
      img.addEventListener('error', onImageLoad);
      if (img.complete) {
        onImageLoad();
      }
    });
  });
}

// Updated function to calculate the height
async function calculateHeight() {
  await nextTick();
  const currentRef = isGridView.value ? gridRef.value : carouselRef.value;
  if (currentRef) {
    await allImagesLoaded(currentRef);
    computedHeight.value = `${currentRef.clientHeight}px`;
    console.log("New Height Calculated: ", computedHeight.value);
  }
}

// Watchers
watch(() => isGridView.value, calculateHeight, { immediate: true });

// Resize listener
function handleResize() {
  calculateHeight();
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  calculateHeight(); // Initial calculation

  // Auto-slide for carousel
  setInterval(() => {
    if (!carouselRef.value) return;
    if (carouselRef.value.page === carouselRef.value.pages) {
      carouselRef.value.select(0);
    } else {
      carouselRef.value.next();
    }
  }, 10000);

  isCarouselViewVisible.value = true;
  console.log("Carousel view made visible");
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Toggle view function
function toggleView() {
  isGridView.value = !isGridView.value;
  console.log("View toggled to ", isGridView.value ? "Grid" : "Carousel");
  calculateHeight(); // Recalculate height when view is toggled
}

// Computed icon toggle
const toggleIcon = computed(() => {
  return isGridView.value ? 'i-heroicons-photo' : 'i-heroicons-squares-2x2';
});

</script>

<style scoped>
/* Fade transition for both table and grid */
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
</style>
