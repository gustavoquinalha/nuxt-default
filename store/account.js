export const state = () => ({
  user: null
})

export const getters = {
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async login(store, payload) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: payload
      })
      console.log(response)
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  },
  async register(store, payload) {
    try {
      const response = await this.$axios.post('/auth/local/register', payload)
      this.$auth.setToken('local', response.data.jwt)
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  }
}
