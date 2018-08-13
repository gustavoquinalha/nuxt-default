export const state = () => ({
  users: []
})

export const getters = {
  all(state) {
    return state.users
  }
}

export const mutations = {
  SET(state, users) {
    state.users = users
  },
  ADD(state, users) {
    state.users && state.users.push(users)
  },
  UPDATE(state, user) {
    state.users = state.users.map(_user => _user._id == user._id ? user : _user)
  },
  REMOVE(state, id) {
    state.users = state.users.filter(user => user._id != id)
  }
}

export const actions = {
  async fetch({ commit }, payload = {}) {
    const res = await fetch(`/api/v1/users/${payload._id || ''}`)
    const data = await res.json()
    commit('SET', data)
  },
  async create({ commit }, payload = {}) {
    const res = await fetch(`/api/v1/users/`, {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    commit('ADD', data)
  },
  async update({ commit }, payload = {}) {
    const res = await fetch(`/api/v1/users/${payload._id}`, {
      method: 'put',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    commit('UPDATE', data)
  },
  async remove({ commit }, id) {
    if (!id) return
    await fetch(`/api/v1/users/${id}`, {
      method: 'delete'
    })
    commit('REMOVE', id)
  }
}

