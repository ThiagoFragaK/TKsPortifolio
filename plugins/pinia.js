import { createPinia } from 'pinia';
import { useLanguageStore } from '@/stores/languagesStore';

export default defineNuxtPlugin(nuxtApp => {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);

    const languageStore = useLanguageStore();
    nuxtApp.provide('languageStore', languageStore);
});