<template>
  <div class="columns">
    <div class="box" v-for="ticket in tickets" :key="ticket.id">
      <h2>{{ ticket.name }}</h2>
      <span class="tag is-danger">{{ ticket.category }}</span>
      <div class="content">
        <p>{{ ticket.created_at }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import getTickets from '../composables/getTickets'

export default {
  // props: {
  //   tickets: Array,
  // },
  setup() {
    const route = useRoute()
    const { loading, tickets, fetchTickets } = getTickets()

    onMounted(() => {
      fetchTickets()
    })
    watch(route, () => {
      fetchTickets()
    })
    return {
      loading,
      tickets,
    }
  },
}
</script>
<style></style>
