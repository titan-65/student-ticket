<template>
  <form @submit.prevent="handleSubmit">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Enter title of ticket"
          v-model="name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Enter category"
          v-model="category"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button" type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
export default {
  setup() {
    const name = ref('')
    const category = ref('')
    const loading = ref(false)
    const handleSubmit = async () => {
      try {
        const { data, error } = await supabase.from('ticket').insert([
          {
            name: name.value,
            category: category.value,
          },
        ])
        loading.value = true
        if (error) {
          console.log(error)
        }
        if (data) {
          console.log(data)
          return
        }
        name.value = ''
        category.value = ''
        loading.value = false
      } catch (e) {
        console.log(e)
      }
    }
    return {
      name,
      category,
      handleSubmit,
      loading,
    }
  },
}
</script>
<style>
form {
  max-width: 420px;
}
</style>
