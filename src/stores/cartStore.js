// 封装购物车模块
import {defineStore} from 'pinia'
import {ref} from 'vue';
export const useCartStore = defineStore('cart',() => {
    // 1.定义state - cartList
    const cartList = ref([])
    // 2.定义action - addCart
    const addCart = (goods) => {
        /*
         添加购物车操作
         */
        // 1.如果添加过该商品，则计数加一
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
            // 找到了
            item.count++
        }else {
            // 没找到则push
            cartList.value.push(goods)
        }
    }
    return {
        cartList,
        addCart
    }
},{
    persist: true
})