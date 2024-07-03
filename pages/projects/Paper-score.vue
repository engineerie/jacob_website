<template>
  <div class="hidden">
    <NuxtImg src="images/Title.png" width="1200" format="webp" class="rounded-xl" />
  </div>
  <div class="pb-10">
    <div class="flex justify-between mb-2">
      <h2 class="text-xl">Paper score</h2>
      <UButton icon="i-heroicons-arrow-uturn-left" to="/projects" variant="ghost" color="gray" />
    </div>
    <transition name="fade-grow">
      <div v-if="isImageVisible">
        <NuxtImg src="images/Title.png" width="1200" format="webp" class="rounded-xl" />

        <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
          <div
            class="col-span-3 border-r border-t rounded-tr-xl rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
            <h1 class="text-xl mb-2">Intro</h1>
            <p>
              Skogssvamp (forest mushroom) is a project to develop a web application to communicate what the presence
              and distribution of mushrooms in different forest stands might look like. The application is intended to
              visualise the predominantly hidden diversity of mycorrhizal fungi in Swedish forests. Users will also be
              able to test and see the potential effect different types of forest management have on the species
              composition of soil fungi.
              <br><br>
              Skogssvamp is a collaboration between Jacob Bertilsson and Anders Dahlberg. The project has been awarded a
              two year project grant from Skogssällskapet and is based at the Swedish University of Agricultural
              Sciences.
              <br><br>
              Project presentations have been given at the Oxford Real Farming Conference (2023) and at the Mustarinda
              Association (2023).
            </p>
          </div>
          <div
            class="col-span-1 border-l border rounded-xl dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">

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