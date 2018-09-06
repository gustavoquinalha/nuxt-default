<template lang="html">
  <div class="container column align-center">
    <ul class="list-none container align-center justify-content-around wrap tabs" :class="{show : showMenu}">

      <li @click="showMenu = false">
        <nuxt-link to="/about-us" class="tab-link">
          About Us
        </nuxt-link>
      </li>

      <li @click="showMenu = false">
        <nuxt-link to="/contact-us" class="tab-link">
          Contact Us
        </nuxt-link>
      </li>

      <li @click="showMenu = false">
        <nuxt-link to="/terms-and-conditions" class="tab-link">
          Terms and Conditions
        </nuxt-link>
      </li>

      <button type="button" name="button" class="btn btn-link" @click="showMenu = !showMenu"><i class="fas fa-angle-down"></i></button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss">
.tabs .nuxt-link-active {
    color: $color-dark;
    border-color: $color-primary;
}

.tabs {
    border-bottom: 1px solid $color-grey;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
    position: relative;
}

.tab-link {
    border-bottom: 2px solid transparent;
    height: 28px;
    box-sizing: border-box;
    display: inline-flex;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 10px;
    position: relative;
}

.btn-link {
    display: none;
}

@media (max-width: 520px) {
    .tabs {
        flex-direction: column;
        border-bottom: none;
        width: auto;
        background: red;
    }

    .tab-link {
        margin: 10px 0;
        height: auto;
        display: none;
    }

    .tabs .tab-link.nuxt-link-active {
        display: block;
        border-bottom: none;
    }

    .tabs.show .tab-link {
        display: inline-flex;
    }

    .btn-link {
        display: inline-flex;
        position: absolute;
        right: -10px;
    }
}
</style>
