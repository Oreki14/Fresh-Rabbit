// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategory } from '@/apis/testAPI'
import {useIntersectionObserver} from "@vueuse/core";
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
 // 测试接口函数
getCategory().then(res => {
})
// 定义全局指令

// 实现图片懒加载
app.directive('img-lazy', {
    mounted(el,binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value 指令后面绑定的表达式的值 图片URL
        useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
            if (isIntersecting) {
                // 当图片加入用户的视界范围
                // 给图片元素赋值，也就是图片的url值
                el.src = binding.value
            }
        }
        )
    }
})