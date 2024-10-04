<template>
    <div class="container">
        <div class="content-wrapper">
            <!-- Ensure the event handler is properly bound -->
            <MyHeader @updateView="handleViewChange" />

            <div class="down-area">
                <div v-if="listView">
                    <ListView :postDatas="postData" />
                </div>
                <div v-else>
                    <GridView :postDatas="postData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import MyHeader from '../components/MyHeader.vue';
import ListView from '../components/ListView.vue';
import GridView from '../components/GridView.vue';
import { useSocialMedia } from '../store/socialMedia.js';


const listView = ref(true);
const postData = ref([])
const socialMediaStore = useSocialMedia();

const handleViewChange = (viewType) => {
    listView.value = viewType === 1;
};

onMounted(() => {
    socialMediaStore.fetchPosts();
});



watch(socialMediaStore, (val) => {
    console.log('val',val.post)
    postData.value = val.post
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