import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { DividendChartData } from 'data/stock/dividend';

echarts.use([TooltipComponent, BarChart]);

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
    }
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item.year),
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
    boundaryGap: true,
    axisLabel: {
      show: true,
      color: getThemeColor('body-color'),
      fontWeight: 700,
      formatter: (value: number) => `0.${value}`,
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
      type: 'bar',
      data: data.map(item => item.value),
      lineStyle: {
        color: getThemeColor('info-lighter')
      },
      itemStyle: {
        color: getThemeColor('info-lighter'),
        barBorderRadius: [4, 4, 0, 0]
      },
      barMaxWidth: 24,
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: false
    }
  ],
  grid: {
    right: 10,
    left: 5,
    bottom: 5,
    top: 8,
    containLabel: true
  }
});

const DividendBarChart = ({ data }: { data: DividendChartData[] }) => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, data)}
    />
  );
};

export default DividendBarChart;
