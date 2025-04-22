<template>
    <LoadingComponent v-if="isLoading" />
    <div v-else class="mt-4">
        <div class="row">
            <div class="col">
                <h2>{{ greetings }}</h2>
                <br />
                <p class="text-dark text-justify">{{ firstCollumn }}</p>
            </div>
            <div class="col">
                <p class="text-dark text-justify">{{ secondCollumn }}</p>
            </div>
        </div>
        <br/>
        <div class="row">
            <figure>
                <blockquote class="blockquote">
                    <p class="mb-0">“{{ quote }}”</p>            
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">Thomas Jefferson</cite>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
    import { Greetings, FirstCollumn, SecondCollumn, Quote  } from '@/locales/about-me';
    import { useLanguageStore } from '@/stores/languagesStore';
    import LoadingComponent from '~/components/LoadingComponent.vue';
    export default {
        components: {
            LoadingComponent,
        },
        data: () => ({
            isLoading: false,
            languages: useLanguageStore(),
            aboutMe: {},
        }),
        computed: {
            greetings() {
                return Greetings[this.languages.getCurrentLanguage];
            },
            firstCollumn() {
                return FirstCollumn[this.languages.getCurrentLanguage];
            },
            secondCollumn() {
                return SecondCollumn[this.languages.getCurrentLanguage];
            },
            quote() {
                return Quote[this.languages.getCurrentLanguage];
            }
        }
    }
</script>

<style>
.text-justify {
    text-align: justify;
    text-align-last: left;
}
</style>