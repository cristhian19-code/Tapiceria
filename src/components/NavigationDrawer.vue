<template>
  <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      color="dark"
      dark
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
            v-model="group"
            active-class="white--text text--accent-4"
        >
          <v-list-item :to="{name: 'Home'}" class="my-5">
            <v-list-item-title><v-icon>mdi-home</v-icon> INICIO</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'Catalogo'}" class="my-5">
            <v-list-item-title><v-icon>mdi-book-open-page-variant</v-icon> CATÁLOGO</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'OpcionesColor'}" class="my-5">
            <v-list-item-title><v-icon>mdi-palette</v-icon> OPCIONES DE COLOR</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'Contacto'}" class="my-5">
            <v-list-item-title><v-icon>mdi-card-account-phone</v-icon> CONTACTO</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
    setup() {
        const drawer = inject('drawer')
        return{
            drawer,
            group: null
        }
    },
    watch: {
      group(){
          this.drawer = false
      }
    },
};
</script>

<style>

</style>