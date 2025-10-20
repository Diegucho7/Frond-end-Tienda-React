import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { useAppContext } from 'providers/AppProvider';
import { TooltipComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';

echarts.use([TooltipComponent, PieChart]);

const getDefaultOptions = (getThemeColor: (name: string) => string) => ({
  color: [getThemeColor('info-light'), getThemeColor('info-lighter')],
  tooltip: {
    trigger: 'item',
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
  series: [
    {
      type: 'pie',
      radius: ['100%', '70%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 1200,
          name: 'This Year',
          itemStyle: {
            color: getThemeColor('info-light')
          }
        },
        {
          value: 1000,
          name: 'Previous Year',
          itemStyle: {
            color: getThemeColor('info-lighter')
          }
        }
      ]
    }
  ],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

const RevenueThisYearChart = () => {
  const { getThemeColor } = useAppContext();
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getDefaultOptions(getThemeColor)}
      className="revenue-this-year-chart"
    />
  );
};

export default RevenueThisYearChart;
