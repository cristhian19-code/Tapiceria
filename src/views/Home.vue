<template>
  <div class="home">
    <v-parallax
      dark
      src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-2 mb-4">
            Tapiceria de sofas en general
          </h1>
          <!-- <h4 class="subheading">
            Build your application today!
          </h4> -->
        </v-col>
      </v-row>
    </v-parallax>
    
    <v-layout wrap class="py-10">
      <v-flex xs12 md5 d-flex justify-center align-center>
        <img class="img-catalogo" height="300" src="https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      </v-flex>
      <v-flex xs12 md7 d-flex justify-center>
        <div class="px-7 mt-sm-6 mt-md-0">
          <h1 class="display-2 font-mdi-font-weight-medium">Catálogo</h1>
          <p class="my-5 font-font-weight-light">Aquí comienza tu texto. Puedes hacer clic en este punto y empezar a escribir. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque.</p>
          <v-btn :to="{name: 'Catalogo'}" x-large elevation="" color="black" dark outlined>VER CATALOGO</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
    name: 'Home',
    setup() {
        const drawer = inject('drawer')
        return{
            drawer: drawer.value,
        }
    }
};
</script>
<style>
  .img-catalogo{
    border-radius: 10px;
  }

  .img-catalogo:hover{
    transition: .5s;
    transform: scale(1.1);
  }
</style>
