<template>
    <div class="header-container">
        <div class="view ">
            <a-radio-group v-model:value="value" name="radioGroup" @change="handleChangeRadio">
                <a-radio :value="1">List View</a-radio>
                <a-radio :value="2">Grid View</a-radio>
            </a-radio-group>
        </div>
        <div class="filter" v-if="isGrid">
            <TaskFilter />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskFilter  from './TaskFilter .vue';

export default defineComponent({
    name: 'Header',

    setup(props, { emit }) {

        const value = ref(1);


        let isGrid = ref(false)

        const handleChangeRadio = () => {
            if (value.value === 2) {
                isGrid.value = true;
            } else {
                isGrid.value = false;
            }
            emit('updateView', value.value);
        };


        return {
            value,
            isGrid,
            handleChangeRadio,

        };
    },
});
</script>

<style lang="css" scoped>
.header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.view {
    padding: 8px;
    width: 300px;
    border-radius: 8px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
}
</style>