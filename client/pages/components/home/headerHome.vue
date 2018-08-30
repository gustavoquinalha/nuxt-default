<template lang="html">
<header>
  <div class="header">
    <menuHome/>
    <div class="header-content container column align-center text-align-center">
      <div class="header-block">
        <div class="header-title">
          <h1>Your connection with the tattoo world</h1>
          <p>The right place to connect Tattoo studios with Tattoo Artists and use this connection to find clients.</p>
        </div>

        <div class="header-search container">
          <input type="text" placeholder="Search..." name="" value="" class="input-block">
          <button type="button" name="button" class="btn btn-search"><i class="fas fa-search"></i></button>
        </div>

        <div class="header-map container">

          <a href="#">
            <i class="icon fas fa-map-marked-alt"></i>
            <span>Find in map</span>
          </a>
        </div>
      </div>

      <div class="arrow">
        <a href="#content">
          <i class="fas fa-arrow-down"></i>
        </a>
      </div>

    </div>
  </div>
</header>
</template>

<script>
import menuHome from '~/pages/components/home/menuHome.vue'

 export default {
  components: {
    menuHome
  }
}
</script>


<style lang="scss">
.arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
    a {
      font-size: 1.5rem;
      color: $color-white;
      transition: .3s;
      opacity: .5;
        &:hover {
          opacity: 1;
        }
    }
}
.header {
  width: 100%;
  min-height: 100vh;
  background: $color-primary;
  background: url('~/assets/img/home/header.png'), $color-primary;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: .3s;
    h1,
    p {
      color: $color-white;
    }

    h1 {
      font-size: 2.2rem;
      margin-bottom: 15px;
    }
}

.header-block {
  width: 95%;
  max-width: 600px;
}

.header-content {
  min-height: calc(100vh - 60px);
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.header-search {
  margin-top: 30px;
}

.btn-search {
  border-color: $color-white;
  margin-left: 10px;
  min-width: 0;
}

.header-map {
  margin-top: 5px;
  a {
    color: $color-white;
    &:hover {
      color: $color-light;
    }
    .icon {
      margin-right: 8px;
    }
  }
}

@media (max-width: 480px) {
  .header {
    background: $color-light;
    h1,
    p {
      color: $color-dark;
    }
  }
  .header-map {
    margin-top: 5px;
    a {
      color: $color-primary;
    }
  }
  .arrow {
    a {
      color: $color-primary
    }
  }
}
</style>
