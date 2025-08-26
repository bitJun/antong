import zhCN from './locales/zh.json';
import khmer from './locales/khmer.json';
import en from './locales/en.json';

export default defineI18nConfig(() => ({
  legacy: false,
  // locale: 'zh-cn',
  locale: 'en',
  messages: {
    en: en,
    'zh-cn': zhCN,
    khmer: khmer,
  }
}))