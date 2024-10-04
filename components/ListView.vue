<template>

    <div v-if="postDatas.length > 0">
        <!-- Arama inputları -->
        <div style="margin-bottom: 16px;">
            <a-input v-model="search.platform_name" placeholder="Search platform name"
                style="width: 200px; margin-right: 8px;" @input="handleFilter" />
            <a-input v-model="search.username" placeholder="Search username" style="width: 200px; margin-right: 8px;"
                @input="handleFilter" />
            <a-input v-model="search.post_content" placeholder="Search post content"
                style="width: 200px; margin-right: 8px;" @input="handleFilter" />
        </div>
        <!-- Tablonun kendisi -->
        <a-table :data-source="filteredData" :columns="columns" :rowKey="record => record.id"
            :scroll="{ x: 720, y: 530 }" />
    </div>
    <div v-else>
        No posts available
    </div>

</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
    name: 'ListView',
    props: {
        postDatas: {
            type: Array,
        },
    },
    setup() {
        const state = reactive({
            searchText: '',
            searchedColumn: '',
        });
        const data = [
            {
                key: '1',
                title: 'aa',
                platform_name: 'Jim Red',
                username: 32,
            },
        ];
        const searchInput = ref();
        
        const columns = [
            {
                title: 'Platform name',
                dataIndex: 'platform_name',
                key: 'platform_name',
                customFilterDropdown: true,
                onFilter: (value, record) => record.platform_name.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownOpenChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
                customFilterDropdown: true,
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
        ]

        const handleSearch = (selectedKeys, confirm, dataIndex) => {
            confirm();
            state.searchText = selectedKeys[0];
            state.searchedColumn = dataIndex;
        };
        const handleReset = clearFilters => {
            clearFilters({
                confirm: true,
            });
            state.searchText = '';
        };
        return {
            columns,
            handleReset,
            handleSearch,
            state,
            searchInput,
            data
        }
    }
})
</script>

<style scoped>
.highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
}
</style>