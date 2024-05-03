<template>
    <div class="fixed w-full h-10 dark:bg-neutral-900 bg-neutral-100"> 
<Breadcrumb class="lg:ml-60 -left-2 top-2" />
        <div class="fixed flex right-2 top-2">
            <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
            <UButton
              color="gray"
              variant="ghost"
              aria-label="github"
              to = "https://github.com/engineerie"
              target="empty"
              class="px-2"
            > <UIcon name="i-simple-icons-github" class="w-5 h-5" dynamic/> </UButton> 
        </div>
        
        </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()
  const isDark = computed({
    get () {
      return colorMode.value === 'dark'
    },
    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })
  </script>