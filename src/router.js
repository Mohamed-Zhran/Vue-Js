import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Help from "./views/Help.vue";
import About from "./views/About.vue";
import Blog from "./views/Blog.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about/:id",
            name: "about",
            component: About,
            props: true
        },
        {
            path: "/help",
            name: "help",
            component: Help
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        }
    ]
});
