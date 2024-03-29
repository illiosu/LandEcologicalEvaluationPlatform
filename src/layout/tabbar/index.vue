<template>
  <!-- <el-menu mode="horizontal" class="my-menu">
    <el-menu-item> 菜单一 </el-menu-item>
    <el-menu-item> 菜单二 </el-menu-item>
    <el-menu-item> 菜单三 </el-menu-item>
    <el-menu-item> 菜单四 </el-menu-item>
  </el-menu> -->
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">
      <img :src="setting.logo" alt="Element logo" class="logo" />
      <p>{{ setting.title }}</p>
    </el-menu-item>

    <div class="flex-grow" />
    <el-menu-item index="1">评价系统</el-menu-item>
    <el-sub-menu index="2">
      <template #title>数据管理</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">快速上手</el-menu-item>
    <el-menu-item index="4">用户中心</el-menu-item>
    <div class="flex-grow" />
    <div class="avatar-container">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </div>
    <!-- <el-menu-item index="4">Processing Center</el-menu-item> -->
    <!-- <el-menu-item index="5">Processing Center</el-menu-item> -->
  </el-menu>
</template>
<script setup lang="ts">
import setting from '@/setting';
import { ref } from 'vue';
// import { test } from '@/api/test/index.js';
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
// const tt: any = () => {
//   var data = test();
//   console.log(data);
// };
</script>
<style scoped lang="scss">
// .my-menu {
//   display: flex;
//   justify-content: space-between;
// }
.flex-grow {
  flex-grow: 0.1;
}
.logo {
  width: $base-logo-width;
}
.el-menu-demo {
  justify-content: space-between;
  display: flex;
}
.avatar-container {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
