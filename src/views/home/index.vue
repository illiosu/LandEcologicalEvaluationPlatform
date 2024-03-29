<template>
  <div id="map" class="map_home" :class="{ fold: LatOutSettingStore.fold ? true : false }">
    <measureTool :map="map"></measureTool>
    <!-- <ecoassess></ecoassess> -->
    <!-- <mychart :customOption="options2"></mychart> -->

    <!-- <mychart :customOption="options2"></mychart> -->
    <!-- <mychart :customOption="options2"></mychart> -->
  </div>
  <!-- <div class="left_chart">
    <mychart :customOption="panelOption" :width="chartWidth" :height="chartHeight"></mychart>

    <mychart :customOption="dDBarOption1" :width="chartWidth" :height="chartHeight"></mychart>
  </div>
  <div class="right_chart">
    <mychart :customOption="pieOption" :width="chartWidth" :height="chartHeight"></mychart>
    <mychart :customOption="dDBarOption1" :width="chartWidth" :height="chartHeight"></mychart>
  </div> -->
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting';
import { ref, onMounted, defineExpose } from 'vue'; // vue相关方法
import { Map, View } from 'ol'; // 地图实例方法、视图方法
import Tile from 'ol/layer/Tile'; // 瓦片渲染方法
// import OSM from 'ol/source/OSM'; // OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import 'ol/ol.css'; // 地图样式
import * as source from 'ol/source';
import XYZ from 'ol/source/XYZ.js';
// import ecoassess from '@/components/Echarts/ecoassess/index.vue';
//@ts-ignore
import mychart from '@/components/Echarts/template/index.vue';
import { initMap } from '@/views/home/initMap.ts';
import TileWMS from 'ol/source/TileWMS.js';
import measureTool from '@/components/MeasureTool/index.vue';
import { map } from '@/views/home/initMap.ts';
let LatOutSettingStore = useLayOutSettingStore();

onMounted(async () => {
  initMap();
});
</script>

<style lang="scss" scoped>
.map_home {
  width: calc(100vw - $base-slider-width);
  height: calc(100vh - $base-tabbar-heigth);
  padding: 0;
  margin: 0;
  &.fold {
    width: calc(100vw - $base-slider-min-width);
    left: $base-slider-min-width;
  }
  //   width: 100%;
  //   height: 100%;
  //   border: 1px solid #eee;
}
.left_chart {
  position: absolute;
  left: 100px;
  top: 50px;
  background-color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
.right_chart {
  position: absolute;
  right: 100px;
  top: 50px;
  background-color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  // width: 100%;
  // height: 100%;
}
</style>
