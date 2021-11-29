import { createStore } from 'vuex'
import { supabase } from '../supabase'

// Create a new store instance.
const store = createStore({
    state: {
      user: {},
      tickets: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  getters: {
    user: state => state.user
  },
  actions: {
    async fetchUser({ commit }) {
      const user = await supabase.auth.user()
 
      commit('SET_USER', user)
    }
  },
})

export default store
