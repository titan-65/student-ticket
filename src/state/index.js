import { createStore } from 'vuex'
import { supabase } from '../supabase'

// Create a new store instance.
const store = createStore({
  state: {
    user: {},
    currentUser: null,
    tickets: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    ADD_USER(state, user) {
      state.currentUser = user
    },
  },
  getters: {
    user: (state) => state.user,
    tickets: (state) => state.tickets,
    currentUser: (state) => state.currentUser,
  },
  actions: {
    async fetchUser({ commit }) {
      const user = await supabase.auth.user()

      commit('SET_USER', user)
    },
    async addUser({ commit }, user) {
      commt('ADD_USER', user)
    },
  },
})

export default store
