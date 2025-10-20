import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { BarChart } from 'echarts/charts';
import { tooltipFormatterDefault } from 'helpers/echart-utils';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('primary-lighter'), getThemeColor('primary-light')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('body-highlight-bg'),
    borderColor: getThemeColor('border-color'),
    textStyle: { color: getThemeColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: (params: CallbackDataParams[]) =>
      tooltipFormatterDefault(params),
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    type: 'category',
    data: [2024, 2025],
    axisLine: {
      show: false,
      lineStyle: {
        color: getThemeColor('tertiary-bg'),
        type: 'solid'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false,
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
      show: false,
      color: getThemeColor('quaternary-color')
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: getThemeColor('secondary-bg')
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  series: [
    {
      name: 'This Year',
      type: 'bar',
      barWidth: 15,
      barSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: true,
      data: [
        {
          value: 1200,
          lineStyle: { color: getThemeColor('primary-lighter') },
          itemStyle: {
            color: getThemeColor('primary-lighter'),
            barBorderRadius: [3, 3, 0, 0]
          }
        },
        {
          value: 2400,
          lineStyle: { color: getThemeColor('primary-light') },
          itemStyle: {
            color: getThemeColor('primary-light'),
            barBorderRadius: [3, 3, 0, 0]
          }
        }
      ]
    }
  ],
  grid: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  }
});

const RevenueNextYearChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className="revenue-next-year-chart"
    />
  );
};

export default RevenueNextYearChart;
