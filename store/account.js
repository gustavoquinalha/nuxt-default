export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async login(store, payload) {
    try {
      await this.$auth.loginWith('local', {
        data: payload
      })
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  },
  async register(store, { username, email, password, profileType }) {
    try {
      const response = await this.$axios.post('/auth/local/register', { username, email, password, profileType })
      this.$auth.setToken('local', `bearer ${response.data.jwt}`)
      this.$axios.setToken(`bearer ${response.data.jwt}`)
      // this.$auth.setUser(response.data.user) // this make redirect
      this.$auth.$storage.setState('user', response.data.user)
      store.commit('setStep', 2, { root: true })
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  },
  async logout(store) {
    try {
      // await this.$auth.logout()
      this.$auth.reset()
      this.$axios.setToken(false)
      store.commit('setStep', 1, { root: true }) // if user want to register againn
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  },
  async update(store, { user, step }) {
    try {
      delete user.email
      delete user.password
      delete user.username
      const response = await this.$axios.put(`/users/${this.$auth.user._id}`, user)

      if (isNaN(step)) {
        this.$auth.setUser(response.data) // this make redirect
      } else {
        this.$auth.$storage.setState('user', response.data)
        store.commit('setStep', step, { root: true })
      }
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  },
}
