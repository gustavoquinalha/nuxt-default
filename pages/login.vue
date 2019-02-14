<template lang="html">
  <div class="content-login">
    <div class="size margin">
      <div class="text-align-center title">
        <span class="h1 fade-up">Login</span>
      </div>
      <div class="container-login fade-up delay-1">
        <div class="login-block">
          <form class="">
            <div>
              {{ $store.state.error }}
            </div>

            <div class="input-block-inline">
              <label for=""><i class="fas fa-user"></i></label>
              <input type="text" name="" value="" class="input-block" placeholder="Username" v-model="user.identifier">
            </div>

            <div class="input-block-inline">
              <label for=""><i class="fas fa-lock"></i></label>
              <input type="password" name="" value="" class="input-block" placeholder="********" v-model="user.password">
            </div>

            <div class="container align-center">
              <button type="button" name="button" class="btn btn-primary btn-block" @click.prevent="login(user)">Enter</button>
            </div>
          </form>
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
  layout: 'sign',
  middleware: 'public',
  data() {
    return {
      user: {
        identifier: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'account/login'
    })
  }
}
</script>

<style lang="scss">
</style>
