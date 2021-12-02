<template>
  <div class="header-home container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'Home' }">
          <!-- <img
            src="https://res.cloudinary.com/zhyjenae/image/upload/v1638055663/signature_q07em0.png"
          /> -->
          STUCHECK
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-start">
        <router-link :to="{ name: 'TicketsPage' }" class="navbar-item" v-if="user">
          Tickets
        </router-link>
        <router-link :to="{ name: 'Home' }" active-class="active" class="navbar-item"
          >Student</router-link
        >
        <router-link :to="{ name: 'PublicFaq' }" class="navbar-item"> FAQ </router-link>
      </div>
      <div class="navbar-end">
        <router-link :to="{ name: 'Login' }" class="navbar-item" v-if="!user">
          Login
        </router-link>
        <div class="navbar-item has-dropdown is-active" v-else>
          <a class="navbar-link">Profile</a>

          <div class="navbar-dropdown">
            <router-link :to="{ name: 'Home' }" class="navbar-item">
              {{ user.email }}
            </router-link>
            <router-link :to="{ name: 'Profile' }" class="navbar-item">
              Dashboard
            </router-link>
            <button class="button navbar-item is-danger mx-auto mt-2" @click="logout">
              Signout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
//TODO: add a watcher that watches changes when user login changes
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { supabase } from '../supabase.js'
export default {
  setup() {
    const router = useRouter()
    const isActive = ref(true)
    const store = useStore()
    store.dispatch('fetchUser')
    const user = computed(() => {
      return store.state.user
    })

    const logout = async () => {
      let { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/')
    }
    return {
      user,
      isActive,
      logout,
    }
  },
}
</script>

<style>
.active {
  border-bottom-color: #003543;
}
.header-home {
  opacity: 0.9;
}

@media screen and (min-width: 1024px) {
  .bd-navbar {
    padding: 1rem 2rem;
  }
}
</style>
