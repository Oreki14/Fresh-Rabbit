import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategory } from '@/apis/testAPI'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
 // 测试接口函数
getCategory().then(res => {
    console.log(res)
})
