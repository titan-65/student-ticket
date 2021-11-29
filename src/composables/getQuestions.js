import { ref } from 'vue'
import { supabase } from '../supabase'

const getQuestions = () => {
  const loading = ref(false)
  const questions = ref([])
  const errorMessage = ref(null)

  const load = async () => {
    loading.value = true

    try {
      let { data, error } = await supabase.from('Questions').select('*')
      if (error) {
        console.log(error)
        return
      }
      if (data) {
        console.log(data)
        questions.value = await data
      }
    } catch (e) {
      console.log(error.message)
	}
	  loading.value = false
  }
  console.log(questions.value)

  return {
    loading,
    questions,
    load,
  }
}

export default getQuestions
