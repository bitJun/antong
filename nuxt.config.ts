// https://nuxt.com/docs/api/configuration/nuxt-config
import zh from './locales/zh';
import en from './locales/en';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 4000,
  },
  css: ['@/public/style/common.css'],
  modules: [
    '@nuxtjs/i18n',
    '@element-plus/nuxt'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})