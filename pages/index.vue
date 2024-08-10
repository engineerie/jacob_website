<template>
  <transition name="fade-grow">
    <div v-if="isContentLoaded">
      <!-- <UModal v-model="isOpen" :overlay="true">
      <UCard :ui="{
    ring: '',
    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
    rounded: 'rounded-xl',
  }"
  >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Upcoming
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="toggleModal" />
          </div>
        </template>
<ul class="list-none">
  <li>
    <NuxtLink to="https://research-architecture.org/Book-Series" target="blank"
      class="text-blue-600 dark:text-blue-500">Article in CRA III: Common Sensing (2024)
    </NuxtLink>
  </li>
  <li>
    <NuxtLink to="https://www.mustarinda.fi/en/magazine" target="blank" class="text-blue-600 dark:text-blue-500">Article
      with George Ridgway in Mustarinda Magazine (2024)
    </NuxtLink>
  </li>
</ul>
</UCard>
</UModal> -->
      <div class="dark:opacity-80 lg:m-28
    ">
        <!-- <div :class="{ gradient: isGradientActive }" @click="toggleGradient"> -->
        <transition name="glitch" mode="out-in">
          <video width="100%" height="auto" autoplay muted playsinline @ended="playNextVideo" preload="auto"
            class="video rounded-sm overflow-hidden shadow-lg" :key="currentVideo">
            <!-- <source :src="currentVideo" type="video/mp4" /> -->
            <source src="/videos/subsim_web.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </transition>
        <transition name="glitch" mode="out-in">
          <p class="text-sm mt-2 ">SUBSIM
            <UBadge size="xs" label="Work in progress" color="orange" variant="subtle" />
          </p>
          <!-- <p class="text-sm mt-2">{{ currentDescription }}</p> -->
        </transition>
      </div>
      <!-- </div> -->
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Define the array of videos with descriptions
const videos = [
  {
    src: "/videos/9.mp4",
    description: "",
  },
  {
    src: "/videos/2.mp4",
    description: "",
  },
  {
    src: "/videos/3.mp4",
    description: "",
  },
  {
    src: "/videos/4.mp4",
    description: "",
  },
  {
    src: "/videos/5.mp4",
    description: "",
  },
  {
    src: "/videos/6.mp4",
    description: "",
  },
  {
    src: "/videos/7.mp4",
    description: "",
  },
  {
    src: "/videos/8.mp4",
    description: "",
  },
  {
    src: "/videos/1.mp4",
    description: "",
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(videos);
const currentVideoIndex = ref(0);
const currentVideo = ref(videos[0].src);
const currentDescription = ref(videos[0].description);

const isOpen = ref(true); // Modal is open by default on each visit
const isGradientActive = ref(isOpen.value); // Sync gradient with modal visibility
const isContentLoaded = ref(false); // Controls the rendering of the main content

onMounted(() => {
  isContentLoaded.value = true; // Enable content rendering after component is mounted
});

// Watch isOpen to control the gradient activation
watch(isOpen, (newVal) => {
  isGradientActive.value = newVal;
});

function toggleModal() {
  isOpen.value = !isOpen.value;
}

function playNextVideo() {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length;
  currentVideo.value = videos[currentVideoIndex.value].src;
  currentDescription.value = videos[currentVideoIndex.value].description;
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

@keyframes glitch {
  0% {
    transform: translate(0);
    opacity: 1;
  }

  20% {
    transform: translate(-2px, 2px);
    opacity: 0.2;
    background-color: rgb(33, 7, 58);
  }

  40% {
    transform: translate(2px, -2px);
    opacity: 0.7;
    background-color: blueviolet;
  }

  60% {
    transform: translate(-2px, -2px);
    opacity: 0.1;
    background-color: rgb(89, 226, 43);
  }

  80% {
    transform: translate(2px, 2px);
    opacity: 0.6;
    background-color: blueviolet;
  }

  100% {
    transform: translate(0);
    opacity: 0;
  }
}

.glitch-enter-active,
.glitch-leave-active {
  animation: glitch 0.15s linear;
}

.glitch-enter-from,
.glitch-leave-to {
  opacity: 0;
}

.glitch-enter-to,
.glitch-leave-from {
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.gradient {
  --size: 750px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(120, 1%, 41%), hsl(0, 0%, 60%)),
    url("/svg/nnnoise.svg");
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 200px;
  }
}

body {
  background-color: #071c39;
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
}

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.5s ease-out;
}
</style>
