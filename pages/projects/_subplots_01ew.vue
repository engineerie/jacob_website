<template>
  <div class="pb-10">
    <div class="flex justify-between">
      <h2 class="text-xl">_Subplots_01ew</h2>
      <div class="flex items-end mb-2">
        <!-- USelectMenu for sorting criteria -->
        <!-- UButton for toggling view -->
        <div>
          <UButton
            :icon="toggleIcon"
            @click="toggleView"
            variant="ghost"
            color="gray"
          />
          <UButton
            icon="i-heroicons-arrow-uturn-left"
            to="/projects"
            variant="ghost"
            color="gray"
          />
        </div>
      </div>
    </div>
    <div class="relative transition-all" :style="{ height: computedHeight }">
      <transition name="fade">
        <div v-if="isGridView" key="grid" ref="gridRef" class="absolute">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="img in items" :key="img" class="rounded-lg overflow-hidden">
              <NuxtImg :src="img" width="300" height="180" format="webp" class="w-full rounded-xl" draggable="false"/>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="!isGridView && isCarouselViewVisible" key="carousel" class="group" ref="carouselRef">
          <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full', container: 'rounded-xl'}"     
            :prev-button="{
              color: 'gray',
              icon: 'i-heroicons-arrow-left-20-solid',
              class: 'invisible group-hover:visible scale-0 group-hover:scale-100 transition-transform'
            }"
            :next-button="{
              color: 'gray',
              icon: 'i-heroicons-arrow-right-20-solid',
              class: 'invisible group-hover:visible scale-0 group-hover:scale-100 transition-transform'
            }"    
            class="rounded-lg" arrows>
            <NuxtImg :src="item" height="540" width="900" format="webp" class="w-full" draggable="false"/>
          </UCarousel>
        </div>
      </transition>
    </div>
    
    <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
      <div class="col-span-3 border-r border-t rounded-tr-xl rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
         <h1 class="text-xl mb-2">Intro</h1>
        <p>
          Subplot_01ew is a first output from an ongoing research project concerning edelweiss conservation. The series is meant as a provocation for multi-layered conversations around conservation and identity.
<br><br>
The installation was exhibited at the Musée d'art contemporain de Lyon and supported by the interreg research program Effondrement des Alpes.         </p>
      </div>
      <div class="col-span-1 border-l border rounded-xl dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">
        <ul class="divide-y dark:divide-gray-800 divide-gray-300 list-none">
          <li class="py-2 pl-4">2021</li>
          <li class="py-2 pl-4">Installation</li>
          <li class="py-2 pl-4">With Quentin Lazzareschi</li>
          <li class="py-2 pl-4">IRL y RL, Musée d'art contemporain de Lyon </li>
        </ul>
      </div>
    </div>
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
    '_Subplot_01_01.jpg',
    '_Subplot_01_02.jpg',
    '_Subplot_01_03.jpg',
    '_Subplot_01_04.jpg',
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
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Toggle view function
function toggleView() {
  isGridView.value = !isGridView.value;
  calculateHeight(); // Recalculate height when view is toggled
}

// Computed icon toggle
const toggleIcon = computed(() => {
  return isGridView.value ? 'i-heroicons-photo' : 'i-heroicons-squares-2x2';
});

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
</style>


  