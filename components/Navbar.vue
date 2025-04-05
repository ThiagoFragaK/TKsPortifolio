<template>
    <div class="row mb-1">
        <div class="col d-flex justify-content-end align-items-start" style="height: 48px;">
            <button 
                class="btn btn-unstyled"
                disabled
                @click="changeLanguage"
            >
                <div class="row">
                    <div class="col">
                        <p class="language">{{ currentLanguage }}</p>
                    </div>
                    <div class="col">
                        <Languages class="me-2" size="20" />
                    </div>
                </div>
            </button>
        </div>
    </div>
  
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
                        >About me</NuxtLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/projects" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Projects</NuxtLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/blog" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Blog</NuxtLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/contact-me" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Contact me</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { Languages } from 'lucide-vue-next';
    export default {
        components: {
            Languages,
        },
        data() {
            return {
                setLanguage: 0,
                languages: [
                    "EN",
                    "PT"
                ],
            }
        },
        methods: {
            changeLanguage() {
                this.setLanguage === 0 ? this.setLanguage = 1 : this.setLanguage = 0;
            },
        },
        computed: {
            currentLanguage() {
                return this.languages[this.setLanguage];
            }
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
    .language {
        font-weight: bold;
    }
    .btn-unstyled:disabled {
        border: none;
        background: transparent;
        box-shadow: none;
        cursor: default;
    }
</style>