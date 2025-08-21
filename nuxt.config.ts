// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 4000,
    host: '0.0.0.0'
  },
  css: ['@/public/style/common.css','@/public/style/global.scss'],
  modules: ['@nuxtjs/i18n', '@element-plus/nuxt', 'nuxt-swiper'],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})