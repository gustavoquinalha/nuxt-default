export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {

    console.log('req.session', req.session)

    if (req.session) {
      commit('SET_USER', req.session)
    }
  },
  async login({ commit }, payload = {}) {
    const res = await fetch(`/api/v1/login`, {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    commit('SET_USER', data)
    this.$router.replace({ path: '/' })
  },
}
