<template>
    <div class="container">
        <div class="content-wrapper">
            <Header @updateView="handleViewChange" />

            <div class="down-area">
                <div v-if="listView">
                    <ListView :postDatas="postDatas"/>
                </div>
                <div v-else>
                    <GridView :postDatas="postDatas" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Header from '../components/Header.vue'
import ListView from '../components/ListView.vue'
import GridView from '../components/GridView.vue'

export default defineComponent({
    name: 'CreateTask',
    setup() {
        const listView = ref(true)
        const postDatas = ref([
            {   
                key: '1',
                platform_name: "Twitter",
                username: "kullanici1",
                post_content: "Bugün hava çok güzel!",
                post_date_time: "2024-10-02 10:30",
                likes: 100,
                comments: 25,
                shares: 10
            },
            {
                key: '2',
                platform_name: "Facebook",
                username: "kullanici2",
                post_content: "Yeni bir projeye başladım.",
                post_date_time: "2024-10-01 14:00",
                likes: 150,
                comments: 30,
                shares: 20
            },
            {
                key: '3',
                platform_name: "Instagram",
                username: "kullanici3",
                post_content: "Harika bir manzara!",
                post_date_time: "2024-09-30 16:45",
                likes: 250,
                comments: 40,
                shares: 15
            },
            {
                key: '4',
                platform_name: "LinkedIn",
                username: "kullanici4",
                post_content: "İş dünyasında yeni fırsatlar.",
                post_date_time: "2024-09-29 09:15",
                likes: 80,
                comments: 10,
                shares: 5
            },
            {
                key: '5',
                platform_name: "YouTube",
                username: "kullanici5",
                post_content: "Yeni video yayında!",
                post_date_time: "2024-09-28 18:00",
                likes: 500,
                comments: 60,
                shares: 25
            },
            {
                key: '6',
                platform_name: "TikTok",
                username: "kullanici6",
                post_content: "Kısa ama eğlenceli bir video.",
                post_date_time: "2024-09-27 21:30",
                likes: 300,
                comments: 50,
                shares: 30
            }
        ])


        const handleViewChange = (viewType) => {
            // Gelen viewType değerine göre listView'i güncelliyoruz
            listView.value = viewType === 1;
        }

        return {
            listView,
            handleViewChange,
            postDatas
        }
    },
})
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.content-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 24px;
    flex-direction: column;
    max-width: 1240px;
}

.down-area {
    margin-top: 16px;
}
</style>