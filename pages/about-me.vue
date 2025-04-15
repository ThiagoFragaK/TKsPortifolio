<template>
    <LoadingComponent v-if="isLoading" />
    <div v-else>
        <div class="row">
            <div class="col">
                <h2>Hello there!</h2>
                <br/>
                <p class="text-dark">{{ aboutMe.firstCollumn }}</p>
            </div>
            <div class="col">
                <p class="text-dark">{{ aboutMe.secondCollumn }}</p>
            </div>
        </div>
        <br/>
        <div class="row">
            <figure>
                <blockquote class="blockquote">
                    <p class="mb-0">“In matters of style, swim with the current; in matters of principle, stand like a rock.”</p>            
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">Thomas Jefferson</cite>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
    import LoadingComponent from '~/components/LoadingComponent.vue';
    export default {
        components: {
            LoadingComponent,
        },
        data: () => ({
            isLoading: false,
            aboutMe: {},
        }),
        async mounted() {
            this.isLoading = true;
            this.aboutMe = await $fetch('/api/about-me')
            this.isLoading = false;
        }
    }
</script>