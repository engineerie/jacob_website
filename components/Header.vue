<template>
    <div class="fixed w-full h-10 dark:bg-neutral-900 bg-neutral-100"> 
<Breadcrumb class="lg:ml-60 left-4 top-2" />
        <div class="fixed flex right-2 top-2">
            <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
            <UButton
              icon="i-simple-icons-github" 
              color="gray"
              variant="ghost"
              aria-label="github"
              to = "https://github.com/engineerie"
              target="empty"
            /> 
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