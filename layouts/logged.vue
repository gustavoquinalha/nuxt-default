<template>
<div class="bg-gradient">
  <menuLogged />
  <nuxt></nuxt>
  <footerHome/>
</div>
</template>

<script>
   import menuLogged from '@/components/menu/menuLogged.vue'
   import footerHome from '@/components/home/footerHome.vue'
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
