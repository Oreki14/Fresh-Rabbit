// 实现管理用户数据相关
import {defineStore} from "pinia";
import {ref} from "vue";
import {loginAPI} from "@/apis/user";
import {useCartStore} from "@/stores/cartStore";

export const useUserStore = defineStore('user', () => {
    // 1.定义管理数据的state
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({account, password}) => {
        const res = await loginAPI({account, password});
        userInfo.value = res.result;
    }
    const cartStore = useCartStore()
    // 用户退出，清除信息
    const clearUserInfo = () => {
        userInfo.value = {}
        // 用户退出时，执行清除购物车
        cartStore.clearCart()

    }
    // 3.以对象的格式把state和action返回
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist:
        true

})