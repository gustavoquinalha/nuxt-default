export const state = () => ({
  error: '',
  step: 1,
  profileType: 'studio'
})

export const getters = {
}

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  setStep(state, step) {
    state.step = step
  },
  setProfileType(state, type) {
    state.profileType = type
  }
}

export const actions = {
  nuxtServerInit (store, context) {
  },
  setError(store, error) {
    let message = error && error.message

    if (error) {
      let response = error.response
      let data = response && response.data
      message = data && data.message || message
    }

    store.commit('SET_ERROR', message)
  }
}
