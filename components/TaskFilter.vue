<template>
    <div class="filter-container">
        <a-radio-group v-model="activeFilter" size="small">
            <a-radio-button value="newDate" @click="updateFilter('newDate')">Newest Date to Oldest Date</a-radio-button>
            <a-radio-button value="oldDate" @click="updateFilter('oldDate')">Oldest Date to Newest Date</a-radio-button>
        </a-radio-group>

        <a-radio-group v-model="activeFilter" size="small">
            <a-radio-button value="increasingLikes" @click="updateFilter('increasingLikes')">Increasing Likes</a-radio-button>
            <a-radio-button value="decreasingLikes" @click="updateFilter('decreasingLikes')">Decreasing Likes</a-radio-button>
        </a-radio-group>

        <a-radio-group v-model="activeFilter" size="small">
            <a-radio-button value="increasingComments" @click="updateFilter('increasingComments')">Increasing Comments</a-radio-button>
            <a-radio-button value="decreasingComments" @click="updateFilter('decreasingComments')">Decreasing Comments</a-radio-button>
        </a-radio-group>

        <a-radio-group v-model="activeFilter" size="small">
            <a-radio-button value="increasingShares" @click="updateFilter('increasingShares')">Increasing Shares</a-radio-button>
            <a-radio-button value="decreasingShares" @click="updateFilter('decreasingShares')">Decreasing Shares</a-radio-button>
        </a-radio-group>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useSocialMedia } from '../store/socialMedia.js';

export default defineComponent({
    name: 'CustomFilter',
    setup() {
        const socialMediaStore = useSocialMedia();

        const activeFilter = ref(''); 

        const updateFilter = (filter) => {
            activeFilter.value = filter; 
            socialMediaStore.setFilter(filter); 
        };

        return {
            activeFilter, 
            updateFilter
        };
    },
});
</script>

<style scoped>
.filter-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: end;
}
</style>
