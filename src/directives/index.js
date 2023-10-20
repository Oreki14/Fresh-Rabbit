// 定义懒加载组件
import app from "@/App.vue";
import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
        // 实现图片懒加载
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el: 指令绑定的那个元素 img
                // binding: binding.value 指令后面绑定的表达式的值 图片URL
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        if (isIntersecting) {
                            // 当图片加入用户的视界范围
                            // 给图片元素赋值，也就是图片的url值
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}