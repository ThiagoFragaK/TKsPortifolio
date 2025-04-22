<template>
    <LanguagesBar />
  
    <div class="row">
        <div class="col">
            <div class="d-flex justify-content-center align-items-center" style="height: 100px;">
                <ul class="nav nav-underline">
                    <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Home</NuxtLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/about-me" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >{{ aboutme }}</NuxtLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/projects" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >{{ projects }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { Aboutme, Projects } from '@/locales/navbar';
    import { useLanguageStore } from '@/stores/languagesStore';
    import LanguagesBar from "@/components/LanguagesBar.vue";
    export default {
        components: {
            LanguagesBar,
        },
        data: () => ({
            languages: useLanguageStore(),
        }),
        computed: {
            aboutme() {
                return Aboutme[this.languages.getCurrentLanguage];
            },
            projects() {
                return Projects[this.languages.getCurrentLanguage];
            },   
        }
    }
</script>

<style scoped>
    .nav-item {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.1rem;
        font-weight: bold;
    }    
</style>