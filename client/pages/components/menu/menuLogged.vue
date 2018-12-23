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
            <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg">
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
