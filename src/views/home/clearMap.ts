import { map } from '@/views/home/initMap.ts';
import { AnyColumn } from 'element-plus/es/components/table-v2/src/common.mjs';
import Tile from 'ol/layer/Tile';
const clearMap = () => {
  console.log('clearMap');
  //清除图层
  map.value
    .getLayers()
    .getArray()
    .filter(function (layer: any) {
      // 过滤
      return layer.getSource().getUrls()[0] !== 'http://t4.tianditu.com/DataServer?T=vec_w&tk=81e92153f7bd56bf35d42ceacbc4ab95&x={x}&y={y}&l={z}';
    })
    .forEach(function (layer: any) {
      console.log(layer);
      // 删除过滤后的图层
      if (layer instanceof Tile) {
        console.log('removeLayer');
        map.value.removeLayer(layer);
      } else {
        return;
      }
    });
};
export { clearMap };
