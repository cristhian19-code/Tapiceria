<template>
<v-footer
    dark
    padless
>
    <v-card
        flat
        tile
        height="100%"
        class="card-footer dark lighten-1 white--text text-center"
    >
        <v-card-text class="my-3">
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
            >
                <v-icon size="24px">
                {{ icon }}
                </v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text>
            <v-layout row wrap>
                <v-flex class="display-2 my-4 d-flex flex-column justify-center" sm12 md4 >
                    Tapiceria
                </v-flex>
                <v-flex sm12 md4  class="d-flex flex-column my-4">
                    <p class="headline text-center">Secciones</p>
                    <v-btn to="/" plain color="white">Inicio</v-btn>
                    <v-btn to="/catalogo" plain color="white">Catalogo</v-btn>
                    <v-btn to="/opciones"  plain color="white">Colores</v-btn>
                    <v-btn to="/contacto" plain color="white">Contacto</v-btn>
                </v-flex>
                <v-flex sm12 md4  class="text-start my-4 px-3">
                    <p class="headline text-center">Contactanos</p>
                    <p><v-icon size="24px">mdi-phone-forward</v-icon> 918955118</p>
                    <p><v-icon size="24px">mdi-email</v-icon> tapiceriaprueb@gmail.com</p>
                    <p><v-icon size="24px">mdi-map-marker</v-icon> Parque Industrial de Villa el Salvador</p>
                </v-flex>
            </v-layout>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — Desarrollado por <strong>Christian Ricardo</strong>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style>
.card-footer{
    width: 100%
}
</style>