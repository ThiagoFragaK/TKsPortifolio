<template>
    <br />
    <LoadingComponent v-if="isLoading" />
    <div v-else class="d-flex flex-wrap justify-content-center">
        <div 
            class="col-12 col-md-3 col-lg-3 mt-1 mx-1" 
            v-for="(project, index) in projects" 
            :key="index"
        >
            <div class="card h-100 bg-transparent border-dark mb-3" style="max-width: 20rem;">
                <div class="card-body d-flex flex-column">
                    <h4 class="card-title">{{ project.title[currentLanguage] }}</h4>
                    <p class="card-text flex-grow-1">
                        {{ project.description[currentLanguage] || 'No description provided.' }}
                    </p>
                    <p class="card-text"><small class="text-muted">{{ project.stacks }}</small></p>
                    <div class="row">
                        <div class="col">
                            <a 
                                v-if="project.url !== '-'" 
                                :href="project.url" 
                                target="_blank" 
                                class="btn btn-outlined-dark btn-sm"
                            >
                                <ExternalLink size="25" />
                            </a>
                        </div>
                        <div class="col">
                            <a 
                                v-if="project.repository" 
                                :href="project.repository" 
                                target="_blank" 
                                class="btn btn-outlined-dark btn-sm"
                            >
                                <Github size="25" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ExternalLink, Github } from 'lucide-vue-next';
    import { useLanguageStore } from '@/stores/languagesStore';
    import LoadingComponent from '~/components/LoadingComponent.vue';
    export default {
        components: {
            LoadingComponent,
            ExternalLink,
            Github,
        },
        data() {
            return {
                isLoading: true,
                languages: useLanguageStore(),
                projects: []
            }
        },
        async mounted() {
            this.isLoading = true;
            this.projects = await $fetch('/api/projects')
            this.isLoading = false;
        },
        computed: {
            currentLanguage() {
                return this.languages.getCurrentLanguage;
            }
        }
    }
</script>