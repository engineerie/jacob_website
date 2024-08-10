<template>
  <div class="hidden">
    <NuxtImg src="images/Title.png" width="1200" format="webp" class="rounded-xl" />
  </div>
  <div class="pb-10">
    <div class="flex justify-between mb-2">
      <h2 class="text-xl">Manual</h2>
      <UButton icon="i-heroicons-arrow-uturn-left" to="/works" variant="ghost" color="gray" />
    </div>
    <transition name="fade-grow">
      <div v-if="isImageVisible">
        <NuxtImg src="images/Title.png" width="1200" format="webp" class="rounded-sm" />

        <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
          <div
            class="col-span-3 border-r border-t rounded-tr-sm rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
            <!-- <h1 class="text-xl mb-2">Intro</h1> -->
            <p>
              A paper crafted as a choreographic score, featuring instructions exclusively on how to read and fold it.
              <br><br>
              Edition of 25 commissioned by Frans van Lent for the Act of Reading, Willem de Kooning Academy 2019.
            </p>
          </div>
          <div
            class="col-span-1 border-l border rounded-sm dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">

            <ul class="divide-y dark:divide-gray-800 divide-gray-300 list-none">
              <li class="py-2 pl-4">2019</li>
              <li class="py-2 pl-4">Publication</li>
              <li class="py-2 pl-4">The act of reading</li>
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