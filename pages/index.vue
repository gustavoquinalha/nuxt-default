<template>
  <div class="app">
    <headerHome/>
    <contentHome/>
    <footerHome/>
  </div>
</template>

<script>
 import headerHome from '~/pages/components/home/headerHome.vue'
 import contentHome from '~/pages/components/home/contentHome.vue'
 import footerHome from '~/pages/components/home/footerHome.vue'

 export default {
  components: {
    headerHome,
    contentHome,
    footerHome
  }
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  overflow: hidden;
}
</style>
