<template>
<div class="">
  <menuHome />
  <div class="content-about">
    <div class="size margin">
      <div class="container-about overflow">
        <nuxt></nuxt>
      </div>
    </div>
  </div>
  <footerHome/>
</div>
</template>

<script>
   import menuHome from '~/pages/components/home/menuHome.vue'
   import footerHome from '~/pages/components/home/footerHome.vue'
   export default {
    components: {
      menuHome,
      footerHome
    },
    data() {
      return {
      }
    }
  }
  </script>


<style lang="scss">
.content-about {
  min-height: calc(100vh - 60px - 250px);
  padding: 50px 0;
}

.container-about {
  background: $color-white;
  padding: 20px;
  border: 1px solid $color-light-grey;
  border-radius: 3px;
  min-height: calc(100vh - 60px - 250px -100px);
}
</style>
