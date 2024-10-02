<template>
    <div>
        <div v-if="postDatas && postDatas.length > 0">
            <div class="post-wrapper">
                <div v-for="(post, index) in postDatas" :key="index" class="post">
                    <div><span>Platform name</span> : {{ post.username }}</div>
                    <div><span>Username</span> : {{ post.platform_name }}</div>
                    <div><span>Post content</span> : {{ post.post_content }}</div>
                    <div><span>Post_date_time</span> : {{ post.post_date_time }}</div>
                    <div><span>Likes</span> : {{ post.likes }}</div>
                    <div><span>Comments</span> : {{ post.comments }}</div>
                    <div><span>Shares</span> : {{ post.shares }}</div>
                </div>
            </div>
        </div>
        <div v-else>
            No posts available
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ListView',
    props: {
        postDatas: {
            type: Array,
            required: true,
        },
    },
    setup(props) {

        return {
            postDatas: props.postDatas,
        }
    }
})
</script>

<style>
.post-wrapper {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
 
}

@media (max-width: 1024px) {
    .post-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 768px) {
    .post-wrapper {
        grid-template-columns: 1fr;
    }
}

.post {
    background-color: #f9f9f9;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 5px 5px #ccc;
}

span {
    font-size: medium;
    font-weight: 600;
}
</style>