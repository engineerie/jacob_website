<template>
    <transition name="fade-grow" >
        <div v-if="isImageVisible">
            <NuxtImg  :src="imgSrc" width="700" class="w-full rounded-xl" format="webp"/>
            <p class="text-sm mt-2"><slot /></p>
        </div>
    </transition>
</template>

<script setup>
defineProps(["imgSrc"]);
</script>

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
