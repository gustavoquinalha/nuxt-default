<template lang="html">
<div class="menu">
  <div class="size margin">
    <div class="menu-container container wrap align-items-center justify-content-between">
      <div class="menu-logo">
         <nuxt-link to="/">
           <img src="~/assets/img/logo.png" class="logo" alt="" />
         </nuxt-link>
      </div>

      <div class="menu-btn container">
        <nuxt-link to="/login" class="btn btn-outline btn-margin-right">Login</nuxt-link>
        <nuxt-link to="/register?type=artist" class="btn">Register</nuxt-link>
      </div>

      <div class="menu-btn-responsive">
        <nuxt-link to="/login" class="btn btn-outline"><i class="fas fa-sign-in-alt margin-right-5"></i>Enter</nuxt-link>
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

</style>
