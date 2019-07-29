<template>
    <div class="our-blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPosts
                            v-for="post in posts"
                            :key="post.id"
                            :views="post.views"
                            :title="post.title"
                            :date="post.date"
                            :content="post.content"
                            :author="post.author"
                            :category="post.category"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="side-bar">
                        <BlogSideBar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSideBar from "@/components/Blog/BlogSideBar.vue";
import JsonPosts from "@/json/MOCK_DATA.json";

export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDescription: "This is Blog page",
            posts: JsonPosts
        };
    },
    name: "Blog",
    components: {
        BlogPosts,
        BlogSideBar
    }
};
</script>

<style scoped></style>
