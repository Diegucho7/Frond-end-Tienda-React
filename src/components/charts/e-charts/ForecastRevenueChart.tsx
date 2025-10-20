import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';

echarts.use([TooltipComponent, BarChart]);

const months = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
const data = [159, 185, 170, 190, 205, 220, 235];

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('info-lighter'), getThemeColor('tertiary-bg')],
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
    }
  },
  xAxis: {
    type: 'value',
    boundaryGap: false,
    axisLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    },
    axisTick: {
      show: true
    },
    axisLabel: {
      color: getThemeColor('tertiary-color'),
      formatter: (value: number) => `${value}B`
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    },
    min: 100,
    max: 260,
    interval: 20
  },
  yAxis: {
    type: 'category',
    data: months,
    boundaryGap: true,
    axisLabel: {
      color: getThemeColor('body-color'),
      margin: 20
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    }
  },
  series: [
    {
      name: 'Total',
      type: 'bar',
      data,
      barWidth: 20,
      lineStyle: {
        color: getThemeColor('info-lighter')
      },
      itemStyle: {
        color: getThemeColor('info-lighter'),
        barBorderRadius: [0, 3, 3, 0]
      },
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: true
    }
  ],
  grid: {
    right: 15,
    left: 5,
    bottom: 5,
    top: 24,
    containLabel: true
  }
});

const ForecastRevenueChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
    />
  );
};

export default ForecastRevenueChart;
