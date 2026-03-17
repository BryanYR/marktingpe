// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', 'nuxt-icon'],

  css: [
    '~/assets/css/main.css',
    'vue-toastification/dist/index.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Markting.pe - Transformamos Ideas en Resultados',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Agencia de marketing digital especializada en estrategias innovadoras y resultados medibles.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },
})
