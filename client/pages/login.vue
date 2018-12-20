<template lang="html">
  <div class="content-login">
    <div class="size margin">
      <div class="text-align-center title">
        <span class="h1 fade-up">Login</span>
      </div>
      <div class="container-login fade-up delay-1">
        <div class="login-block">
          <form class="">
            <div class="input-block-inline">
              <label for=""><i class="fas fa-user"></i></label>
              <input type="text" name="" value="" class="input-block" placeholder="Username" v-model="user.name">
            </div>

            <div class="input-block-inline">
              <label for=""><i class="fas fa-lock"></i></label>
              <input type="password" name="" value="" class="input-block" placeholder="********" v-model="user.password">
            </div>

            <div class="container align-center">
              <!-- <button type="button" name="button" class="btn btn-primary btn-block" @click.prevent="login(user)">Enter</button> -->
              <nuxt-link to="/logged/my-account" class="btn btn-primary btn-block">Enter</nuxt-link>
            </div>
          </form>

          <pre v-show="send">
            {{user}}
          </pre>
        </div>
      </div>
      <div class="text-align-center margin-top-20 fade-up delay-2">
        <p>Don't have an account? Register <nuxt-link to="/register?type=artist">HERE</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: [ 'public' ],
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
  },
  methods: {
    ...mapActions({
      // login: 'login'
    })
  }
}
</script>

<style lang="scss">
</style>
