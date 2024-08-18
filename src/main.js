import { createApp } from 'vue'
import App from './App.vue'
import '../src/sass/index.sass'
import router from '../src/router/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
