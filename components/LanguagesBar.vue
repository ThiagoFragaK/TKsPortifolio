<template>
    <div class="row mb-1">
        <div class="col d-flex justify-content-end align-items-start" style="height: 48px;">
            <button 
                class="btn btn-unstyled"
                @click="changeLanguage"
            >
                <div class="row">
                    <div class="col">
                        <p class="language">{{ currentLanguage.toUpperCase() }}</p>
                    </div>
                    <div class="col">
                        <Languages class="me-2" size="20" />
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
    import { Languages } from 'lucide-vue-next';
    import { useLanguageStore } from '@/stores/languagesStore';
    export default {
        components: {
            Languages,
        },
        data() {
            return {
                languageStore: useLanguageStore(),
                setLanguage: 0,
                languages: [
                    "en",
                    "pt"
                ],
            }
        },
        methods: {
            changeLanguage() {
                this.setLanguage === 0 ? this.setLanguage = 1 : this.setLanguage = 0;
                this.languageStore.switchLanguages(this.currentLanguage)                
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
    .language {
        font-weight: bold;
    }
    .btn-unstyled:disabled {
        border: none;
        background: transparent;
        box-shadow: none;
        cursor: default;
    }
    .btn-unstyled {
        border: none;
        outline: none;    
    }
    .btn-unstyled:focus,
    .btn-unstyled:active {
        outline: none;
        box-shadow: none;
    }
</style>