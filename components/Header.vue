<template>
    <div>
        <div>
            <a-radio-group v-model:value="value" name="radioGroup">
                <a-radio :value="1">List View</a-radio>
                <a-radio :value="2">Grid View</a-radio>
            </a-radio-group>
        </div>
        <div></div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const value = ref('1');
</script>