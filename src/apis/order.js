// 订单相关接口
import httpInstance from '@/utils/http'

export const getUserOrder = (params) => {
    return httpInstance({
        url: '/member/order',
        method: 'get',
        params
    })
}