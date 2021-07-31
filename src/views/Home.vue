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
          <h1 class="display-3 mb-4">
            Tapiceria de sofas en general
          </h1>
          <!-- <h4 class="subheading">
            Build your application today!
          </h4> -->
        </v-col>
      </v-row>
    </v-parallax>
    
    <v-layout wrap class="my-10 px-6">
      <v-flex xs12 md5 d-flex justify-center align-center>
        <img class="img-catalogo" height="310" src="https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      </v-flex>
      <v-flex xs12 md7 d-flex justify-center>
        <div class="px-7 mt-sm-6 mt-md-0">
          <h1 class="display-2 font-mdi-font-weight-medium">Catálogo</h1>
          <p>Podra visualizar nuestra gran gama de muebles con los precios mas baratos en el mercado. Ademas que podras seleccionar el color de la tela o cuebro del mueble a elegir</p>
          <v-btn :to="{name: 'Catalogo'}" x-large class="mt-3" color="black" dark outlined>VER CATALOGO</v-btn>
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
    border-radius: 5px;
    cursor: pointer;
  }

  .img-catalogo:hover{
    transition: .5s;
    transform: scale(1.06);
  }

  @media(max-width: 700px){
    .display-3{
      font-size: 40px;
    }
  }
</style>
