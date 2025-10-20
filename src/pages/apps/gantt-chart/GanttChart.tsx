import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { useEffect, useRef, useState } from 'react';
import GanttChartActions from 'components/modules/gantt/GanttActions';
import GanttOffcanvas from 'components/modules/gantt/GanttOffcanvas';
import GanttDeleteLinkModal from 'components/modules/gantt/GanttDeleteLinkModal';
import { ganttData as tasks } from 'data/ganttData';
import {
  ganttConfigColumnsData,
  taskTextHandler
} from 'components/modules/gantt/layoutConfig';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useAppContext } from 'providers/AppProvider';
import { useGanttChartGridWidth } from 'hooks/useGanttChartGridWidth';
import { resetGanttConfig } from 'components/charts/dhtmlx/resetGanttConfig';

const weekScaleTemplate = (date: Date): string => {
  const dateToStr = gantt.date.date_to_str('%M %d');
  const endDate = gantt.date.add(date, 7 - date.getDay(), 'day');
  return `${dateToStr(date)} - ${dateToStr(endDate)}`;
};

const Views = {
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years'
};

export type ViewType = (typeof Views)[keyof typeof Views];
export type ViewKey = keyof typeof Views;

const scales: Record<ViewType, any> = {
  days: [
    { unit: 'week', step: 1, format: '%W' },
    { unit: 'day', step: 1, format: '%d %M' }
  ],
  weeks: [
    { unit: 'month', step: 1, format: '%F' },
    { unit: 'week', step: 1, format: weekScaleTemplate }
  ],
  months: [
    { unit: 'year', step: 1, format: '%Y' },
    { unit: 'month', step: 1, format: '%F' }
  ],
  years: [
    {
      unit: 'year',
      step: 3,
      format: (date: Date) => {
        const dateToStr = gantt.date.date_to_str('%Y');
        const endDate = gantt.date.add(date, 3, 'year');
        return `${dateToStr(date)} - ${dateToStr(endDate)}`;
      }
    },
    { unit: 'year', step: 1, format: '%Y' }
  ]
};

const GanttChart = () => {
  const containerRef = useRef(null);
  const [currentView, setCurrentView] = useState<ViewType>(Views.MONTHS);
  const { setContentClass } = useMainLayoutContext();
  const ganttWidth = useGanttChartGridWidth();
  const {
    config: { isRTL }
  } = useAppContext();

  useEffect(() => {
    setContentClass('gantt-content');
    return () => {
      setContentClass('');
    };
  }, [setContentClass]);

  useEffect(() => {
    if (!containerRef.current || !ganttWidth) return;
    resetGanttConfig()
    gantt.plugins({});
    gantt.config.scales = scales[currentView];
    gantt.config.row_height = 48;
    gantt.config.scale_height = 70;
    gantt.config.bar_height = 16;
    gantt.config.sort = true;
    gantt.config.grid_resizer = true;
    gantt.config.min_column_width = 130;
    gantt.config.columns = ganttConfigColumnsData;
    gantt.config.rtl = false;
    gantt.config.scroll_size = 7;

    const gridConfig = {
      width: ganttWidth,
      rows: [
        {
          view: 'grid',
          scrollX: 'gridScroll',
          scrollable: true,
          scrollY: 'scrollVer'
        },
        { view: 'scrollbar', id: 'gridScroll' }
      ]
    };
    const timelineConfig = {
      rows: [
        { view: 'timeline', scrollX: 'scrollHor', scrollY: 'scrollVer' },
        { view: 'scrollbar', id: 'scrollHor' }
      ]
    };

    const scrollbarConfig = { view: 'scrollbar', id: 'scrollVer' };
    const resizerConfig = { resizer: true, width: 1 };

    gantt.config.layout = {
      css: 'gantt_container',
      cols: [gridConfig, resizerConfig, timelineConfig, scrollbarConfig]
    };

    if (isRTL) {
      gantt.config.rtl = true;
      gantt.config.layout = {
        css: 'gantt_container',
        cols: [scrollbarConfig, timelineConfig, resizerConfig, gridConfig]
      };
    }

    taskTextHandler(isRTL);
    gantt.scrollTo(0);
    gantt.parse(tasks);
    gantt.render();
    gantt.init(containerRef?.current);

    gantt.templates.grid_header_class = columnName =>
      columnName === 'assignee' ? 'sort-btn-none' : '';
    gantt.resetLayout();
    return () => {
      gantt.clearAll();
      gantt.resetLayout();
      gantt.resetSkin();
      gantt._events = [];
    };
  }, [ganttWidth]);

  useEffect(() => {
    gantt.config.scales = scales[currentView];
    gantt.render();
  }, [currentView]);

  useEffect(() => {
    const handleResize = () => {
      gantt.render();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <GanttChartActions setCurrentView={setCurrentView} />
      <div className="gantt-app-container">
        <div id="gantt-app" ref={containerRef} style={{ width: '100%' }} />
      </div>
      <GanttOffcanvas />
      <GanttDeleteLinkModal />
    </>
  );
};

export default GanttChart;
