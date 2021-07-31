<template>
    <v-layout wrap class="px-3 py-7 my-5">
        <v-flex d-flex justify-center align-center xs12 md5 :class="`order-md-${ index % 2 == 0 ? 1 : 0}`" class=" mt-sm-5 mt-md-0 order-sm-0" >
            <img class="catalogo" height="300" width="400" :src="url" alt="">
        </v-flex>
        <v-flex xs12 md7 d-flex justify-center align-center :class="`order-md-${ index % 2 == 0 ? 0 : 1}`" class=" mt-sm-5 mt-md-0 px-10 order-sm-1">
            <div>
                <h1 class="font-weight-thin">{{nombre}}</h1>
                <p class="font-weight-light my-5">Aquí comienza tu texto. Puedes hacer clic en este punto y empezar a escribir. Accusantium doloremque laudantium totam rem.</p>
                <div>
                    <ul class="caracteristicas">
                        <li>Color: <router-link :to="{name: 'OpcionesColor'}" class="color">{{descripcion.color}}</router-link></li>
                        <li>Precio: S/.{{descripcion.precio}}</li>
                        <li>Medidas: 
                            <ul>
                                <li>triple: {{descripcion.tamaño.triple.width}}m ancho X {{descripcion.tamaño.triple.height}}m alto x {{descripcion.tamaño.triple.long}}m largo</li>
                                <li>doble: {{descripcion.tamaño.doble.height}}m de largo</li>
                                <li>individual: {{descripcion.tamaño.individual.height}} de largo</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props:{
        url: String,
        nombre: String,
        descripcion: {
            detalles: String,
            color: String,
            peso: String,
            tamaño: String
        },
        index: Number
    }
}
</script>

<style>
.catalogo{
    border-radius: 5px;
    cursor: pointer;
}

.catalogo:hover{
    transition: .5s;
    transform: scale(1.04);
}

ul{
    list-style: none;
}

.color{
    text-decoration: none;
}
</style>