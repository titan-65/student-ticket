<template>
  <div class="header-home bd-navbar pr-4">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
		  <router-link :to="{ name: 'TicketsPage' }" class="navbar-item">
          Tickets
        </router-link>
	  </div>
      <div class="navbar-end">
        <router-link :to="{ name: 'Home' }" active-class="active" class="navbar-item"
          >Student</router-link
        >
        <router-link :to="{ name: 'PublicFaq' }" class="navbar-item">
          FAQ
        </router-link>
        <router-link :to="{ name: 'Login' }" class="navbar-item" v-if="!user">
          Login
        </router-link>
        <div class="navbar-item has-dropdown is-active" v-else>
          <a class="navbar-link">Profile</a>

          <div class="navbar-dropdown">
            <router-link :to="{ name: 'Home' }" class="navbar-item">
              {{ user.email }}
            </router-link>
			<a class="button navbar-item is-light">Signout</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
  setup() {
    const isActive = ref(true)
    const store = useStore()
    const user = computed(() => {
      return store.getters.user
    })
    return {
      user,
      isActive,
    }
  },
}
</script>

<style>
.active {
  border-bottom-color: #003543;
}
.header-home {
  opacity: 0.8;
}


@media screen and (min-width: 1024px) {
  .bd-navbar {
	  padding: 1rem 2rem
  }
}
</style>
