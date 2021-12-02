<template>
  <section class="hero is-medium">
    <div class="container">
      <div class="hero-body">
        <h1 class="title">Support Tickets</h1>
      </div>
      <div class="columns">
        <div class="container column">
          <router-link
            class="button"
            :to="{ name: 'Tickets' }"
            v-if="route.name !== 'Tickets'"
            >Tickets</router-link
          >
        </div>
        <div class="container column">
          <router-link
            class="button"
            :to="{ name: 'AddNewTicket' }"
            v-if="route.name !== 'AddNewTicket'"
            >New</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <h1 class="pb-4">Current Tickets</h1>
      <div class="tickets">
        <Loading v-if="loading === true" />
        <div class="current-tickets" v-else>
          <!--           <Tickets :tickets="tickets" /> -->
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//TODO: install date parser or use javascript data
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import getTickets from '../composables/getTickets'

// import Tickets from '../components/Tickets.vue'
export default {
  setup() {
    const route = useRoute()
    const { loading, fetchTickets } = getTickets()

    onMounted(() => {
      fetchTickets()
    })
    return {
      loading,
      route,
    }
  },
}
</script>

<style></style>
