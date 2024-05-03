<template>
    <div>
      <div class="flex mb-2">
        <h2 class="text-xl">Research</h2>
      </div>
      <transition name="fade-grow" >
        <div v-if="isVisible">
  <p>Research archive is updated soon</p>
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
  