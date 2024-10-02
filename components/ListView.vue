<template>
    <div>
        <div v-if="postDatas && postDatas.length > 0">
            <a-table :dataSource="postDatas" :columns="columns" :scroll="{ x: 720, y: 530 }"/>
        </div>
        <div v-else>
            No posts available
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'ListView',
    props: {
        postDatas: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const columns = ref([
            {
                title: 'Platform name',
                dataIndex: 'platform_name',
                key: 'platform_name',
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Post content',
                dataIndex: 'post_content',
                key: 'post_content',
            },
            {
                title: 'Post date time',
                dataIndex: 'post_date_time',
                key: 'post_date_time',
                sorter: (a, b) => new Date(a.post_date_time) - new Date(b.post_date_time),
                sortDirections: ['descend', 'ascend'],
                defaultSortOrder: 'descend',
            },
            {
                title: 'Likes',
                dataIndex: 'likes',
                key: 'likes',
                sorter: (a, b) => a.likes - b.likes, // Likes için sıralama
                sortDirections: ['descend', 'ascend'], // Büyükten küçüğe ve küçükten büyüğe
            },
            {
                title: 'Comments',
                dataIndex: 'comments',
                key: 'comments',
                sorter: (a, b) => a.comments - b.comments, // Comments için sıralama
                sortDirections: ['descend', 'ascend'], // Büyükten küçüğe ve küçükten büyüğe
            },
            {
                title: 'Shares',
                dataIndex: 'shares',
                key: 'shares',
                sorter: (a, b) => a.shares - b.shares, // Shares için sıralama
                sortDirections: ['descend', 'ascend'], // Büyükten küçüğe ve küçükten büyüğe
            },
        ])

        return {
            columns,
            postDatas: props.postDatas,
        }
    }
})
</script>