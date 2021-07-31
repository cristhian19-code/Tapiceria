<template>
  <v-layout wrap>
    <v-layout wrap d-flex justify-center class="my-4 col-12">
        <h1 class="display-2 font-weight-light text-center">{{nombre}}</h1>
    </v-layout>
    <v-layout wrap d-flex class="my-4 color px-5">
         <ImageColorVue v-for="(color, index) in colores" :key="index" :url="color"/>
    </v-layout>
  </v-layout>
</template>

<script>
import ImageColorVue from './ImageColor.vue'
export default {
    props:{
        nombre: String,
        colores: Array
    },
    components:{
        ImageColorVue
    }
}
</script>

<style>
.color{
    justify-content: center;
    grid-gap: 20px;
}

</style>