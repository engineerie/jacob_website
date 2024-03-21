<template>
  <div class="w-full">
    <div class="flex justify-between">
      <h2 class="text-xl">Architectures for perception</h2>
      <div class="flex items-end mb-2">
        <!-- USelectMenu for sorting criteria -->
       
        <!-- UButton for toggling view -->
        <div>
        <UButton
          :icon="toggleIcon"
          @click="toggleView"
          variant="ghost"
          color="black"
        />
        <UButton
          icon="i-heroicons-arrow-uturn-left"
          to="/projects"
          variant="ghost"
          color="black"
        />
      </div>
      </div>
    </div>
    <div class="relative">
    <transition name="fade" mode="out-in">
      <div v-if="isGridView" key="table" class="border border-gray-800 rounded-xl absolute w-full">
        <UCarousel     ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full', container: 'rounded-xl'}"     
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
        <NuxtImg  :src="item" class="w-full rounded-xl" draggable="false"/>
            </UCarousel>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="!isGridView && isCarouselViewVisible" key="grid" class="absolute">
        hi
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
</style>

  
  <script setup>
import { ref, computed, onMounted } from 'vue';

const isCarouselViewVisible = ref(false);

const items = [
    'AforP_01.jpg',
    'AforP_02.jpg',
    'AforP_03.jpg',
    'AforP_04.jpg',
    'AforP_05.jpg',
    'AforP_07.jpg',
    'AforP_08.jpg',
    'AforP_09.jpg',
    'AforP_10.jpg',
    'AforP_11.jpg',
    'AforP_12.jpg',
    'AforP_13.jpg',
  ]

  const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 10000)
})

onMounted(() => {
  isCarouselViewVisible.value = true;
});

  const isGridView = ref(false);

  const toggleIcon = computed(() => {
  return isGridView.value ? 'i-heroicons-squares-2x2' : 'i-heroicons-table-cells' ;
});


  function toggleView() {
    isGridView.value = !isGridView.value;
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

</style>


  