<template>
  <div class="flex justify-center items-center dark:opacity-60">
    <!-- Apply a glitch effect during the out-in transition -->
    <!-- Added Tailwind classes for responsive height control -->
    <div class="sm:m-24 m-2">
      <transition name="glitch" mode="out-in" @before-enter="beforeEnter" @after-enter="afterEnter">
        <video width="100%" height="auto" autoplay muted playsinline @ended="playNextVideo" preload="auto"
          class="video rounded-xl overflow-hidden " :key="currentVideo">
          <source :src="currentVideo" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </transition>
      <transition name="glitch" mode="out-in" @before-enter="beforeEnter" @after-enter="afterEnter">

        <p class="text-sm mt-2">{{ currentDescription }}</p> <!-- Description text below the video -->
      </transition>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define the array of videos with descriptions
const videos = [
  { src: '/videos/9.mp4', description: 'A serene view of the mountains during sunrise.' },
  { src: '/videos/2.mp4', description: 'An exciting downtown night scene with vibrant lights.' },
  { src: '/videos/3.mp4', description: 'A peaceful beach with gentle waves lapping the shore.' },
  { src: '/videos/4.mp4', description: 'A bustling city street scene captured at noon.' },
  { src: '/videos/5.mp4', description: 'A quiet lake surrounded by forests in the early morning.' },
  { src: '/videos/6.mp4', description: 'An artistic interpretation of urban architecture.' },
  { src: '/videos/7.mp4', description: 'Night sky filled with stars over a calm desert.' },
  { src: '/videos/8.mp4', description: 'Early morning dew on wildflowers in a meadow.' },
  { src: '/videos/1.mp4', description: 'A fast-paced montage of various cityscapes.' }
];

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Shuffle videos initially
shuffle(videos);

// Reactive state for current video and description
const currentVideoIndex = ref(0);
const currentVideo = ref(videos[0].src); // Start with the first video source after shuffle
const currentDescription = ref(videos[0].description); // Start with the first description

// Function to play the next video
function playNextVideo() {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length;
  currentVideo.value = videos[currentVideoIndex.value].src;
  currentDescription.value = videos[currentVideoIndex.value].description; // Update current description based on index
}

function beforeEnter(el) {
  // Prepare for animation
}

function afterEnter(el) {
  // Cleanup after animation
}
</script>

<style scoped>
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
</style>