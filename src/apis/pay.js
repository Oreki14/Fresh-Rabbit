// 订单支付相关接口
import httpInstance from '@/utils/http'
// 获取订单信息
export const getOrderAPI = (id) => {
    return httpInstance({
        url: `/member/order/${id}`,
        method: 'get'
    })
}