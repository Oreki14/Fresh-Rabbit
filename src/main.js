// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategory } from '@/apis/testAPI'
import { lazyPlugin } from '@/directives'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
 // 测试接口函数
getCategory().then(res => {
})
// 定义全局指令

// 引入懒加载指令差价并注册
app.use(lazyPlugin)

// 引入全局组件
import { componentPlugin } from "@/components";
app.use(componentPlugin)

// pinia一体化数据
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

