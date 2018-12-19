<template lang="html">
<div class="menu">
  <div class="size margin">
    <div class="menu-container container wrap align-items-center justify-content-between">
      <div class="menu-logo">
         <nuxt-link to="/">
           <img src="~/assets/img/logo.png" class="logo" alt="" />
         </nuxt-link>
      </div>

      <div class="menu-perfil container">
        <nuxt-link to="/login" class="">
          <div class="img-avatar">

          </div>
        </nuxt-link>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.img-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: $color-primary;
}
</style>
