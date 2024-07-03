<template>
  <div class="hidden">
    <NuxtImg src="images/ground_floor_05.png" width="700" format="webp" class="w-full"/>
  </div>
    <div class="pb-10">
      <div class="flex justify-between">
        <h2 class="text-xl">Can't see the trees for the forest</h2>
        <div class="flex items-end mb-2">
          <!-- USelectMenu for sorting criteria -->
         
          <!-- UButton for toggling view -->
          <div>
          <!-- <UButton
            :icon="toggleIcon"
            @click="toggleView"
            variant="ghost"
            color="gray"
          /> -->
          <UButton
            icon="i-heroicons-arrow-uturn-left"
            to="/projects"
            variant="ghost"
            color="gray"
          />
        </div>
        </div>
      </div>
      <transition name="fade">
      <div>
        <div class="relative transition-all" :style="{ height: computedHeight }">
          <transition name="fade" >
            <div v-if="isGridView" key="table" ref="gridRef" class="absolute">
              <div class="grid grid-cols-3 gap-4">
                <div v-for="img in items" :key="img" class="rounded-lg overflow-hidden">
                    <NuxtImg :src="img" height="300" width="300" format="webp" class="w-full rounded-xl " draggable="false"/>
                </div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="!isGridView && isCarouselViewVisible" key="grid" class="group"  ref="carouselRef"  >
                <NuxtImg src="images/ground_floor_05.png" width="700" format="webp" class="w-full rounded-xl"/>
              <!-- <UCarousel    v-slot="{ item }" :items="items" :ui="{ item: 'basis-full', container: 'rounded-xl'}"      
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
          <div class="w-full flex justify-center">
              <NuxtImg  :src="item" width="700" format="webp" class="w-full justify-center" draggable="false" />
            </div>
                  </UCarousel> -->
            </div>
          </transition>
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
      <div class="col-span-3 border-r border-t rounded-tr-xl rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
        <h1 class="text-xl mb-2">Intro</h1>
        <p>
            Coming to Canada from the Netherlands I was motivated to reconnect with Nature, or as we would say in Swedish 'the Nature' (naturen). The subsequent question I would be asked after explaining that I came for nature would more than once be; oh nice, so how do you do nature? The question referred to if I might snowboard or maybe climb or surf but the double weirdness of the syntax confused me. If anything, wasn't Nature that one thing that you don't do? That which precedes human deeds?
<br><br>
            'Can't see the trees for the forest' is a proposed proverb for when someone is too caught up in an idea of an all encompassing concept to see the myriad of other-worldly perspectives. It here serves as the title for a collection of fact-fictitious elements from of a visitor's failed attempt to reconnect with a singular and unspoiled Nature free from cultural packaging. 
        </p>
        <br>
    <NuxtImg src="images/Ground_floor_08.png" width="700" format="webp" class="rounded-xl"/>
    <br>
    <h1 class="text-xl mb-2">Souvenir</h1>
    <p>
Three pieces of foraged old-growth red-cedar (collected after volunteering at a boardwalk construction in the Wah-nuh-jus—Hilthoois Tribal Park, (Meares Island) Clayoquot Sound, Vancouver Island).
<br><br>
Before I left Europe my father asked me to bring back some good sticks for him to use for wood carving. But to bring wood across the border it needs to be free from potential pests. Large scale imports to Europe require pythosanitary certificates (which often implies specific heat treatment). On a smaller scale, travelling in a passenger suitcase, it needs to pass the judgement of a customs officer. Therefor in lieu of paperwork it needs to visually present itself as clean.
<br><br>
The pieces were brought up to code by woodworker Justin Davids at Yew Woodshop in Vancouver BC. The instructions for the job were to make them not appear like mere twigs from the woods while altering them as little as possible. As 'sticks from the woods' was still what my father had asked for. They therefor needed to pass both as natural sticks and treated artefacts.    
</p>
<br>
<NuxtImg src="images/Ground_floor_09.png" width="700" format="webp" class="rounded-xl mb-2"/>
<h1 class="text-xl">Anecdote</h1>
<p>The depiction of a minor narrative incident in a painting
</p>
<br>
<NuxtImg src="images/Ground_floor_10.png" width="700" format="webp" class="rounded-xl mb-2"/>
<h1 class="text-xl">Free to take
</h1>
<p>Poster of old-growth red-cedar siding</p>
<br>
<NuxtImg src="images/Ground_floor_11.png" width="700" format="webp" class="rounded-xl mb-2"/>
<h1 class="text-xl">Scent of Rainforest
</h1>
<p>Diffuser and rainforest
diffuser blend</p>
<br>
<NuxtImg src="images/Ground_floor_14.png" width="700" format="webp" class="rounded-xl mb-2"/>
<h1 class="text-xl">Wind source
</h1>
<p>Electric fan</p>
<br>
<NuxtImg src="images/Ground_floor_12.png" width="700" format="webp" class="rounded-xl mb-2"/>
<h1 class="text-xl">Metallicbirdchirps tweeted
</h1>
<p>Phone, recording of birdsong, text, animation</p>
<br>
<p>Once every 5 minutes the rather metallic sounding chirp of a Veery Trushy would signal a retweet from Vilém Flusser's essay The Cedar in the park.</p>
<br>
<NuxtImg src="images/Ground_floor_13.png" width="700" format="webp" class="rounded-xl mb-8"/>
<h1 class="text-xl">Backdrop
</h1>
<p>In 2009 the old growth forest T'l'oqwxwat, on the unceeded territory of the Pacheedaht First Nation, outside Port Renfrew on Vancouver Island, was nick named after the hollywood movie Avatar in a campaign to attract tourists and save it from logging. The wallpaper of the phone in the exhibition is a looping video of T'l'oqwxwat which has been processed through an AI to fuse the footage with the style from the CGI loaded blockbuster.</p>
<br>
<NuxtImg src="images/Ground_floor_06.jpg" width="700" format="webp" class="rounded-xl mb-2"/>
<h1 class="text-xl">Postcard
</h1>
<p>Tree marking tape, ink.</p>
<br>
</div>
    <div class="col-span-1 border-l border rounded-xl dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">
        <ul class="divide-y divide-gray-300 dark:divide-gray-800 list-none">
            <li class="py-2 pl-4">2019</li>
            <li class="py-2 pl-4">Exhibition</li>
            <li class="py-2 pl-4">Ground Floor Gallery</li>
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
//   'Ground_floor_05.png',
//    'Ground_floor_03.png',
//       'Ground_floor_04.jpg',
      'images/Ground_floor_01.jpg',
      'images/Ground_floor_02.png',
      'images/Ground_floor_06.jpg',

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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s; /* Include transform transition */
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(0.75); /* Start slightly smaller for entering, slightly larger for leaving */
  }
  </style>
  