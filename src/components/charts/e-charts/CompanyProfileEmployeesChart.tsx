import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { rgbaColor } from 'helpers/utils';

echarts.use([TooltipComponent, BarChart]);

interface GenerateYears {
  (startYear: number, endYear: number): number[];
}

const generateYears: GenerateYears = (startYear, endYear) => {
  return Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
};

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [
    getThemeColor('primary'),
    getThemeColor('info'),
    getThemeColor('warning'),
    getThemeColor('danger')
  ],
  tooltip: {
    trigger: 'item',
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
    data: generateYears(1998, 2024),
    splitLine: { show: false },
    splitArea: { show: false },

    axisLabel: {
      color: getThemeColor('tertiary-color'),
      rotate: 45
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
      color: getThemeColor('body-color'),
      formatter: (value: number) => `${value}%`
    }
  },
  series: [
    {
      name: 'Total',
      type: 'bar',
      data: [
        {
          value: -15,
          lineStyle: { color: getThemeColor('info-light') },
          itemStyle: {
            color: getThemeColor('info-light'),
            barBorderRadius: [0, 0, 3, 3]
          }
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
          value: -8,
          lineStyle: { color: getThemeColor('info-light') },
          itemStyle: {
            color: getThemeColor('info-light'),
            barBorderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: 10
        },
        {
          value: 20
        },
        {
          value: 8
        },
        {
          value: -9,
          lineStyle: { color: getThemeColor('info-light') },
          itemStyle: {
            color: getThemeColor('info-light'),
            barBorderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: 8
        },
        {
          value: 10
        },
        {
          value: 16
        },
        {
          value: 40
        },
        {
          value: 5
        },
        {
          value: -5,
          lineStyle: { color: getThemeColor('info-light') },
          itemStyle: {
            color: getThemeColor('info-light'),
            barBorderRadius: [0, 0, 3, 3]
          }
        },
        {
          value: 20
        },
        {
          value: 30
        },
        {
          value: 65
        },
        {
          value: 45
        },
        {
          value: 40
        },
        {
          value: 30
        },
        {
          value: 18
        },
        {
          value: 24
        },
        {
          value: 30
        },
        {
          value: 24
        },
        {
          value: 18
        },
        {
          value: 35
        },
        {
          value: 42
        },
        {
          value: 20
        },
        {
          value: 28
        },
        {
          value: 12
        }
      ],
      lineStyle: {
        color: getThemeColor('primary-light')
      },
      itemStyle: {
        color: getThemeColor('primary-light'),
        barBorderRadius: [3, 3, 0, 0]
      },
      showSymbol: false,
      symbol: 'circle',
      smooth: false,
      hoverAnimation: true,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: rgbaColor(getThemeColor('light-text-emphasis'), 0.3)
        }
      }
    }
  ],
  grid: {
    top: '8%',
    bottom: 10,
    left: 15,
    right: 7,
    containLabel: true
  }
});

const CompanyProfileEmployeesChart = () => {
  const { getThemeColor } = useAppContext();

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className="mb-5"
    />
  );
};

export default CompanyProfileEmployeesChart;
