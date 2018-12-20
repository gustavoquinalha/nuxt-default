<template>
<div class="bg-gradient">
  <menuLogged />
  <nuxt></nuxt>
  <footerHome/>
</div>
</template>

<script>
   import menuLogged from '~/pages/components/menu/menuLogged.vue'
   import footerHome from '~/pages/components/home/footerHome.vue'
   export default {
    components: {
      menuLogged,
      footerHome
    },
    data() {
      return {
      }
    }
  }
</script>
