<template lang="html">
<footer>
  <div class="footer">

    <div class="footer_link container align-center">
      <div class="size margin footer_link-container container wrap align-items-center">

        <div class="footer-logo">
          <img src="~/assets/img/logo.png" class="logo" alt="" />
        </div>

        <ul class="list-none container align-center wrap ul-social">
          <li><nuxt-link to="/about-us"  class="footer-link">About Us</nuxt-link></li>
          <li><nuxt-link to="/contact-us"  class="footer-link">Contact Us</nuxt-link></li>
          <li><nuxt-link to="/terms-and-conditions"  class="footer-link">Terms and Conditions</nuxt-link></li>
        </ul>
      </div>
    </div>

    <div class="footer-right container wrap align-items-center size margin">
      <span>Worbink 2018 All rights reserved</span>
      <ul class="list-none container ul-social ul-social-border">
        <li><a href="#" target="_blank" class="footer-link footer-icon"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="#" target="_blank" class="footer-link footer-icon"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>

  </div>
</footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 50px;
  // background: $color-light;
}

.logo {
  width: 100%;
  max-width: 100px;
}

.footer_link {
  background: $color-white;
  padding: 30px 0;
  min-height: 100px;
}
.footer-right {
  padding: 30px 0;
  font-size: 13px;
  min-height: 100px;
  justify-content: space-between;
}
.footer_link-container {
  justify-content: space-between;
}

.footer-link {
  font-size: 13px;
  margin: 10px;
}

.footer-icon {
  font-size: 18px;
}

@media (max-width: 480px) {
  .footer {
    padding-top: 30px;
  }

  .footer-right,
  .footer_link-container {
      justify-content: center;
      text-align: center;
      flex-direction: column;
  }

  .ul-social-border {
    border-top: 1px solid #ddd;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding-top: 10px;
  }
}
</style>
