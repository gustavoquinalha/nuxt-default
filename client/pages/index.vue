<template>
  <div>
    <div v-if="user._id">
      Bem vindo {{user.name}}
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: [ 'secure' ],
  
  computed: {
    ...mapState(['user'])
  }
}
</script>

