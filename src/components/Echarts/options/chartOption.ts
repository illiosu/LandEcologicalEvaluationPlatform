import { ref, reactive } from 'vue';

export const panelOption = reactive({
  series: [
    {
      type: 'gauge',
      //设置仪表盘的起始角度和结束角度
      startAngle: 180,
      endAngle: 0,
      //设置仪表盘的中心位置，这里设置的是在容器的50%宽度和75%高度的位置。
      center: ['50%', '75%'],
      //设置仪表盘的半径，这里设置的是容器高度的90%。
      radius: '60%',
      //设置仪表盘的最小值和最大值。
      min: 0,
      max: 9,
      //设置仪表盘分割段数，即刻度数量。
      splitNumber: 5,
      //设置仪表盘轴线（轮廓线）的样式，包括线宽和颜色。
      axisLine: {
        lineStyle: {
          width: 6,
          ///仪表盘的轴线可以被分成不同颜色的多段。(范围是[0,1])
          color: [
            [0.1, '#FF6E76'],
            [0.3, '#FDDD60'],
            [0.5, '#58D9F9'],
            [0.7, '#7CFFB2'],
            [1, '#58D9F9'],
          ],
        },
      },

      //设置仪表盘指针的样式，包括图标、长度、宽度、偏移中心位置和颜色。
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto',
        },
      },
      //设置仪表盘刻度线的样式，包括长度、线宽和颜色。
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 2,
        },
      },
      //设置仪表盘分割线的样式，包括长度、线宽和颜色。
      splitLine: {
        length: 10,
        lineStyle: {
          color: 'auto',
          width: 5,
        },
      },
      //刻度标签的显示样式和内容
      axisLabel: {
        color: '#464646',
        fontSize: 10,
        //设置刻度标签距离刻度线的距离，负值表示标签在刻度线内侧。
        distance: -30,
        //设置刻度标签的旋转。'tangential'表示标签的旋转方向将与刻度线的切线方向一致
        rotate: 'tangential',

        // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        //示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg';
        // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}

        formatter: function (value) {
          if (value <= 1) {
            return '不敏感';
          } else if (value <= 3) {
            return '低敏感';
          } else if (value <= 5) {
            return '中度敏感';
          } else if (value <= 7) {
            return '高度敏感';
          } else if (value <= 9) {
            return '极度敏感';
          }
        },
      },
      title: {
        offsetCenter: [0, '-10%'],
        fontSize: 20,
      },
      detail: {
        fontSize: 30,
        offsetCenter: [0, '-35%'],
        valueAnimation: true,
        formatter: function (value) {
          return value + '';
        },
        color: 'inherit',
      },
      data: [
        {
          value: 0.6,
          name: '平均等级',
        },
      ],
    },
  ],
});
export const pieOption = {
  legend: {
    top: 'bottom',
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 70],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
      ],
    },
  ],
};
export const dDBarOption1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue'],
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
  ],
};
