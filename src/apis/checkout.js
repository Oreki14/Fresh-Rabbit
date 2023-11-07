// 商品结算先关接口
import httpInstance from '@/utils/http'
export const getCheckInfoAPI = () => {
  return httpInstance.request({
    url: '/member/order/pre',
    method: 'GET'
  })
}
// 创建订单
export const createOrderAPI = (data) => {
  return httpInstance.request({
    url: '/member/order',
    method: 'POST',
    data
  })
}