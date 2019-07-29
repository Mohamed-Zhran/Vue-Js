<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
    data: function() {
        return {
            pageName: "About Us",
            pageDescription: "This About Us Page"
        };
    },
    name: "about"
};
</script>
