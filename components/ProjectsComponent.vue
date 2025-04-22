<template>
    <br />
    <LoadingComponent v-if="isLoading" />
    <div v-else class="row">
        <div class="col-3" v-for="(project, index) in projects" :key="index">
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
            console.log(this.projects)
            this.isLoading = false;
        },
        computed: {
            currentLanguage() {
                return this.languages.getCurrentLanguage;
            }
        }
    }
</script>