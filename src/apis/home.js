import httpInstance from '@/utils/http'

// 封装获取banner接口
export function getBannerAPI (params = {}) {
    const {distributionSite = '1'} = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

/**
 * 获取新鲜好物
 * @returns {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}