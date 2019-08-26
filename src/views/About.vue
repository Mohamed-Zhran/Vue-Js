<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <p>{{ id }}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            pageName: "About an Us",
            pageDescription: "This a is a About Us Page"
            // id: this.$route.params.id
        };
    },
    name: "about",
    props: ["id"]
};
</script>
