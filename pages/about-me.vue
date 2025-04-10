<template>
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
</template>

<script>
    export default {
        data: () => ({
            aboutMe: {}
        }),
        async mounted() {
            this.aboutMe = await $fetch('/api/about-me')
        }
    }
</script>