<template>
  <div id="map" class="map_home" :class="{ fold: LatOutSettingStore.fold ? true : false }"></div>
  <Timeline :timelineData="timelineData" class="timeline"></Timeline>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting';
import { ref, onMounted, provide } from 'vue'; // vue相关方法
import { Map, View } from 'ol'; // 地图实例方法、视图方法
import Tile from 'ol/layer/Tile'; // 瓦片渲染方法
// import OSM from 'ol/source/OSM'; // OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import 'ol/ol.css'; // 地图样式
import XYZ from 'ol/source/XYZ.js';
// import ecoassess from '@/components/Echarts/ecoassess/index.vue';
//@ts-ignore
import mychart from '@/components/Echarts/template/index.vue';

import TileWMS from 'ol/source/TileWMS.js';
//@ts-ignore
import Timeline from '@/components/TimeLine/index.vue';
import { initMap } from '@/views/home/initMap.ts';
let LatOutSettingStore = useLayOutSettingStore();

const timelineData = [
  {
    year: 2000,
  },
  {
    year: 2010,
  },
  {
    year: 2020,
  },
];
onMounted(async () => {
  initMap();

  // panelOption.series[0].data[0].name = data[0].地区;
});

// function initMap() {
//   // 天地图地图层
//   var TianMapLayer = new Tile({
//     source: new XYZ({
//       url: 'http://t4.tianditu.com/DataServer?T=vec_w&tk=81e92153f7bd56bf35d42ceacbc4ab95&x={x}&y={y}&l={z}',
//     }),
//   });

//   var LandUse2020 = new Tile({
//     source: new TileWMS({
//       //瓦片的像素比例,不能设置为0，否则地图不展示。
//       //@ts-ignore
//       ratio: 1,
//       url: 'http://localhost:8080/geoserver/LE/wms',
//       params: {
//         LAYERS: 'LE:a2020地类重分类1',
//         STYLES: '',
//         VERSION: '1.1.1',
//         tiled: true,
//       },
//       serverType: 'geoserver',
//     }),
//   });
//   // 地图实例
//   map.value = new Map({
//     target: 'map', // 对应页面里 id 为 map 的元素
//     layers: [TianMapLayer, LandUse2020],
//     // 地图视图
//     view: new View({
//       projection: 'EPSG:4326', // 坐标系，有EPSG:4326和EPSG:3857
//       // 自定义
//       //地图中心点
//       center: [118.81, 31.99],
//       //   minZoom: 10, // 地图缩放最小级别
//       zoom: 9, // 地图缩放级别（打开页面时默认级别）
//     }),
//   });
// }
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
.timeline {
  position: absolute;
  width: 100%;
  bottom: -10vh;
}
// .left_chart {
//   position: absolute;
//   left: 100px;
//   top: 50px;
//   background-color: whitesmoke;
//   background-color: rgba(0, 0, 0, 0.3);
//   border-radius: 15px;
// }
// .right_chart {
//   position: absolute;
//   right: 100px;
//   top: 50px;
//   background-color: whitesmoke;
//   background-color: rgba(0, 0, 0, 0.3);
//   border-radius: 15px;
//   // width: 100%;
//   // height: 100%;
// }
</style>
