<template>
  <div class="pb-10">
    <div class="flex justify-between mb-2">
      <h2 class="text-xl">Skogssvamp</h2>
      <UButton
        icon="i-heroicons-arrow-uturn-left"
        to="/projects"
        variant="ghost"
        color="gray"
      />
    </div>
    <transition name="fade-grow" >
      <div v-if="isImageVisible">
      <NuxtImg  src="skogssvamp.jpg" width="1200" class="rounded-xl border border-gray-900" />
   
    <div class="grid grid-cols-12 mt-3">
    <div class="col-span-9 border-r border-t rounded-tr-xl rounded border-gray-800 pl-4 py-4 pr-8 text-gray-200">
      <h1 class="text-xl mb-2">Intro</h1>
      <p>
      Skogssvamp (forest mushroom) is a project to develop a web application to communicate what the presence and distribution of mushrooms in different forest stands might look like. The application is intended to visualise the predominantly hidden diversity of mycorrhizal fungi in Swedish forests. Users will also be able to test and see the potential effect different types of forest management have on the species composition of soil fungi.
<br><br>
Skogssvamp is a collaboration between Jacob Bertilsson and Anders Dahlberg. The project has been awarded a two year project grant from Skogssällskapet and is based at the Swedish University of Agricultural Sciences.
<br><br>
Project presentations have been given at the Oxford Real Farming Conference (2023) and at the Mustarinda Association (2023).
    </p>
  </div>
  <div class="col-span-3 border-l border rounded-xl border-gray-800 py-2 ml-3 text-gray-200 text-sm h-fit">
    
    <ul class="divide-y divide-gray-800">
  <li class="py-2 pl-4">2023 - ongoing </li>
  <li class="py-2 pl-4">Web application</li>
  <li class="py-2 pl-4">skogssvamp.se</li>
  <li class="py-2 pl-4">Swedish University of Agricultural Sciences</li>
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
.fade-grow-enter-active, .fade-grow-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}
.fade-grow-enter-from, .fade-grow-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
