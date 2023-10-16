import {ref, computed, onMounted} from 'vue'
import {defineStore} from 'pinia'
import {getCategoryAPI} from "@/apis/layout";

export const useCategoryStore = defineStore('category', () => {
    // 导列表的数据管理
    const categoryList = ref([]) // 准备响应式数据
    // 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})