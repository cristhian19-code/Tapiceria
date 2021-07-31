<template>
    <div>
        <img @click="dialog = !dialog" class="my-2 img-color" height="250" width="250" :src="url"/>
        <DialogColorVue :url="url" />
    </div>
</template>

<script>
import { provide, ref } from '@vue/composition-api'
import DialogColorVue from './DialogColor.vue'

export default {
    props:['url'],
    setup() {
        const dialog = ref(false)
        provide('dialog',dialog)
        return{
            dialog
        }
    },
    components:{
        DialogColorVue,
    }
}
</script>

<style>
.img-color{
    cursor: pointer;
    border-radius: 5px;
}

.img-color:hover{
    transition: .5s;
    transform: scale(1.05);
}
</style>