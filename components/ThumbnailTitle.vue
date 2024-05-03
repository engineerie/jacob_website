<template>
    <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white p-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-xs">
      {{ title }}
    </div>
</template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  }
  </script>
  