import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent, DataZoomComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { PortfolioLineChartDataItem, Range } from 'data/stock/portfolio';
import { rgbaColor } from 'helpers/utils';
import dayjs from 'dayjs';
import { useBreakpoints } from 'providers/BreakpointsProvider';

type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

interface PortfolioLineChartProps {
  data: PortfolioLineChartDataItem;
  range: Range;
}

interface BreakpointsContextInterface {
  up: (bp: keyof Breakpoints) => boolean;
  down: (bp: keyof Breakpoints) => boolean;
}

echarts.use([TooltipComponent, LineChart, DataZoomComponent]);

const formatAxisLabel = (range: Range, value: number) => {
  switch (range) {
    case '1d':
      return value;
    case '6m':
    case '1y':
      return dayjs(value).format('MMM');
    case 'all':
      return dayjs(value).format('YYYY');
    default:
      return dayjs(value).format('MMM DD');
  }
};

const formatInterval = (
  range: Range,
  breakpoints: BreakpointsContextInterface
) => {
  switch (range) {
    case '1y':
      return breakpoints.down('sm') ? 'auto' : 5;
    case 'all':
      return breakpoints.down('sm') ? 'auto' : 10;
    default:
      return 'auto';
  }
};

const getDefaultOptions = (
  getThemeColor: (name: string) => string,
  data: [string, number][],
  range: Range,
  breakpoints: BreakpointsContextInterface
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
  dataZoom: {
    type: 'inside',
    start: 0,
    end: 100,
    minValueSpan: 17,
    disabled: data.length <= 25
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item[0]),
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      hideOverlap: data.length > 31,
      showMinLabel: true,
      color: getThemeColor('tertiary-color'),
      formatter: (value: number) => formatAxisLabel(range, value),
      margin: 15,
      interval: formatInterval(range, breakpoints)
    },
    splitLine: {
      show: false
    },
    animationDuration: 200,
    animationEasing: 'cubicOut'
  },
  yAxis: {
    type: 'value',
    position: 'right',
    boundaryGap: false,
    axisLabel: {
      show: true,
      color: getThemeColor('body-color'),
      formatter: (value: number) => `${value}K`,
      margin: 15,
      interval: 20
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getThemeColor('border-color-translucent')
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    max: 100
  },
  series: [
    {
      type: 'line',
      name: 'Growth',
      data: data.map(item => item[1]),
      itemStyle: {
        color: getThemeColor('body-highlight-bg'),
        borderColor: getThemeColor('primary'),
        borderWidth: 1
      },
      lineStyle: {
        color: getThemeColor('primary'),
        width: 1
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getThemeColor('primary'), 0.5)
            },
            {
              offset: 1,
              color: rgbaColor(getThemeColor('primary'), 0)
            }
          ]
        }
      },
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      hoverAnimation: true
    }
  ],
  grid: {
    right: 3,
    left: 20,
    bottom: 10,
    top: 5,
    containLabel: true
  },
  animationDurationUpdate: 200,
  animationEasingUpdate: 'cubicOut'
});

const PortfolioLineChart = ({ data, range }: PortfolioLineChartProps) => {
  const { getThemeColor } = useAppContext();
  const chartData = data[range] || [];

  const { breakpoints } = useBreakpoints();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor, chartData, range, breakpoints)}
      notMerge={true}
      lazyUpdate={true}
      style={{ minHeight: '25rem', width: '100%' }}
    />
  );
};

export default PortfolioLineChart;
