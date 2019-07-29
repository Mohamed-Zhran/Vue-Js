<template>
    <div class="header">
        <div class="container">
            <h3 class="logo">Mohamed Zhran Vue</h3>
            <ul>
                <router-link to="/" tag="li"><a>Home</a></router-link>
                <router-link to="/about" tag="li"><a>About</a></router-link>
                <router-link to="/help" tag="li"><a>Help</a></router-link>
                <router-link to="/blog" tag="li"><a>Blog</a></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #333;
    color: #fff;
    overflow: hidden;
    .logo {
        font-size: 24px;
        padding: 20px;
        float: left;
        width: 290px;
        margin: 0;
    }
    ul {
        margin: 0;
        float: left;
        width: calc(100% - 400px);
        li {
            padding: 20px;
            display: inline-block;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
</style>
