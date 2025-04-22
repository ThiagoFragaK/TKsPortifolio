<template>
    <div class="center-wrapper">
        <div class="text-center">
            <div class="row mb-4">
                <h1 class="allura-title">Thiago Fraga</h1>
                <p class="subtitle">{{ subtitle }}</p>
            </div>
            <br/>
            <div class="row mt-4">
                <p class="subtitle">@thiagofragak</p>
            </div>
            <div class="row mt-2">
                <div>
                    <button 
                        class="btn"
                        title="Open Instagram"
                        @click="redirectToInstagram"
                    >
                        <Instagram class="me-2" size="30" />
                    </button>
                    <button 
                        class="btn"
                        title="Open Github"
                        @click="redirectToGithub"
                    >
                        <Github class="me-2" size="30" />
                    </button>
                    <button 
                        class="btn"
                        title="Open Linkedin"
                        @click="redirectToLinkedin"
                    >
                        <Linkedin class="me-2" size="30" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { Subtitle } from '@/locales/main-page';
    import { useLanguageStore } from '@/stores/languagesStore';
    import { Instagram, Github, Linkedin } from 'lucide-vue-next';
    export default {
        name: "HomeComponent",
        data: () => ({
            languages: useLanguageStore(),
            InstagramUrl: "https://www.instagram.com/thiagofragak/",
            GithubUrl: "https://github.com/ThiagoFragaK",
            LinkedinUrl: "https://www.linkedin.com/in/thiago-fraga-902729170/",
        }),
        methods: {
            redirectToInstagram() {
                window.open(`${this.InstagramUrl}`, '_blank');
            },
            redirectToGithub() {
                window.open(`${this.GithubUrl}`, '_blank');
            },
            redirectToLinkedin() {
                window.open(`${this.LinkedinUrl}`, '_blank');
            },
        },
        computed: {
            subtitle() {
                return Subtitle[this.languages.getCurrentLanguage];
            }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

.allura-title {
  font-family: 'Allura', cursive;
  font-size: 8rem;
}

.subtitle {
    font-family: 'Agrandir', sans-serif;
    font-size: 1.25rem;
    margin: 0;
    color: #555;
}
</style>