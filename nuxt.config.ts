// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", 'nuxt-icon', '@nuxt/image', '@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  image: {
    provider: 'netlify',
    dir: 'assets/images'
  },
  colorMode: {
    preference: 'dark'
  },
})

