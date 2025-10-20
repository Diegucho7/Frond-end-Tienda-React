// ganttUtils.js

import { gantt } from 'dhtmlx-gantt';


export const resetGanttConfig = () => {
  gantt.config.xml_date = "%Y-%m-%d %H:%i";
  gantt.config.auto_scheduling = false;
  gantt.config.grid_width = 360;
  gantt.config.date_grid = "%Y-%m-%d";
  gantt.config.min_column_width = 45;
  gantt.config.scale_height = 50;
  gantt.config.row_height = 27;
  gantt.config.task_height = 22;
  gantt.config.order_branch = true;
  gantt.config.order_branch_free = true;
  gantt.config.duration_unit = "day";
  gantt.config.work_time = false;
  gantt.config.round_durations = true;
  gantt.config.drag_move = true;
  gantt.config.drag_resize = true;
  gantt.config.drag_progress = true;
  gantt.config.drag_links = true;
  gantt.config.smart_scales = false;
  gantt.config.auto_update_links = true;
  gantt.config.readonly = false;
  gantt.config.fit_tasks = false;
  gantt.config.show_errors = true;
  gantt.config.show_progress = true;
  gantt.config.show_quick_info = true;
  gantt.config.show_links = true;
  gantt.config.rtl = false;
  gantt.config.columns = [
    {name: "text", label: "Task name", tree: true, width: '*' },
    {name: "start_date", label: "Start time", align: "center", width: 90 },
    {name: "duration", label: "Duration", align: "center", width: 70 },
    {name: "add", label: "", width: 44 }
  ];
  gantt.config.scroll_size = 15;
  gantt.config.sort = false;
  gantt.config.grid_resizer = true;

  // --- Reset the default layout ---
  gantt.config.layout = {
      css: 'gantt_container',
      rows: [
        {
          cols: [
            {
              view: 'grid',
              id: 'grid',
              scrollX: 'scrollHor',
              scrollY: 'scrollVer'
            },
            {
              resizer: true,
              width: 1
            },
            {
              view: 'timeline',
              id: 'timeline',
              scrollX: 'scrollHor',
              scrollY: 'scrollVer'
            },
            {
              view: 'scrollbar',
              id: 'scrollVer'
            }
          ]
        },
        {
          view: 'scrollbar',
          id: 'scrollHor'
        }
      ]
  };

  gantt.resetLayout();
};
