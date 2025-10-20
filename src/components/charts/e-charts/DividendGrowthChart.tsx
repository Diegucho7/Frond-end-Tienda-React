import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import {
  handleTooltipPosition,
  tooltipFormatterDefault
} from 'helpers/echart-utils';
import { DividendChartData } from 'data/stock/dividend';
import { rgbaColor } from 'helpers/utils';

echarts.use([TooltipComponent, LineChart]);

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  data: DividendChartData[]
) => ({
  color: [getThemeColor('primary'), getThemeColor('tertiary-bg')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('body-highlight-bg'),
    borderColor: getThemeColor('border-color'),
    textStyle: { color: getThemeColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    },
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params, 'MMM DD', 'color'),
    position: handleTooltipPosition
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item.year),
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: getThemeColor('tertiary-bg'),
        type: 'solid'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getThemeColor('body-color'),
      margin: 15
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: false,
    axisLabel: {
      show: true,
      color: getThemeColor('body-color'),
      fontWeight: 700,
      formatter: (value: number) => `${value}%`,
      margin: 15
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('secondary-bg')
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    max: 60
  },
  series: [
    {
      name: 'Total',
      type: 'line',
      data: data.map(item => item.value),
      areaStyle: {
        color: rgbaColor(getThemeColor('primary'), 0.1)
      },
      lineStyle: {
        color: getThemeColor('primary')
      },
      itemStyle: {
        color: getThemeColor('body-highlight-bg'),
        borderColor: getThemeColor('primary'),
        borderWidth: 2
      },
      barMaxWidth: 24,
      showSymbol: true,
      symbol: 'circle',
      symbolSize: 10,
      smooth: false,
      hoverAnimation: false
    }
  ],
  grid: {
    right: 15,
    left: 5,
    bottom: 5,
    top: 8,
    containLabel: true
  }
});

const DividendGrowthChart = ({ data }: { data: DividendChartData[] }) => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, data)}
    />
  );
};

export default DividendGrowthChart;
