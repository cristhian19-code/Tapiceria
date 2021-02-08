<template>
    <v-app-bar
        absolute
        color="transparent"
        :elevation="0"
    >
        <v-btn v-if="window.width < 800" icon color="dark" @click="drawer = !drawer">
            <v-icon>mdi-view-headline</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-layout v-if="window.width >= 800" justify-end>
            <v-btn text class="mx-2" color="black" :to="{name: 'Home'}">INICIO</v-btn>
            <v-btn text class="mx-2" color="black" :to="{name: 'Catalogo'}">CATÁLOGO</v-btn>
            <v-btn text class="mx-2" color="black" :to="{name: 'OpcionesColor'}">OPCIONES DE COLOR</v-btn>
            <v-btn text class="mx-2" color="black" :to="{name: 'Contacto'}">CONTACTO</v-btn>
        </v-layout>
    </v-app-bar>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
    data() {
        return {
            window: {
                width: 0,
            }
        }
    },
    setup() {
        const drawer = inject('drawer')
        
        return{
            drawer
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
        }
    }
};
</script>

<style>
.nav-link{
    outline: none;
    text-decoration: none;
}
</style>