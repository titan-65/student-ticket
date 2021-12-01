import { createApp } from 'vue'
import App from './App.vue'
import Loading from './components/Loading.vue'
import store from './state'
import router from './router/index.js'
import 'bulma/css/bulma.css'

createApp(App)
    .use(router)
    .use(store)
    .component('Loading', Loading)
    .mount('#app')
