import classNames from 'classnames';
import Button from 'components/base/Button';
import { KanbanBoardItem } from 'data/kanban';
import React, { useState } from 'react';
import KanbanListItemCard from './KanbanListItemCard';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import KanbanListHeader from './KanbanListHeader';
import { v4 as uuid } from 'uuid';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useKanbanContext } from 'providers/KanbanProvider';

interface KanbanListProps {
  list: KanbanBoardItem;
  columnId?: number;
}

const KanbanList = ({ list, columnId }: KanbanListProps) => {
  const { kanbanDispatch } = useKanbanContext();
  const [collapsed, setCollapsed] = useState(!!list.isCollapsed);
  const [taskTitle, setTaskTitle] = useState('');
  const { setNodeRef, listeners, attributes } = useSortable({
    id: list.id,
    data: {
      type: 'column'
    }
  });
  const handleNewTaskAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomNumber = parseInt(uuid().replace(/-/g, '').slice(0, 12), 16);
    const newTask = {
      id: randomNumber,
      status: {
        label: 'Undefined',
        icon: faSpinner,
        color: 'secondary'
      },
      title: taskTitle,
      attachments: 1,
      priority: 'Low' as const
    };
    if (taskTitle && columnId) {
      kanbanDispatch({
        type: 'ADD_NEW_TASK',
        payload: { newTask, columnId }
      });
    }
    setTaskTitle('');
  };

  return (
    <div
      className={classNames('kanban-column scrollbar', {
        collapsed
      })}
    >
      <KanbanListHeader
        list={list}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div
        className="kanban-items-container"
        ref={setNodeRef}
        {...listeners}
        {...attributes}
      >
        <SortableContext
          items={list.tasks.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {list.tasks.map(task => (
            <div
              className="py-2 px-2 border-bottom border-translucent"
              key={task.id}
            >
              <KanbanListItemCard list={list} task={task} columnId={columnId} />
            </div>
          ))}
        </SortableContext>
      </div>
      <Form onSubmit={handleNewTaskAdd} className="py-3 px-4 kanban-add-task">
        <Button className="bg-body-tertiary me-2 px-0" type="submit">
          <FontAwesomeIcon
            icon={faPlus}
            className="text-white dark__text-gray-400"
            transform="grow-4 down-1"
          />
        </Button>
        <Form.Control
          className="search-input rounded-3 px-3"
          placeholder="Add new task"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default KanbanList;
