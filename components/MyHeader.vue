<template>
    <div class="header-container">
        <div class="view ">
            <a-radio-group v-model:value="selection" name="radioGroup" @change="handleChangeRadio">
                <a-radio :value="1">List View</a-radio>
                <a-radio :value="2">Grid View</a-radio>
            </a-radio-group>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TaskFilter  from './TaskFilter.vue';

export default defineComponent({
    name: 'MyHeader',
    emits: ['updateView'],
    setup(props, { emit }) {
        const selection = ref(1);
        const isGrid = ref(false);

        const handleChangeRadio = (value) => {
            isGrid.value = selection.value === 2;
            emit('updateView', value.target.value); // Emit the event correctly
        };

        return {
            selection,
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
    width: 400px;
    display: flex;
    justify-content: flex-start;
}
</style>