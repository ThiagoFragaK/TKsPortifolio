<template>
    <br />
    <LoadingComponent v-if="isLoading" />
    <div v-else class="row">
        <div class="col" v-for="(project, index) in projects" :key="index">
            <div class="card bg-transparent border-dark mb-3" style="max-width: 20rem;">
                <div class="card-body">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <p class="card-text">{{ project.description || 'No description provided.' }}</p>
                    <p class="card-text"><small class="text-muted">{{ project.stacks }}</small></p>
                    <div class="row">
                        <div class="col">
                            <a 
                                v-if="project.url" 
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
    import LoadingComponent from '~/components/LoadingComponent.vue';
    import { ExternalLink, Github } from 'lucide-vue-next';
    export default {
        components: {
            LoadingComponent,
            ExternalLink,
            Github,
        },
        data() {
            return {
                isLoading: true,
                projects: []
            }
        },
        async mounted() {
            this.isLoading = true;
            this.projects = await $fetch('/api/projects')
            this.isLoading = false;
        }
    }
</script>