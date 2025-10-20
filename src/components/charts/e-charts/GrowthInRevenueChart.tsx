import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
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
    }
  },
  xAxis: {
    data: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    splitLine: { show: false },
    splitArea: { show: false },

    axisLabel: {
      color: getThemeColor('body-color')
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
  yAxis: {
    position: 'right',
    splitLine: {
      lineStyle: {
        color: getThemeColor('secondary-bg')
      }
    },
    axisLabel: {
      color: getThemeColor('tertiary-color'),
      formatter: (value: number) => `${value}%`
    }
  },
  series: [
    {
      name: 'Total',
      type: 'bar',
      data: [
        {
          value: 4
        },
        {
          value: -12,
          lineStyle: { color: getThemeColor('info-light') },
          itemStyle: {
            color: getThemeColor('info-light'),
            barBorderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: -15,
          lineStyle: { color: getThemeColor('info-light') },
          itemStyle: {
            color: getThemeColor('info-light'),
            barBorderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: 15
        },
        {
          value: 22
        },
        {
          value: 15
        },
        {
          value: 20
        },
        {
          value: 18
        }
      ],
      lineStyle: {
        color: getThemeColor('primary-light')
      },
      itemStyle: {
        color: getThemeColor('primary-light'),
        barBorderRadius: [3, 3, 0, 0]
      },
      barWidth: 24,
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: false
    }
  ],
  grid: {
    top: '10%',
    bottom: 10,
    left: 5,
    right: 7,
    containLabel: true
  }
});

const GrowthInRevenueChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
    />
  );
};

export default GrowthInRevenueChart;
