<script>
import AppLayout from './layout/AppLayout.vue'
import { useStore } from 'vuex'
import { computed, watchEffect, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
//TODO: Add fetchTicket action to this.state.tickets
//FIXME: infinite loop for navigation guard
//TODO: Add profile for user information.
//TODO: Add more dynamic questions in FAQ.
//FIXME: Student Page (only goes to home route).

// import AppLayout from './layout/AppLayout.vue'
// import { useStore } from 'vuex'
// import { computed } from 'vue'

import { supabase } from './supabase'

export default {
  components: {
    AppLayout,
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const tickets = computed(() => store.state.tickets)
    const user = computed(() => {
      return store.getters.user
    })

    watch([route, user], () => {
      store.dispatch('fetchUser')
    })

    return {
      tickets,
      user,
      route,
    }
  },
}
</script>

<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6d6d6d;
}
</style>
