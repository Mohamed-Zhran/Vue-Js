<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3>{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">
            {{ content }}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "date", "author", "category", "content"],
    name: "BlogPosts"
};
</script>

<style scoped lang="scss">
.post-box {
    position: relative;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    text-align: left;
    margin-bottom: 10px;
    .post-views {
        position: absolute;
        top: 5px;
        right: 20px;
        background-color: #c6c6c666;
        border-radius: 4px;
        padding: 1px 5px;
    }
    .post-date {
        color: #7e7e7e;
        display: block;
        margin: 10px 0 15px;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #555;
        margin-bottom: 30px;
    }
    .post-author {
        background-color: #2870c8;
        padding: 7px;
        color: #fff;
        border-radius: 5px;
    }
    .post-category {
        background-color: #7337d3;
        padding: 7px;
        color: #fff;
        border-radius: 5px;
    }
}
</style>
