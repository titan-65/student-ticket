<template>
  <section class="hero is-fullheight bg-hero-signup">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <p class="subtitle is-4">SignUp for StuCheck</p>
            <br />
            <form @submit.prevent="handleSignUp">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input is-medium"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                  />
                  <span class="icon is-medium is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-medium is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input is-medium"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <!-- <div class="field">
	                  <label class="checkbox">
	                    <input type="checkbox" />
	                    Remember me
	                  </label>
	                </div> -->
              <button class="button is-block is-info is-large is-fullwidth" type="submit">
                Sign up
              </button>
              <br />
            </form>
          </div>
          <p class="has-text-grey">
            <router-link :to="{ name: 'Login' }">Already Have an account</router-link>
            &nbsp;·&nbsp; <a href="#">Forgot Password</a> &nbsp;·&nbsp;
            <a href="#">Need Help?</a>
          </p>
          <div class="languages select is-small is-rounded">
            <select>
              <option selected>English</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const loading = ref(false)
    const email = ref('')
    const password = ref('')

    const handleSignUp = async () => {
      try {
        loading.value = true
        const { user, error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        })
        if (error) throw error
        store.dispatch('addUser', user)
        router.push('/')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        loading.value = false
      }
    }
    return {
      loading,
      email,
      handleSignUp,
      password,
    }
  },
}
</script>

<style scoped>
.bg-hero-signup {
  background-image: url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
  background-size: cover;
  background-position: center;
}
</style>
