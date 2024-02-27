<template>
  <div class="flex h-screen">
    <aside class="hidden lg:block w-80 bg-gray-900 border-r border-gray-800">
      <Aside />
    </aside>
    <main class="flex-1 flex justify-center mt-44">
      <div class="w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl p-4">
        <transition name="fade" mode="out-in">
          <NuxtPage />
        </transition>
      </div>
    </main>
  </div>
</template>

