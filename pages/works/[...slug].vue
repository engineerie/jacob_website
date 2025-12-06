<template>
  <main class="max-w-5xl mx-auto px-4 py-10 space-y-8 flex flex-col items-center" v-if="work">
    <header class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between text-center">
      <div class="space-y-2">
        <p class="text-sm text-neutral-500">
          <span v-if="work.medium">{{ work.medium }}</span>
          <span v-if="work.medium && work.year"> · </span>
          <span v-if="work.year">{{ work.year }}</span>
        </p>
        <h1 class="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">{{ work.title }}</h1>
        <p v-if="work.location" class="text-neutral-600 dark:text-neutral-300">{{ work.location }}</p>
        <div class="flex flex-wrap gap-2 justify-center" v-if="work.links?.length">
          <!-- <UBadge v-if="work.status" color="orange" variant="subtle">{{ work.status }}</UBadge> -->
          <!-- <UBadge v-for="name in work.collaborators || []" :key="name" color="neutral" variant="outline">
            {{ name }}
          </UBadge> -->

          <UButton size="xs" v-for="link in work.links" :key="link.to" :to="link.to" target="_blank" :label="link.label"
            variant="outline" class="ring-neutral-300/50 mt-4" />
        </div>
      </div>
      <div class="flex gap-2">
        <UButton icon="i-heroicons-arrow-uturn-left" to="/works" color="neutral" variant="ghost" />
      </div>
    </header>

    <section v-if="images.length" class="space-y-3">
      <UCarousel v-if="images.length > 1" v-slot="{ item }" :items="images"
        :ui="{ item: 'basis-full', indicators: 'mt-3' }" arrows class="group overflow-hidden rounded">
        <NuxtImg :src="item" :alt="work.title" width="1280" height="720" class=" transition-transform duration-500"
          format="webp" />
      </UCarousel>
      <NuxtImg v-else-if="images[0]" :src="images[0]" :alt="work.title" width="1280" height="720"
        class="w-full overflow-hidden rounded" format="webp" />
    </section>
    <ContentRenderer :value="work" class="prose dark:prose-invert max-w-xl" />
  </main>

  <main v-else class="max-w-5xl mx-auto px-4 py-10 space-y-4">
    <USkeleton class="h-10 w-72 rounded" />
    <USkeleton class="h-64 w-full rounded" />
    <USkeleton class="h-6 w-full rounded" />
    <USkeleton class="h-6 w-5/6 rounded" />
  </main>
</template>

<script setup>
const route = useRoute()
const slugParam = computed(() =>
  Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
)

const requestedPath = computed(() => `/works/${slugParam.value}`)
const requestedPathLower = computed(() => requestedPath.value.toLowerCase())

const { data: work } = await useAsyncData(
  `work-${slugParam.value}`,
  () =>
    queryContent('works')
      .where({
        $or: [
          { _path: requestedPath.value },
          { _path: requestedPathLower.value }
        ]
      })
      .findOne()
)

if (!work.value) {
  throw createError({ statusCode: 404, statusMessage: 'Work not found' })
}

const images = computed(() => (work.value?.images || []).filter((src) => !!src))

useSeoMeta({
  title: work.value?.title,
  description: work.value?.description
})
</script>
