<template>
  <main class="max-w-6xl mx-auto px-4 py-10 space-y-8">
    <!-- <Breadcrumb /> -->

    <!-- <header class="space-y-1">
      <p class="text-sm text-neutral-500">Works</p>
      <h1 class="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">Projects & writings</h1>
      <p class="text-neutral-600 dark:text-neutral-300 max-w-2xl">
        Content-powered listing; any new `content/works/*.md` file appears here automatically.
      </p>
    </header> -->

    <div v-if="works.length" class="space-y-6">
      <div v-if="isMobile"
        class="divide-y divide-neutral-200 dark:divide-neutral-800 rounded-md border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <button v-for="work in mobileRows" :key="work._path" type="button"
          class="flex w-full items-start gap-4 py-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          @click="goTo(work._path)">
          <div class="h-16 w-20 shrink-0 overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900">
            <NuxtImg v-if="work.cover" :src="work.cover" :alt="work.title" width="160" height="120"
              class="h-full w-full object-cover" format="webp" />
          </div>
          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 break-words">
                {{ work.title }}
              </h3>
            </div>
            <span class="text-sm text-neutral-600 dark:text-neutral-300">{{ work.medium }}</span> <span>· </span><span
              class="text-sm text-neutral-600 dark:text-neutral-300 shrink-0">{{ work.year }}</span>

          </div>
        </button>
      </div>

      <UTable v-else :rows="tableRows" :columns="columns" @select="selectRow" :ui="{
        tr: { active: 'hover:bg-opacity-0 sm:hover:bg-opacity-100' },
        td: { base: 'align-middle' }
      }">
        <template #cover-data="{ row }">
          <div class="h-12 w-16 -m-3 rounded overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <NuxtImg v-if="row.cover" :src="row.cover" :alt="row.title" width="120" height="90"
              class="h-full w-full object-cover" format="webp" />
          </div>
        </template>
      </UTable>
    </div>

    <div v-else class="space-y-3">
      <USkeleton class="h-6 w-40 rounded" />
      <USkeleton class="h-48 w-full rounded" />
      <USkeleton class="h-48 w-full rounded" />
    </div>
  </main>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'

const router = useRouter()
const isMobile = useMediaQuery('(max-width: 639px)')

const { data } = await useAsyncData('works-list', () =>
  queryContent('works')
    .sort({ year: -1, title: 1 })
    .find()
)

const works = computed(() => data.value || [])

const sortedWorks = computed(() =>
  [...works.value].sort((a, b) => {
    const yearA = Number(a.year) || 0
    const yearB = Number(b.year) || 0
    if (yearA !== yearB) return yearB - yearA
    return String(a.title || '').localeCompare(String(b.title || ''))
  })
)

const columns = [
  { key: 'cover', label: '' },
  { key: 'title', label: 'Title', sortable: true },
  { key: 'medium', label: 'Medium', sortable: true },
  { key: 'year', label: 'Year', sortable: true },
]

const coverFor = (work) => (work.images || []).find((src) => !!src) || null

const tableRows = computed(() =>
  sortedWorks.value.map((work) => ({
    ...work,
    cover: coverFor(work)
  }))
)

const mobileRows = computed(() => tableRows.value)

function selectRow(row) {
  goTo(row._path)
}

function goTo(path) {
  router.push(path)
}
</script>
