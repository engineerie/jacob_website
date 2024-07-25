<template>
  <div>
    <div class="flex mb-2">
      <h2 class="text-xl">About</h2>
    </div>
    <transition name="fade-grow">
      <div v-if="isVisible">
        <div
          class="dark:text-gray-200 mb-4 border dark:border-gray-800 border-gray-300 overflow-hidden rounded-xl shadow-md p-6 dark:bg-neutral-800 dark:bg-opacity-30">
          <p>I'm an artist, researcher and web developer based between Sweden and the UK. I use video, 3D modelling
            and data visualisation to explore the role of technology and aesthetics within systems of ecosystem
            governance,
            primarily focusing on digital representations of forest environments.
            <br><br>
            Together with Anders Dahlberg at the Swedish University of Agricultural Sciences I currently run Skogssvamp,
            a
            project that visually maps mycorrhizal fungi in Swedish forests and communicates how forest management
            affects
            the species composition in the soil.
            <br><br>
          </p>
          <hr />
          <br>
          <p class="text-gray-500 dark:text-gray-400">
            I've participated in exhibtions internationally at venues such as the Museum of Contemporary Art in Lyon,
            het
            HEM in Zaandam, the Oxford Real Farming Conference, Ground Floor Art Center in Vancouver, Hause der
            Statistik
            in Berlin and Somerset House in London.
            <br><br>
            I hold an MA in Research Architecture from Goldsmiths University of London and a BFA from Willem de Kooning
            Academy in Rotterdam. I have also worked for the investigative human rights agency Forensic Architecture.
          </p>
        </div>
        <div
          class="dark:text-gray-200 mb-4 border dark:border-gray-800 border-gray-300 overflow-hidden rounded-xl shadow-md p-6 dark:bg-neutral-800 dark:bg-opacity-30">
          <h2 class="text-xl mb-2 flex items-center">
            <Icon name="heroicons:link" class="mr-2" />Links
          </h2>
          <ul class="list-none">
            <li>
              <NuxtLink to="https://www.slu.se/ew-nyheter/2023/3/se-svampen-i-din-skog/" target="blank"
                class=" text-blue-600 dark:text-blue-500">Swedish
                University of Agricultural Sciences
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="  https://forensic-architecture.org/about/team/member/jacob-bertilsson" target="blank"
                class=" text-blue-600 dark:text-blue-500">Forensic
                Architecture
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="dark:text-gray-200 border dark:border-gray-800 border-gray-300 overflow-hidden rounded-xl shadow-md p-6 dark:bg-neutral-800 dark:bg-opacity-30">
          <h2 class="text-xl mb-2 flex items-center">
            <Icon name="heroicons:document-text" class="mr-2" />CV
          </h2>
          Available <NuxtLink to="/projects" class=" text-blue-600 dark:text-blue-500">here</NuxtLink>

        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.isVisible = true;
  },
}
</script>

<style scoped>
.fade-grow-enter-active,
.fade-grow-leave-active {
  transition: opacity 0.6s,
}

.fade-grow-enter-from,
.fade-grow-leave-to {
  opacity: 0;
}
</style>
