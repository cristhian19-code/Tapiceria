<template>
  <div class="py-5">
    <CardColorVue v-for="(tipo,index) in tipos" :key="index" :nombre="tipo.nombre" :colores="tipo.colores"/>
  </div>
</template>

<script>
import CardColorVue from '../components/CardColor.vue'
export default {
  name: 'OpcionesColor',
  data() {
    return {
      tipos:[
        {nombre: 'COLOR DE TELA',colores: [
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980169/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.42_PM_3_xjupil.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980168/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.43_PM_3_uxxaoq.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980167/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.43_PM_2_kqva7a.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980159/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.43_PM_4_i1wgu0.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980152/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.43_PM_cpxvcp.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980156/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.43_PM_1_qnvdm6.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980152/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.42_PM_1_gazitl.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980151/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.42_PM_2_sqshho.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980149/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.44_PM_pobij4.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980143/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.41_PM_gyx2jo.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980142/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.42_PM_suryom.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980139/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.44_PM_1_bbk9pn.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1612980138/ColoreTelas/WhatsApp_Image_2021-02-10_at_12.45.43_PM_5_ovqc0f.jpg'
        ]},
        {nombre: 'COLOR DE CUERO',colores: [
          'https://res.cloudinary.com/christiancode99/image/upload/v1613179402/Cuero/cuero_hxdbgj.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1613179401/Cuero/cuero2_qrrqpz.jpg',
          'https://res.cloudinary.com/christiancode99/image/upload/v1613179400/Cuero/cuero3_obj8rr.jpg',
        ]}
      ]
    }
  },
  components:{
    CardColorVue
  }
}
</script>

<style>

</style>