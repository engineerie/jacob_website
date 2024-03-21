<template >
  <div >
    <div class="flex mb-2">
      <h2 class="text-xl">About</h2>
    </div>
    <transition name="fade-grow" >
      <div v-if="isVisible" class="text-gray-200 mb-10">
<p>I'm an artist, researcher and web developer based between Sweden and the UK. By using video, 3D modelling and data visualisation I explore the role of technology and aesthetics within systems of ecosystem governance, primarily focusing on digital representations of forest environments. 
<br><br>
Together with Anders Dahlberg at the Swedish University of Agricultural Sciences I currently run Skogssvamp, a project that visually maps mycorrhizal fungi in Swedish forests and examines how forest management affects them. 
<br><br>
I've participated in exhibtions internationally at venues such as the Museum of Contemporary Art in Lyon, het HEM in Zaandam, the Oxford Real Farming Conference, Ground Floor Art Center in Vancouver, Hause der Statistik in Berlin and Somerset House in London. 
<br><br>
I hold a MA in Research Architecture from Goldsmiths University of London and a BFA from Willem de Kooning Academy in Rotterdam. I have also worked for the investigative human rights agency Forensic Architecture.   
<h2 class="text-xl mb-2 mt-10 flex items-center"><Icon name="heroicons:link" class="mr-2"/>Links</h2>
<ul>
  <li >  <NuxtLink to="https://www.slu.se/ew-nyheter/2023/3/se-svampen-i-din-skog/" target="blank" class="hover:text-gray-200 text-gray-400 active:text-gray-600 ">Swedish University of Agricultural Sciences<Icon name="heroicons:arrow-up-right" class="ml-2"/></NuxtLink></li>
  <li >  <NuxtLink to="  https://forensic-architecture.org/about/team/member/jacob-bertilsson" target="blank" class="hover:text-gray-200 text-gray-400 active:text-gray-600 ">Forensic Architecture<Icon name="heroicons:arrow-up-right" class="ml-2"/></NuxtLink></li>
</ul>
<h2 class="text-xl mb-2 mt-8 flex items-center"><Icon name="heroicons:envelope" class="mr-2"/>Contact</h2>
jacob.bertilsson@gmail.com
<h2 class="text-xl mb-2 mt-8 flex items-center"><Icon name="heroicons:document-text" class="mr-2"/>CV</h2>
Available <NuxtLink to="/projects" class="underline">here</NuxtLink>
</p>



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
.fade-grow-enter-active, .fade-grow-leave-active {
  transition: opacity 0.6s, 
}
.fade-grow-enter-from, .fade-grow-leave-to {
  opacity: 0;
}

</style>
