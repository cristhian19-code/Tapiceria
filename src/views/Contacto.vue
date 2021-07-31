<template>
    <div class="contacto py-10 px-7">
        <p class="display-3 font-weight-thin text-center mt-3">HAZ TU PEDIDO</p>
        <div class="d-flex flex-sm-column flex-md-row mt-7">
            <iframe class="mapa col-sm-12 col-md-6 py-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.7632547314406!2d-76.94163188554684!3d-12.196505748023958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b941b0cdb51d%3A0xf927f7b9ba14c2ee!2sParque%20Industrial!5e0!3m2!1ses-419!2spe!4v1613182479213!5m2!1ses-419!2spe" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <div class="col-sm-12 col-md-6 informacion d-flex flex-column justify-center px-9 py-5">
                <p class="nombre-empresa">TAPICERIA PRUEBA</p>
                <p>Parque Industrial de Villa el Salvador</p>
                <p>Pedidos: <span class="font-weight-thin">918955118</span></p>
                <p>Correo:<span class="font-weight-thin"> tapiceriaprueba@gmail.com </span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.informacion{
    font-size: 20px;
    font-weight: bold;
}

.mapa{
    height: 60vh;
}

.nombre-empresa{
    font-size: 30px;
}
</style>