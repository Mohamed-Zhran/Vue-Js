<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            pageName: "About an Us",
            pageDescription: "This a is a About Us Page"
        };
    },
    name: "about"
};
</script>
