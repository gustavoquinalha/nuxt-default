<template>
  <div class="app">
    <headerHome/>
    <contentHome/>
    <footerHome/>
  </div>
</template>

<script>
  import headerHome from '@/components/home/headerHome.vue'
  import contentHome from '@/components/home/contentHome.vue'
  import footerHome from '@/components/home/footerHome.vue'

  export default {
    components: {
      headerHome,
      contentHome,
      footerHome
    },
    middleware: 'public'
  }
</script>

<style lang="scss" scoped>
  .app {
    width: 100%;
    overflow: hidden;
  }
</style>
