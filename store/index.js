export const state = () => ({
  error: '',
  step: 1
})

export const getters = {
}

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  setStep(state, step) {
    state.step = step
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
      message = data && data.message
    }

    store.commit('SET_ERROR', message)
  }
}
