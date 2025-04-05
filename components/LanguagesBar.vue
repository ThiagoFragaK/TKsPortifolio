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