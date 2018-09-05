<template>
  <div>
    <input type="text" placeholder="name" v-model="user.name">
    <input type="text" placeholder="email" v-model="user.email">
    <input type="text" placeholder="password" v-model="user.password">
    <button @click="create(user)">add</button>
    <button @click="update(user)">update</button>
    <ul>
      <li v-for="user in users" :key="user._id" @click.native="set(user)">
        <span>{{user._id}}</span>
        <span>{{user.name}}</span>
        <span>{{user.email}}</span>
        <span>{{user.password}}</span>
        <a href="#" @click="remove(user._id)">remove</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions({
      fetch: 'users/fetch',
      create: 'users/create',
      remove: 'users/remove',
      update: 'users/update'
    }),

    set(user) {
      this.user = {...user}
    }
  },

  computed: {
    ...mapGetters({
      users: 'users/all'
    })
  },

  mounted() {
    this.fetch()
  }
}
</script>
