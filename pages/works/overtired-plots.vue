<template>
  <div class="hidden">
    <div v-for="img in items" :key="img" class="rounded-sm overflow-hidden">
      <NuxtImg :src="`images/${img}`" width="300" height="190" format="webp" />
      <NuxtImg :src="`images/${img}`" width="1400" height="924" format="webp" />
    </div>
  </div>
  <div class="pb-10">
    <div class="flex justify-between">
      <h2 class="text-xl">Overtired plots</h2>
      <div class="flex items-end mb-2">
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
                <NuxtImg :src="`images/${item}`" width="1400" height="924" format="webp" class="w-full rounded-sm"
                  draggable="false" />
              </UCarousel>
            </div>
          </transition>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
          <div
            class="col-span-3 border-r border-t rounded-tr-sm rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
            <!-- <h1 class="text-xl mb-2">Intro</h1> -->
            <p>
              Overtired plots is a video work in progress developed in collaboration with George Ridgway during our
              artist residency at Mustarinda, Kajaani, in May 2023.
              <br><br>
              The work explores the juxtaposition between the surrounding old-growth forests of Mustarinda—one of
              Finland's last remaining—and Lumi, one of the European Union's supercomputers designed to create digital
              twins of the world's forests and biodiversity.
              <br><br>
              A preliminary edit of the work was showcased during Mustarinda's Open Day. The work and residency was
              supported by the Swedish Arts Grants Committee and the Swedish-Finnish cultural foundation.
            </p>
          </div>
          <div
            class="col-span-1 py-2 border-l border rounded-sm dark:border-gray-800 border-gray-300 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">

            <ul class="divide-y divide-gray-300 dark:divide-gray-800 list-none ">
              <li class="py-2 pl-4">
                <UBadge size="xs" label="Work in progress" color="orange" variant="subtle" />
              </li>

              <li class="py-2 pl-4">2023</li>
              <li class="py-2 pl-4">Video</li>
              <li class="py-2 pl-4">With George Ridgway</li>

              <li class="py-2 pl-4">
                <nuxt-link to="https://mustarinda.fi/en" target="blank"
                  class="text-blue-600 dark:text-blue-500">Mustarinda </nuxt-link>
              </li>
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
  "Overtired_16.png",
  "Overtired_01.jpg",

  "Overtired_06.jpg",
  "Overtired_07.jpg",

  "Overtired_02.jpg",
  "Overtired_03.jpg",
  // "Overtired_04.jpg",
  // "Overtired_05.jpg",

  // "Overtired_15.png",
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
