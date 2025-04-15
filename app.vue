<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
    import { useLanguageStore } from '~/stores/languagesStore';
    export default {
        mounted() {
            const languageStore = useLanguageStore();
            watch(
                () => languageStore.getCurrentLanguage,
                (newLang) => {
                    this.$i18n.locale = newLang;
                },
                { immediate: true }
            );
        },
    };
</script>