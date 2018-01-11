<template>
  <div>

    <header>
      <div class="header">
        <div class="header--block size margin container wrap-reverse justify-content-center align-items-center">
          <div class="header--block--text flex-basis-400 flex-grow-1">
            <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
              <span class="font-error">404</span>
              <h1>Desculpe, a página não foi encontrada.</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              <p>Com planos perfeitos para cada tipo de clínica.</p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" data-aos-offset="0">
              <router-link to="/" class="btn btn-secundary">Voltar <span class="icon icon-arrow-left"></span></router-link>
            </div>
          </div>
          <div class="header--block--image flex-basis-500">
            <div data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
              <img src="~/assets/images/intro.svg" width="100%" alt="">
            </div>
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
@import '~assets/css/base/variables';
@import './assets/css/main.scss';
#app {
  max-width: 100%;
  overflow: hidden;
}

  .header {
    background: url(~/assets/images/bg-white.svg), $blue;
    background-position: center center;
    background-size: 600px;
    background-repeat: no-repeat;
    color: #fff;
    .header--block {
      width: 100%;
      overflow: hidden;
      min-height: 100vh;
      padding: 50px 0;
      box-sizing: border-box;
      .header--block--text {
        h1,
        p {
          color: #fff;
        }
        p {
          opacity: .7;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
      .header--block--image {
        img {}
      }
    }
  }
  .font-error {
    font-size: 8rem;
    font-weight: 900
  }
</style>
