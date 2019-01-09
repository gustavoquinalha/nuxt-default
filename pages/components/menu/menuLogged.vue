<template lang="html">
<div class="menu">
  <div class="size margin">
    <div class="menu-container container wrap align-items-center justify-content-between">
      <div class="menu-logo">
         <nuxt-link to="/">
           <img src="~/assets/img/logo.png" class="logo" alt="" />
         </nuxt-link>
      </div>

      <div class="menu-dropdown">
        <div class="dropdown container">
          <div class="img-avatar">
            <img :src="$store.getters['account/pictureUrl']">
          </div>
          <div class="dropdown-content" style="width: 160px;">
            <div class="dropdown-block">
              <ul class="list-none">
                <li>
                  <nuxt-link to="/" class="dropdown-item">
                  My account
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/" class="dropdown-item">
                  Logout
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: $color-primary;
  overflow: hidden;
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
}
.menu-dropdown {
  flex-flow: 1;
}
</style>
