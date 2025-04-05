<template>
    <div>
        <Navbar />
        <br/>
        <div class="mx-4 my-2">
            <div class="card text-center bg-transparent border-dark mb-3 rounded-0">
                <div class="card-body">
                    <NuxtPage />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar.vue";
    export default {
        components: {
            Navbar
        },
    };
</script>