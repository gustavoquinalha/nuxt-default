<template lang="html">
  <div class="content-login">
    <div class="size margin">
      <div class="text-align-center title">
        <span class="h1">Register</span>
      </div>
      <div class="container-login overflow">
        <div class="login-block">
          <p class="margin-bottom-20">Choose a profile a type:</p>

          <ul class="tabs container align-center wrap justify-content-around">
            <li class="tab-link" :class="{active :  user.type === 'studio'}" @click="user.type = 'studio'">
              <span>Studio</span>
            </li>
            <li class="tab-link" :class="{active :  user.type === 'artist'}" @click="user.type = 'artist'">
              <span>Artist</span>
            </li>
            <li class="tab-link" :class="{active :  user.type === 'client'}" @click="user.type = 'client'">
              <span>Client</span>
            </li>
          </ul>

          <form class="">
            <div class="input-block-inline">
              <label for=""><i class="fas fa-user"></i></label>
              <input type="text" name="" value="" class="input-block" placeholder="Username" v-model="user.name">
            </div>

            <div class="input-block-inline">
              <label for=""><i class="fas fa-envelope"></i></label>
              <input type="text" name="" value="" class="input-block" placeholder="E-mail" v-model="user.email">
            </div>

            <div class="input-block-inline">
              <label for=""><i class="fas fa-lock"></i></label>
              <input type="password" name="" value="" class="input-block" placeholder="********" v-model="user.password">
            </div>

            <div class="container align-center">
              <button type="button" name="button" class="btn btn-primary btn-block" @click="send = true">Register</button>
            </div>
          </form>

          <pre v-show="send">
            {{user}}
          </pre>

        </div>

      </div>
      <div class="text-align-center margin-top-20">
        <p>Already have an account? Enter <nuxt-link to="/login">HERE</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'sign',
  data() {
    return {
      send: false,
      login: {
        type: 'artist'
      },
      user: {
        type: 'artist',
        name: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
</style>
