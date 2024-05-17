<template>
  <NuxtLink to="/test" >to test</NuxtLink>
    <div class="w-full">
      <div class="flex justify-between">
        <h2 class="text-xl mb-3">News</h2>
        <!-- <div class="flex items-end mb-2">         
          <USelectMenu
            v-if="!isTableView"
            v-model="sortCriteria"
            :options="sortingOptions"
            placeholder="Sort by"
            value-attribute="value"
            option-attribute="label"
            class="mr-2" 
            variant="ghost"
          />
          <UButton
            :icon="toggleIcon"
            @click="toggleView"
            variant="ghost"
            color="gray"
          />
        </div> -->
      </div>
      <div class="relative">
      <transition name="fade" mode="out-in">
        <div v-if="isTableView" key="table" class=" absolute w-full pb-12">
          <div class="border dark:border-gray-800 border-gray-300 overflow-hidden rounded-xl">
          <UTable :rows="news" :columns="columns" @select="select"  
          :ui="{
      tr: {
        active: 'hover:bg-opacity-0 sm:hover:bg-opacity-100',
      }
    }">
    <template #avatarDisplay-data="{ row }">
      
      <UAvatar :icon="`${row.avatar}`" :alt="row.title" class="-mr-4" />
      <!-- Or use a simple img tag if UAvatar is not available -->
      <!-- <img :src="row.thumbnail" alt="Avatar" class="w-10 h-10 rounded-full object-cover" /> -->
    </template>
    <!-- Templates for other columns -->
  </UTable>
  </div>
    </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="!isTableView && isGridViewVisible" key="grid" class="absolute pb-12">
          <transition-group name="list" tag="div" class="grid grid-cols-1 gap-4  rounded-xl ">
            <div v-for="news in sortedNews" :key="news.id" >
                <div class="flex  w-full relative group overflow-hidden focus:overflow-hidden active:overflow-hidden rounded-xl border bg-gray-200 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-30 dark:border-gray-800 dark:hover:border-gray-800 dark:hover:bg-opacity-80 p-3">
                    <div >
                        <UAvatar :icon="news.avatar" size="md"class="mr-3"/>
                       </div>
                    <div class=" col-span-11">
             <div class="grid grid-cols-6">
                <div class="text-xl flex col-span-5">
                    {{ news.title }}
                </div>
                <div class="w-full flex justify-end text-sm">
                    {{ news.date }}
                </div>
            </div>
            <div>
                    <ul class="list-none text-blue-600 dark:text-blue-500 my-3">
                        <li v-for="link in news.links" :key="link.url">
                        <NuxtLink :to="link.url" :target="link.isExternal ? '_blank' : '_self'">{{ link.text }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                 {{ news.description }}
                </div>
               
                <LazyNuxtImg
                v-if="news.thumbnail"
                  width="950"
                  height="580"
                  :src="news.thumbnail"
                  :alt="news.title"
                  class="rounded-lg w-full mt-3"
                  format="webp"
                />
                <iframe v-if="news.iframe" class="rounded-lg w-full mt-2" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="news.iframe"></iframe>
            </div>
        </div>
            </div>
          </transition-group>
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
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter, .list-leave-to /* .list-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  </style>
  
    
    <script setup>
    import newsData from '~/assets/json/news.json';
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const isGridViewVisible = ref(false);
  
  onMounted(() => {
    isGridViewVisible.value = true;
  });
  
  
  const sortingOptions = [
    { value: 'year', label: 'Year' },
    { value: 'title', label: 'Title' },
    { value: 'medium', label: 'Medium' }
  ];
  
  const news = [
//   {
//     id: 'mustarinda-open-day',
//     title: 'Mustarinda Open Day',
//     date: '20/05/2023',
//     thumbnail: 'Overtired_15.png',
//     description: 'Concluding our residency at Mustarinda, George Ridgway and I presented an early version of our collaborative film Overtired Plots.',
//     links: [
//       {
//         url: '/projects/overtired-plots',
//         text: 'Projects/Overtired Plots',
//         isExternal: false
//       },
//       {
//         url: 'https://mustarinda.fi/',
//         text: 'mustarinda.fi',
//         isExternal: true
//       }
//     ],
//     avatar: 'i-heroicons-square-3-stack-3d'
//   },
  {
    id: 'Reveil',
    title: 'Reveil: Dawn Chorus',
    date: '06/05/2023',
    thumbnail: 'reveil.png',
    description: ' "Residency artists George Ridgway and Jacob Bertilsson are setting up a live stream near Mustarinda house & forest as part of Reveil - a 24hr Sound streaming event of the Dawn Chorus tracking sunrise around the globe. Mustarinda’s Dawn Chorus time will be 2:55 to 4:14 on Sunday morning. The streaming will start from London on Saturday and end at London 24+1 hours later."',
    links: [
      {
        url: 'https://streams.soundtent.org/2023/streams/utc3_-532c7966-e7c7-4f99-bb90-ced3a09b5ba2',
        text: 'Soundtent Mustarinda stream',
        isExternal: true
      },
      {
        url: 'http://soundtent.org/reveil/#/',
        text: 'Soundtent Reveil',
        isExternal: true
      },
      {
        url: 'https://www.instagram.com/p/Cr3JdKAtUbN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        text: 'Mustarinda Instagram',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'se-svampen-i-din-skog',
    title: 'Se svampen i din skog',
    date: '16/03/2023',
    thumbnail: 'SeSvampen_SLU.png',
    description: "Jacob Bertilsson's and Anders Dahlberg's collaborative project Skogssvamp has been awarded a two year project grant from Skogssällskapet.",
    links: [
      {
        url: 'https://www.slu.se/ew-nyheter/2023/3/se-svampen-i-din-skog/',
        text: 'SLU News Article',
        isExternal: true
      },
      {
        url: 'https://www.skogssallskapet.se/forskning/alla-projekt/projekt/2023-08-01-se-svampen-i-din-skog.html',
        text: 'Skogssällskapet',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'ORFC',
    title: 'Oxford Real Farming Conference',
    date: '05/01/2023',
    thumbnail: '',
    description: 'The Skogssvamp project was presented at the Oxford Real Farming Conference as part of the Investigative Ecologies event.',
    links: [
      {
        url: 'https://orfc.org.uk/session/investigative-ecology-critical-views-on-the-politics-of-contemporary-agriculture/',
        text: 'orfc.org.uk/session/investigative-ecology ',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid',
    iframe: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1433703880&color=%23333230&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
  },
  {
    id: 'CRA',
    title: 'Center for Research Architecture degree show',
    date: '29/09/2022',
    thumbnail: 'CRASHOW2022_28_01.JPG',
    description: "The MA Reseach Architecture degree show is open between 29/09 - 06/10, St James Hatcham Church, 25 st James's London SE14 6AD.",
    links: [
      {
        url: 'https://research-architecture.org/Class-of-2022',
        text: 'MA Research Architecture class of 2022',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'Translations',
    title: 'Translations at Haus der Statistik, Berlin',
    date: '08/01/2022',
    thumbnail: 'cps.png',
    description: ' "The exhibition translations / مشاع showcases artistic, architectural, performative, multi-media and literary works, relating to “translation” as a practice of invention/transformation, memory-making, assimilation, (dis-)location, and healing." ',
    links: [
      {
        url: 'https://www.archdaily.com/974461/translations',
        text: 'archdaily.com',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'carceral-geographies',
    title: 'Carceral Geographies',
    date: '26/09/2021',
    thumbnail: 'carceral.png',
    description: ' "Carceral Geographies second element sees a presentation from members of the Carceral Time Working Group, a collective of Goldsmith’s Architecture MA students who have conducted a critical research appraisal of Holloway Prison, formerly the largest women’s prison in Europe." ',
    links: [
      {
        url: 'https://www.somersethouse.org.uk/whats-on/carceral-geographies',
        text: 'somersethouse.org.uk',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'FA',
    title: 'Environmental racism in death alley, Louisiana',
    date: '28/06/2021',
    thumbnail: 'FA.png',
    description: "The investigation 'Environmental racism in death alley, Louisiana' by Forensic Architecture has been published.",
    links: [
      {
        url: 'https://forensic-architecture.org/investigation/environmental-racism-in-death-alley-louisiana',
        text: 'forensic-architecture.org/investigation',
        isExternal: true
      },
      {
        url: 'https://content.forensic-architecture.org/wp-content/uploads/2021/07/Environmental-Racism-in-Death-Alley-Louisiana_Phase-1-Report_Final_2021.07.04.pdf',
        text: 'Full report (pdf)',
        isExternal: true
      },
      {
        url: 'https://forensic-architecture.org/about/team/member/jacob-bertilsson',
        text: 'forensic-architecture.org/member/jacob-bertilsson',
        isExternal: true
      },
      {
        url: 'https://visualcarlow.ie/whats-on/cloud-studies',
        text: 'visualcarlow.ie/cloud-studies',
        isExternal: true
      },
    
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'irl-y-rl',
    title: 'IRL é RL at macLYON',
    date: '19/05/2021',
    thumbnail: '_Subplot_01_05.jpeg',
    description: ' "IRL é RL is a project by the research platform Effondrement des Alpes, invited to the macLYON from May to July 2021." ',
    links: [
      {
        url: 'https://www.mac-lyon.com/en/programmation/irl-e-rl',
        text: 'mac-lyon.com/irl-e-rl',
        isExternal: true
      },
      {
        url: 'https://www.esaaa.fr/eda/',
        text: 'Effondrement des Alpes',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'all-inn',
    title: 'Travel Park at ALL INN',
    date: '31/03/2021',
    thumbnail: 'travel_park_01.jpg',
    description: 'The video work Travel Park was included in the ALL INN exhibition at Het Hem in Zaandam, the multi-academy fine-art graduation show in the Netherlands.',
    links: [
      {
        url: 'https://hethem.nl/en/Het-Hem/Calendar/2021/03/ALL-INN',
        text: 'hethem.nl/ALL-INN',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  },
  {
    id: 'ground-floor',
    title: "Can't see the trees for the forest",
    date: '16/08/2019',
    thumbnail: 'Ground_floor_07.png',
    description: ' "Hello, this Friday is the opening of a weekend-long exhibition by Rotterdam-based artist @jacobertilsson. It is also his last weekend in Vancouver before heading back to Europe. We hope you can join us ~ " ',
    links: [
      {
        url: 'https://www.instagram.com/p/B1Kmy5yhhEp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        text: 'Instagram/groundfloorac',
        isExternal: true
      }
    ],
    avatar: 'i-heroicons-link-solid'
  }
  // ... other news items
];

  
    const isTableView = ref(false);
    const sortCriteria = ref('year');
  
    const toggleIcon = computed(() => {
    return isTableView.value ? 'i-heroicons-squares-2x2' : 'i-heroicons-table-cells' ;
  });
  
  const sortedNews = computed(() => {
    return [...news].sort((a, b) => {
      let comparison = 0;
      if (sortCriteria.value === 'year') {
        comparison = b.year - a.year; // Sort by year in descending order
      } else if (sortCriteria.value === 'title') {
        comparison = a.title.localeCompare(b.title); // Sort titles alphabetically
      } else if (sortCriteria.value === 'medium') {
        comparison = a.medium.localeCompare(b.medium);
      }
      return comparison === 0 ? a.id - b.id : comparison; // Stable sort
    });
  });
  
  
    function toggleView() {
      isTableView.value = !isTableView.value;
    }
    
    const columns = [
    { key: 'avatarDisplay', label: '', sortable: false },
    { key: 'title', label: 'Title', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'medium', label: 'Medium', sortable: true },
      // Add more columns as needed
    ];
  
    const router = useRouter();
  
    function select(row) {
  if (row.externLink) {
    window.open(row.link, '_blank');
  } else {
    router.push(`${row.link}`);
  }
}
    </script>
  
  <script>
  export default {
    pageTransition: 'slide'
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
  
  /* Position and scale transition for the list (grid) */
  .list-move { /* This class is added for moving items within the transition-group */
    transition: transform 0.5s;
  }
  .list-enter-active, .list-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: scale(0.5); /* Start smaller and fade out */
  }
  
  /* Ensure that the absolute positioning doesn't overlap in an undesired way */
  .table-view, .grid-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  </style>
  
  
    