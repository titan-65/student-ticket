<template>
  <section class="hero is-medium">
    <div class="container">
      <div class="hero-body">
        <h1 class="title">Tickets</h1>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <h1 class="pb-4">Current Tickets</h1>
      <div class="tickets">
        <Loading v-if="loading === true" />
        <div class="current-tickets" v-else>
          <div class="columns">
            <div class="box" v-for="ticket in tickets" :key="ticket.id">
              <h2>{{ ticket.name }}</h2>
              <span class="tag is-danger">{{ ticket.category }}</span>
              <div class="content">
                <p>{{ ticket.created_at }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//TODO: install date parser or use javascript data
import { onMounted, ref } from 'vue'
import getTickets from '../composables/getTickets'
export default {
  setup() {
    const { loading, tickets, fetchTickets } = getTickets()

    onMounted(() => {
      fetchTickets()
    })
    console.log(tickets)
    return {
      tickets,
      loading,
    }
  },
}
</script>

<style></style>
