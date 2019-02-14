export const state = () => ({
})

export const getters = {
  pictureUrl(state, getters, rootState, rootGetters) {
    return rootState.auth && rootState.auth.user && rootState.auth.user.pictureUrl || ''
    //'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg'
  }
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
      /**
       * 
       *  WARNING!!!
       * 
       *  REMOVE THIS BEFORE/ TEST PURPOSE
       * 
       *  WARNING!!!
       * 
       */
      // this.$auth.$storage.setState('user', { username, email, password, profileType })
      // store.commit('setStep', 2, { root: true })
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

        if (step === 'last') {
          this.$router.replace({ path: 'logged/my-account' })
        } else if (!isNaN(step)) {
          store.commit('setStep', step + 1, { root: true })
        }
      }
    } catch (error) {
      store.dispatch('setError', error, { root: true })
      /**
       * 
       *  WARNING!!!
       * 
       *  REMOVE THIS BEFORE/ TEST PURPOSE
       * 
       *  WARNING!!!
       * 
       */
      // this.$auth.$storage.setState('user', user)

      // if (step === 'last') {
      //   this.$router.replace({ path: 'logged/my-account' })
      // } else if (!isNaN(step)) {
      //   store.commit('setStep', step + 1, { root: true })
      // }
    }
  },
  async uploadProfilePic(store, file) {
    try {
      const formDataFile = new FormData()
      formDataFile.append('files', file)

      const response = await this.$axios.post('/upload', formDataFile)

      const resUser = await this.$axios.put(`/users/${this.$auth.user._id}`, {
        pictureUrl: response.data[0].url
      })

      this.$auth.$storage.setState('user', resUser.data)
    } catch (error) {
      store.dispatch('setError', error, { root: true })
    }
  }
}
