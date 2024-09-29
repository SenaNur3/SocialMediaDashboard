<template>
  <div>
   <Header />

    <div>
       <div v-if="listView"></div>
       <div v-else> </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useSocialMedia } from './store/socialMedia.js'


export default defineComponent({
 
  name: 'CreateTask',
  setup() {
  
    let listView = ref(true)




    return {
      listView
    }
  },
})
</script>
