import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
import '@/style/global.scss'
import '../public/icon.js'
import '@/style/font.css'
import router from '@/router/index'
import { key, store } from '@/store'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')
