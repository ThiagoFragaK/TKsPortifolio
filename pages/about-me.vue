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
            aboutMe: {
                firstCollumn: `I'm Thiago Fraga, a Full-Stack Developer and Software architect with over 6 years of experience.
                    My expertise lies in developing robust and scalable web applications using modern technologies like Laravel, .NET, and Vue.js. With a strong background in Software Architecture and a passion for clean code, I focus on building efficient solutions that stand the test of time.`,
                secondCollumn: `Throughout my career, I've worked on projects ranging from small startups to large-scale enterprise systems, where I not only contributed to the development but also played key roles in refactoring legacy systems, improving performance, and ensuring best practices are followed.
                    I’m always striving for excellence in every line of code I write, emphasizing scalable architecture, optimization, and seamless integration. I'm motivated by the opportunity to solve complex problems, collaborate with talented teams, and deliver meaningful software that makes an impact.`,
            }
        })
    }
</script>