<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/category";
import {onMounted} from "vue";
// 获取导航列表的action

const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutNav/>

  <LayoutHeader/>
  <!-- 通过添加key 来破坏复用机制 强制销毁重建的方式来实现请求的发送 -->
  <!--  <RouterView :key="$route.fullPath"/>-->
  <RouterView/>
  <LayoutFooter/>
  <LayoutFixed/>
</template>

<style scoped>

</style>
