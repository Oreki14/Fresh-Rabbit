// axios的基础封装
import axios from 'axios'
import {ElMessage} from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from "@/stores/user";
import router from '@/router/index'
const httpInstance = axios.create({
    // 根域名
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// 拦截器
// axios请求拦截器

httpInstance.interceptors.request.use(config => {
    // 1.从pinia中获取Token
    const userStore = useUserStore()
    // 2.拼接Token
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.msg
    })
    /*
     401 token失效处理
     */
    // 1.清除本地用户数据
    const userStore = useUserStore()
    if (e.response.status === 401) {
        userStore.clearUserInfo()
    }
    // 2.跳转登录页
    router.push('/login')
    return Promise.reject(e)
})
export default httpInstance
