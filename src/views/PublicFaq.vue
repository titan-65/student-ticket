<template>
	<section class="">
		<h1 class="text-display-5">Frequently Asked Questions (F.A.Q)</h1>
		<h2 class="font-normal text-body-base text-cloud-darker">Student tickets are generated to help and assist with problems our students may face on school issues</h2>
		<a class="button-link medium">Getting Started</a>
	</section>
	<Loading v-if="loading === true"/>
	<section class="section" v-else>
    <div class="container">
      <h1 class="title">
        Questions
      </h1>
      <div v-for="question in questions" :key="question.id">
        <h3 class="text-display-5">{{ question.title }}</h3>
		<p class="text-body-base">{{question.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import getQuestions from '../composables/getQuestions'
export default {
  setup() {
    const { loading, questions, load } = getQuestions()

    onMounted(() => {
      load()
    })

    return {
      questions,
      loading,
    }
  },
}
</script>

<style>
</style>
