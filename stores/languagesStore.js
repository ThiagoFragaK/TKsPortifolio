import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('languagesStore', {
    state: () => ({
        current: 0,
    }),
    getters: {
        getCurrentLanguage: (state) => state.current,
    },
    actions: {
        switchLanguages(newLanguage) {
            this.current = newLanguage;
        },
    },
    persist: true,
});