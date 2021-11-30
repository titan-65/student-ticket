import { ref } from 'vue'
import { supabase } from '../supabase'

const getTickets = () => {
  const loading = ref(false)
  const tickets = ref([])
  const errorMessage = ref(null)

  const fetchTickets = async () => {
    loading.value = true

    try {
      let { data, error } = await supabase.from('ticket').select('*')
      if (error) {
        console.log(error)
        return
      }
      if (data) {
        console.log(data)
        tickets.value = await data
      }
    } catch (e) {
      console.log(e)
    }
    loading.value = false
  }

  return {
    loading,
    tickets,
    fetchTickets,
  }
}

export default getTickets
