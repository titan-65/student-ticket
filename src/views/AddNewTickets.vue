<template>
  <SmartForm></SmartForm>
</template>

<script>
import SmartForm from '../components/SmartForm.vue'

import { ref, computed } from 'vue'
export default {
  components: {
    SmartForm,
  },
  setup() {
    const name = ref('')
    const category = ref('')
    const valid = computed(() => {
      return !name && !category
    })
    return {
      name,
      category,
      valid,
    }
  },
}
</script>

<style></style>
