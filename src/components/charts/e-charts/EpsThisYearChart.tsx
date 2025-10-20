import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';

echarts.use([TooltipComponent, BarChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('success-lighter'), getThemeColor('success-light')],
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getThemeColor('body-highlight-bg'),
    borderColor: getThemeColor('border-color'),
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    type: 'category',
    data: ['eps', 'ep1'],
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
      name: 'Previous year',
      type: 'bar',
      stack: 'one',
      data: [2500],
      barWidth: 24,
      barGap: '-100%',
      lineStyle: { color: getThemeColor('success-lighter') },
      itemStyle: {
        color: getThemeColor('success-lighter')
      }
    },
    {
      name: 'This year',
      type: 'bar',
      stack: 'one',
      data: [3000],
      lineStyle: { color: getThemeColor('success-light') },
      itemStyle: {
        color: getThemeColor('success-light'),
        barBorderRadius: [3, 3, 0, 0]
      }
    }
  ],
  grid: {
    right: 0,
    left: 0,
    bottom: 0,
    top: '10%'
  }
});

const EpsThisYearChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className="eps-this-year-chart"
    />
  );
};

export default EpsThisYearChart;
