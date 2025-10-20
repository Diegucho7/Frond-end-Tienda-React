import { gantt, Task } from 'dhtmlx-gantt';
interface Assignee {
  name: string;
  img: string;
}

const assigneeTemplate = (task: Task): string => {
  if (task.type === gantt.config.types.project) return '';

  const owners: Assignee[] = task.assignee || [];
  if (!owners.length) return 'Unassigned';

  const items = owners
    .map((assignee, idx) => {
      if (owners.length > 4 && idx === 3) {
        return `
          <div class="assignee-dropdown-container">
            <a href="#!" class="avatar avatar-s">
              <div class="avatar-name rounded-circle border border-translucent">
                <span>+${owners.length - 3}</span>
              </div>
            </a>
            <ul class="dropdown-menu py-2">
              ${owners
                .map(
                  owner => `
                <div class="dropdown-item py-2 px-3 d-flex gap-2 align-items-center">
                  <div class="avatar avatar-s">
                    <img class="rounded-circle" src="${owner.img}" alt="${
                      owner.name || 'assignee'
                    }" />
                  </div>
                  <a href="#" class="fw-bold text-body text-decoration-none lh-1">${
                    owner.name
                  }</a>
                </div>
              `
                )
                .join('')}
            </ul>
          </div>
        `;
      }

      if (idx <= 3) {
        return `
          <div class="assignee-dropdown-container">
            <div class="avatar avatar-s">
              <img class="rounded-circle" src="${assignee.img}" alt="${
                assignee.name || 'assignee'
              }" onerror="this.style.display='none'"/>
            </div>
            <ul class="dropdown-menu py-0">
              <li class="dropdown-item py-0 px-3 d-flex gap-3 align-items-center">
                <div class="avatar avatar-s">
                  <img class="rounded-circle" src="${assignee.img}" alt="${
                    assignee.name || 'assignee'
                  }" onerror="this.style.display='none'"/>
                </div>
                <span class="fw-bold text-body text-decoration-none lh-1 py-3">${
                  assignee.name
                }</span>
              </li>
            </ul>
          </div>
        `;
      }

      return '';
    })
    .join('');

  return `<div class="d-flex align-items-center avatar-group">${items}</div>`;
};

export const formatDate = (date: Date | undefined): string =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : '';

export const ganttConfigColumnsData = [
  {
    name: 'text',
    label: 'PROJECT NAME',
    tree: true,
    min_width: 410,
    template(task: Task) {
      const subTasks = gantt.getChildren(task.id).length;
      return `<div class='gantt-task-title-wrapper'> 
          <span class='gantt-task-title'>${task.text} </span>
          ${
            subTasks
              ? `<span class="badge text-bg-primary">${subTasks}</span>`
              : ''
          }
          <button data-gantt-add-subtask id=${
            task.id
          } class='btn btn-subtle-info  gantt-task-title-btn'><span class='fa-solid fa-plus'/></button>
        </div>`;
    }
  },
  {
    name: 'assignee',
    label: 'ASSIGNEE',
    min_width: 160,
    template: assigneeTemplate,
    sort: false
  },

  {
    name: 'Priority',
    label: 'PRIORITY',
    min_width: 160,
    template(task: Task) {
      const label = task.priority?.toLowerCase();
      let color;
      switch (label) {
        case 'urgent':
          color = 'danger';
          break;
        case 'high':
          color = 'warning';
          break;
        case 'medium':
          color = 'success';
          break;
        default:
          color = 'info';
          break;
      }
      return `<div class='text-body'><span class='fa-solid fa-circle text-${color} me-1 fs-10'></span>${
        task.priority || 'Low'
      }</div>`;
    },
    sort(a: Task, b: Task) {
      const priorityA = a.priority.toLowerCase();
      const priorityB = b.priority.toLowerCase();

      if (priorityA < priorityB) return -1;
      if (priorityA > priorityB) return 1;
      return 0;
    }
  },
  {
    name: 'start_date',
    label: 'START DATE',
    align: 'start',
    min_width: 160,
    template(task: Task) {
      return `
         <span class='far fa-calendar text-body-quaternary fs-8 me-1'></span> ${formatDate(
           task.start_date
         )} 
      `;
    }
  },
  {
    name: 'end_date',
    label: 'END DATE',
    align: 'start',
    min_width: 160,
    template(task: Task) {
      return `
       <span class='far fa-calendar text-body-quaternary fs-8 me-1'></span> ${formatDate(
         task.end_date
       )} 
    `;
    }
  },
  {
    name: 'duration',
    label: 'DURATION',
    align: 'start',
    min_width: 160,
    template(task: Task) {
      return `
        <span class='far fa-clock me-1 fs-8 text-quaternary'></span>
        ${task.duration} days 
    `;
    }
  }
];

export const taskTextHandler = (isRtl: boolean) => {
  gantt.config.font_width_ratio = 7;

  const getTaskFitValue = (task: Task) => {
    if (!task.start_date || !task.end_date) return 'center'; // default fallback

    const position1 = gantt.posFromDate(task.start_date);
    const position2 = gantt.posFromDate(task.end_date);
    const taskStartPos = isRtl ? position2 : position1;
    const taskEndPos = isRtl ? position1 : position2;
    const width = taskEndPos - taskStartPos;
    const textWidth = (task.text || '').length * gantt.config.font_width_ratio;

    if (width < textWidth) {
      const ganttLastDate = gantt.getState().max_date;
      const ganttEndPos = gantt.posFromDate(ganttLastDate);
      if (ganttEndPos - taskEndPos < textWidth) {
        return 'left';
      }
      return 'right';
    }
    return 'center';
  };

  gantt.templates.leftside_text = (start, end, task) =>
    getTaskFitValue(task) === 'left' ? task.text : '';

  gantt.templates.rightside_text = (start, end, task) =>
    getTaskFitValue(task) === 'right' ? task.text : '';

  gantt.templates.task_text = (start, end, task) =>
    getTaskFitValue(task) === 'center' ? task.text : '';
};
