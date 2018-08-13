<template>
  <form>
    <input type="text" placeholder="email" v-model="user.email">
    <input type="password" placeholder="password" v-model="user.password">
    <button @click.prevent="login(user)">login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: [ 'public' ],
  
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>
