<template>
  <v-app>
    <NavbarVue/>
    <NavigationDrawerVue/>
    <v-main class="pt-15">
      <router-view></router-view>
    </v-main>
    <FooterVue />
  </v-app>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import { provide, ref } from '@vue/composition-api'
import NavigationDrawerVue from './components/NavigationDrawer.vue';
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',
  setup() {
      const drawer = ref(false)
      provide('drawer',drawer)
      return{
        drawer
      }
  },
  components: {
    NavbarVue,
    NavigationDrawerVue,
    FooterVue
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}

body{
  background-color: #FFFFFF;
}

</style>
