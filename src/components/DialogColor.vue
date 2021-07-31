<template>
  <v-dialog
    v-model="dialog"
    width="60%"
  >
  <v-card :style="{'background-image': `url(${url})`}">
  </v-card>
  </v-dialog>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
    props:['url'],
    setup() {
        const dialog = inject('dialog');
        return{
            dialog
        }
    }
}
</script>

<style>
.v-card{
  background-size: cover;
  background-position: center center;
  height: 80vh;
}

@media (max-width: 700px) {
  .v-card{
    height: 60vh;
  }
}

</style>