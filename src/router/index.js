// createRouter创建router实例对象
// createWebHistory创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
// 导入组件login
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          // 默认路由
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name:'subCategory',
          component: SubCategory
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
