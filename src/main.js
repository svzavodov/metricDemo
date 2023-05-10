import { createApp } from 'vue'
import '../public/fonts/stylesheet.css'
import './style.css'
import App from './App.vue'
import router from '@/router'



createApp(App)
    .use(router)
    .mount('#app')
