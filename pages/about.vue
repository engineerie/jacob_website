<template>
  <div class="flex justify-center">
    <!-- <div class="flex mb-2">
      <h2 class="text-xl">About</h2>
    </div> -->
    <transition name="fade-grow">

      <div v-if="isVisible" class="max-w-xl">
        <div
          class="dark:text-gray-200 mb-4 dark:border-gray-800 border-gray-300 overflow-hidden rounded-sm p-6 dark:bg-neutral-800 dark:bg-opacity-30">
          <p>
            I am a designer, artist and researcher working between the UK and Sweden. My practice combines video,
            web-based interfaces and 3D visualisations to explore how design, technology and aesthetics shape systems of
            ecosystem governance, with a particular focus on digital representations of forest environments.
            <br><br>
            I am the design lead for the project “see the mushrooms in your forest,” together with Anders Dahlberg,
            professor of mycology at the Swedish University of Agricultural Sciences in Uppsala. Through an interactive
            web application, the project translates new ecological data into a visual and accessible format, showing
            what mushrooms exist in different forest environments and how forestry practices influence fungal
            communities in the soil.
            <br><br>
          </p>


          <p class="text-gray-500 dark:text-gray-400">
            I've participated in exhibtions internationally at venues such as the Museum of Contemporary Art in Lyon,
            het
            HEM in Zaandam, the Oxford Real Farming Conference, Ground Floor Art Center in Vancouver, Hause der
            Statistik
            in Berlin and Somerset House in London.
            <br><br>
            I hold an MA in Research Architecture from Goldsmiths University of London and a BFA from Willem de Kooning
            Academy in Rotterdam.
            <!-- I have also worked for the investigative human rights agency Forensic Architecture. -->
          </p>
        </div>
        <div
          class="dark:text-gray-200 mb-4 dark:border-gray-800 border-gray-300 overflow-hidden rounded-sm p-6 dark:bg-neutral-800 dark:bg-opacity-30">
          <h2 class="text-xl mb-2 flex items-center">
            <Icon name="heroicons:link" class="mr-2" />
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
        <!-- <div
          class="dark:text-gray-200 border dark:border-gray-800 border-gray-300 overflow-hidden rounded-sm shadow-md p-6 dark:bg-neutral-800 dark:bg-opacity-30">
          <h2 class="text-xl mb-2 flex items-center">
            <Icon name="heroicons:document-text" class="mr-2" />CV
          </h2>
          Available <NuxtLink to="/projects" class=" text-blue-600 dark:text-blue-500">here</NuxtLink>

        </div> -->

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
