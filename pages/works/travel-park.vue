<template>
  <div class="hidden">
    <NuxtImg src="images/travel_park.jpg" width="1000" class="rounded-sm" format="webp" />

  </div>
  <div class="pb-10">
    <div class="flex justify-between mb-2">
      <h2 class="text-xl">Travel park</h2>
      <UButton icon="i-heroicons-arrow-uturn-left" to="/works" variant="ghost" color="gray" />
    </div>
    <transition name="fade-grow">
      <div v-if="isImageVisible">
        <NuxtImg src="images/travel_park.jpg" width="1000" class="rounded-sm" format="webp" />

        <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
          <div
            class="col-span-3 border-r border-t rounded-tr-sm rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
            <h1 class="text-xl mb-2">Intro</h1>
            <p>
              In 2009, to protect the old growth forest T'l'oqwxwat (Pacheedaht territory) from logging and to attract
              tourists to the area the chamber of commerce of the nearby town together with a group of environmentalists
              decided to rebrand it after James Cameron's blockbuster; calling it 'Avatar Grove'.
              <br>
              <br>
              Footage from the forest has been processed through an AI to transpose on to it the style from the
              hollywood movie and overlayed with a transcribed conversation between two local environmentalist speaking
              of
              alternative models to park conservation. The commerical Ai transcribing the conversation persistently
              mishears tribal park for travel park.
              <br>
              <br>
              Voices in the video belong to Emily Hoffpauir and Torrance Coste from the Wilderness Commitee.
            </p>
          </div>
          <div
            class="col-span-1 border-l border rounded-sm dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">

            <ul class="divide-y dark:divide-gray-800 divide-gray-300 list-none">
              <li class="py-2 pl-4">2022 </li>
              <li class="py-2 pl-4">Video</li>
              <li class="py-2 pl-4">
                <NuxtLink target="blank" to="https://hethem.nl/en/Het-Hem/Calendar/2021/03/ALL-INN"
                  class="text-blue-600 dark:text-blue-500">
                  ALL INN, het HEM
                  <!-- <Icon name="heroicons:arrow-up-right" class="ml-2" /> -->
                </NuxtLink>
              </li>
            </ul>




          </div>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isImageVisible: false,
    };
  },
  mounted() {
    this.isImageVisible = true;
  },
}
</script>

<style scoped>
.fade-grow-enter-active,
.fade-grow-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.fade-grow-enter-from,
.fade-grow-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
