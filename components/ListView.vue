<template>

    <div v-if="postDatas.length > 0">
        <a-table :data-source="postDatas" :columns="columns" :rowKey="record => record.id" :scroll="{ x: 720, y: 530 }">
            <template #headerCell="{ column }">
                <template v-if="column.key === 'platform_name'">
                    <span style="color: #1890ff">platform_name</span>
                </template>
            </template>
     
           
            <template #bodyCell="{ text, column }">
                <span v-if="state.searchText && state.searchedColumn === column?.dataIndex">
                    <template v-for="(fragment, i) in text
                        .toString()
                        .split(new RegExp(`(?<=${state.searchText})|(?=${state.searchText})`, 'i'))">
                        <mark v-if="fragment.toLowerCase() === state.searchText.toLowerCase()" :key="i"
                            class="highlight">
                            {{ fragment }}
                        </mark>
                        <template v-else>{{ fragment }}</template>
                    </template>
                </span>
            </template>


            <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
                <div style="padding: 8px">
                    <a-input ref="searchInput" :placeholder="`Search ${column.dataIndex}`" :value="selectedKeys[0]"
                        style="width: 188px; margin-bottom: 8px; display: block"
                        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                        @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)" />
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleSearch(selectedKeys, confirm, column.dataIndex)">
                        <template #icon>
                            <SearchOutlined />
                        </template>
                        Search
                    </a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                        Reset
                    </a-button>
                </div>
            </template>
            <template #customFilterIcon="{ filtered }">
                <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
            </template>
        </a-table>

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