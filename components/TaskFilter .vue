<template>
        <div>
            <a-select ref="select" v-model:value="value1" style="width: 120px" @focus="focus" @change="handleChange">
                <a-select-option value="new">new -> old</a-select-option>
                <a-select-option value="old">old -> new</a-select-option>
            </a-select>
            <a-select ref="select" v-model:value="value2" style="width: 120px" @focus="focus" @change="handleChange1">
                <a-select-option value="small">small</a-select-option>
                <a-select-option value="big">big</a-select-option>
            </a-select>
            <a-select ref="select" v-model:value="value3" style="width: 120px" @focus="focus" @change="handleChange2">
                <a-select-option value="small">small</a-select-option>
                <a-select-option value="big">big</a-select-option>
            </a-select>
            <a-select ref="select" v-model:value="value4" style="width: 120px" @focus="focus" @change="handleChange3">
                <a-select-option value="small">small</a-select-option>
                <a-select-option value="big">big</a-select-option>
            </a-select>
        </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CustomFilter',
    setup(props, { emit }) {
        const value1 = ref('new');
        const value2 = ref('small');
        const value3 = ref('small');
        const value4 = ref('small ');
 

        const focus = () => {
            console.log('focus');
        };
        const handleChange = value => {
            console.log(`selected ${value}`);
        };
        const handleChange1 = value => {
            console.log(`selected ${value}`);
        };
        const handleChange2 = value => {
            console.log(`selected ${value}`);
        };
        const handleChange3 = value => {
            console.log(`selected ${value}`);
        };
        return {
            value1,
            value2,
            value3,
            value4,
            focus,
            handleChange,
            handleChange1,
            handleChange2,
            handleChange3
            
        };
    },
});
</script>

<style lang="css" scoped>
.header-container{
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