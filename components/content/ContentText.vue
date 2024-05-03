<template>
    <transition name="fade-grow" >
        <div v-if="isImageVisible" class="border-r border-t border-b rounded-tr-xl rounded-br-xl rounded dark:border-gray-800 border-gray-300 pl-4 py-4 mb-4 pr-8 dark:text-gray-200 order-2 lg:order-1">  
            <slot />
        </div>
    </transition>

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
  