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
                        >About me</NuxtLink>
                    </li>
                    <!-- <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/projects" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Projects</NuxtLink>
                    </li> -->
                    <!-- <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/blog" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Blog</NuxtLink>
                    </li> -->
                    <!-- <li class="nav-item mx-3">
                        <NuxtLink 
                        to="/contact-me" 
                        class="nav-link px-4 py-3 text-black" 
                        active-class="active"
                        >Contact me</NuxtLink>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import LanguagesBar from "@/components/LanguagesBar.vue";
    export default {
        components: {
            LanguagesBar,
        },
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