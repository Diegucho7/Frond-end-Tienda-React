import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { rgbaColor } from 'helpers/utils';
import dayjs from 'dayjs';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import {
  tooltipFormatterList,
  generateXAxisLabels
} from 'helpers/echart-utils';
import { CSSProperties } from 'react';

interface StockOverviewMixedChartProps {
  data: number[];
  className?: string;
  style?: CSSProperties;
}

echarts.use([TooltipComponent, LineChart, VisualMapComponent]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  data: number[]
) => ({
  color: [getThemeColor('primary'), getThemeColor('info')],
  tooltip: {
    show: false,
    trigger: 'axis',
    padding: 10,
    backgroundColor: getThemeColor('body-highlight-bg'),
    borderColor: getThemeColor('border-color'),
    textStyle: { color: getThemeColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: tooltipFormatterList
  },
  xAxis: {
    type: 'category',
    data: generateXAxisLabels('11/1/2023', data.length),
    show: true,
    axisLabel: {
      formatter: (value: Date) => dayjs(value).format('DD MMM'),
      interval: 5,
      showMinLabel: true,
      showMaxLabel: false,
      color: getThemeColor('secondary-color'),
      align: 'left',
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12.8
    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        width: 1.5,
        color: getThemeColor('body-highlight-bg')
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    boundaryGap: false
  },
  yAxis: {
    show: false,
    type: 'value',
    boundaryGap: false
  },
  series: [
    {
      type: 'line',
      data,
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: true,
      itemStyle: {
        borderWidth: 2
      },
      lineStyle: {
        width: 1
      },
      areaStyle: {}
    }
  ],
  visualMap: {
    type: 'continuous',
    show: false,
    left: 'right',
    inRange: {
      color: [
        rgbaColor(getThemeColor('danger'), 0.5),
        rgbaColor(getThemeColor('success'), 0.4)
      ]
    },
    min: 0,
    max: 1,
    calculable: true
  },
  grid: {
    right: '3%',
    left: '10%',
    bottom: '10%',
    top: '5%'
  }
});

const StockOverviewMixedChart = ({
  data,
  className,
  style
}: StockOverviewMixedChartProps) => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, data)}
      className={className}
      style={style}
    />
  );
};

export default StockOverviewMixedChart;
