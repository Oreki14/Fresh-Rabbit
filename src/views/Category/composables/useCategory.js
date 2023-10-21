// 封装分类数据业务相关代码
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryAPI} from "@/apis/category";
import {ref, onMounted} from "vue";

export function useCategory() {
    // 获取信息
    const categoryData = ref([])
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    onBeforeRouteUpdate((to) => {
        // 在在调用getCategory使用最新的参数
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}