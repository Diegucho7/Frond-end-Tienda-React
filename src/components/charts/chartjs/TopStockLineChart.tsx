import { useEffect, useMemo, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartOptions,
  Filler
} from 'chart.js';
import { ChartData } from 'data/stock/dashboardTopStocks';
import { useAppContext } from 'providers/AppProvider';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { Line } from 'react-chartjs-2';
import {
  externalTooltipHandler,
  getGradientColor,
  verticalLinePlugin,
  borderXPlugin
} from 'helpers/charjs-utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface TopStockLineChartProps {
  id?: string;
  chartData: ChartData[];
  growth: boolean;
}

const TopStockLineChart = ({
  id,
  chartData,
  growth
}: TopStockLineChartProps) => {
  const {
    config: { isDark },
    getThemeColor
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  const chartKey = isDark ? 'dark' : 'light';

  const chartRef = useRef<ChartJS<'line'> | null>(null);

  const index = chartData.findIndex(item => item[1] === '11:45 PM');

  const data = {
    labels: chartData.map(item => item[1]),
    datasets: [
      {
        label: 'Top Stocks',
        data: chartData.map(item => item[2]),
        fill: true,
        pointRadius: 0,
        borderWidth: 1,
        backgroundColor: context => {
          const chart = context.chart;
          const { chartArea } = chart;
          if (!chartArea) return undefined;
          return getGradientColor(chart, getThemeColor, growth);
        },
        borderColor: getThemeColor(growth ? 'success' : 'danger'),
        segment: {
          borderColor: ctx =>
            ctx.p0DataIndex <= index
              ? getThemeColor(growth ? 'success' : 'danger')
              : getThemeColor('border-color'),
          backgroundColor: ctx =>
            ctx.p0DataIndex <= index
              ? ctx.chart.chartArea &&
                getGradientColor(ctx.chart, getThemeColor, growth)
              : 'transparent'
        }
      }
    ]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: context => {
          const { tooltip } = context;

          if (!tooltip || tooltip.dataPoints.length === 0) return;
          const tooltipItem = tooltip.dataPoints[0];
          const idx = tooltipItem.dataIndex;
          const [date, time, value, volume] = chartData[idx];

          externalTooltipHandler(context, { date, time, value, volume });
        }
      }
    },
    scales: {
      x: {
        type: 'category',
        offset: false,
        alignToPixels: true,
        title: {},
        ticks: {
          color: getThemeColor('body-color'),
          maxTicksLimit: breakpoints.down('sm')
            ? 4
            : breakpoints.down('md')
            ? 7
            : 12
        },
        grid: { color: 'transparent' }
      },
      y: {
        beginAtZero: false,
        min: 170,
        max: 290,
        ticks: {
          stepSize: 10,
          color: getThemeColor('body-color'),
          callback: value => `${value}     `
        },
        grid: {
          color: getThemeColor('border-color-translucent'),
          drawTicks: false
        }
      }
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [chartData]);

  const plugins = useMemo(
    () => [verticalLinePlugin(isDark), borderXPlugin(isDark)],
    [isDark]
  );

  return (
    <Line
      key={chartKey}
      id={id}
      ref={chartRef}
      data={data}
      options={chartOptions}
      plugins={plugins}
      style={{
        minHeight: '36.5rem',
        maxHeight: '36.5rem'
      }}
    />
  );
};

export default TopStockLineChart;
