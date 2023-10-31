// 封装购物车模块
import {defineStore} from 'pinia'
import {ref, computed} from 'vue';
import {useUserStore} from './user'
import {insertCartAPI,findNewCartListAPI} from "@/apis/cart";

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 1.定义state - cartList
    const cartList = ref([])
    // 2.定义action - addCart
    const addCart =async (goods) => {
        const {skuId,count} = goods
        if (isLogin.value) {
            // 登录状态下，添加到购物车
            // 调用接口访问数据
            await insertCartAPI({skuId,count})
            const res = await findNewCartListAPI()
            cartList.value = res.result
        } else {
            /*
            未登录的状态下，添加购物车到本地
             */
            const item = cartList.value.find((item) => goods.skuId === item.skuId);
            if (item) {
                // 找到了
                item.count++
            } else {
                // 没找到则push
                cartList.value.push(goods)
            }

        }
    }
    // 删除购物车
    const delCart = (skuId) => {
        //
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }
    // 清除购物车
    const clearCart = () => {
        // 直接将cartList赋值为空
        cartList.value = []
    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 全选功能
    const allCheck = (selected) => {
        cartList.value.forEach((item) => {
            item.selected = selected
        })
    }
    /*
    计算属性
     */
    // 1.总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 2.总的价格
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.price * c.count, 0))
    // 3.总的选中状态
    const allSelected = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
    // 4.总的选中的商品价格之和
    const allSelectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.price * c.count, 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        allSelected,
        allSelectedPrice,
        clearCart
    }
}, {
    persist: true
})