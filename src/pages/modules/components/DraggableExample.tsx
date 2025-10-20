import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useState, PropsWithChildren } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import {
  DndContext,
  closestCorners,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  DragOverlay
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useGetDndSensor } from 'hooks/useGetDndSensor';

interface Task {
  id: number;
  title: string;
}
interface ColumnDataType {
  id: number;
  tasks: Task[];
}

interface SortableItemProps {
  task: Task;
  columnId: number;
}

const data: ColumnDataType[] = [
  {
    id: 1,
    tasks: [
      {
        id: 1001,
        title: 'Add a pdf file that describes all the symptoms of COVID-19'
      },
      {
        id: 1002,
        title:
          'Make a Registration form that include Name, Email and a Password input field'
      },
      {
        id: 1003,
        title:
          'Add a cookie notice which will be shown in the bottom of the page and have a link of "Privacy Policy"'
      },
      {
        id: 1004,
        title:
          'Update profile page layout with cover image and user setting menu'
      }
    ]
  },
  {
    id: 2,
    tasks: [
      {
        id: 2001,
        title:
          'Update all the npm packages and also remove the outdated plugins'
      },
      {
        id: 2002,
        title:
          'Add a getting started page that allows users to see the starting process'
      },
      {
        id: 2003,
        title: 'Review and test all the task and deploy to the server'
      },
      {
        id: 2004,
        title:
          'Get all the data by API call and show them to the landing page by adding a new section'
      }
    ]
  }
];

const exampleCode = `
import { useState, PropsWithChildren } from 'react';
import {
  DndContext,
  closestCorners,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  DragOverlay
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Task {
  id: number;
  title: string;
}
interface ColumnDataType {
  id: number;
  tasks: Task[];
}

interface SortableItemProps {
  task: Task;
  columnId: number;
}

const data: ColumnDataType[] = [
  {
    id: 1,
    tasks: [
      {
        id: 1001,
        title: 'Add a pdf file that describes all the symptoms of COVID-19'
      },
      {
        id: 1002,
        title:
          'Make a Registration form that include Name, Email and a Password input field'
      },
      {
        id: 1003,
        title:
          'Add a cookie notice which will be shown in the bottom of the page and have a link of "Privacy Policy"'
      },
      {
        id: 1004,
        title:
          'Update profile page layout with cover image and user setting menu'
      }
    ]
  },
  {
    id: 2,
    tasks: [
      {
        id: 2001,
        title:
          'Update all the npm packages and also remove the outdated plugins'
      },
      {
        id: 2002,
        title:
          'Add a getting started page that allows users to see the starting process'
      },
      {
        id: 2003,
        title: 'Review and test all the task and deploy to the server'
      },
      {
        id: 2004,
        title:
          'Get all the data by API call and show them to the landing page by adding a new section'
      }
    ]
  }
];

const SortableItem = ({
  task,
  columnId,
  children
}: PropsWithChildren<SortableItemProps>) => {
  const { setNodeRef, listeners, transform, transition, isDragging } =
    useSortable({
      id: task.id,
      data: {
        type: 'task',
        item: task,
        columnId
      }
    });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? 'grabbing' : 'pointer',
    zIndex: isDragging ? 2 : 'auto',
    opacity: isDragging ? 0 : 1
  };

  return (
    <div ref={setNodeRef} style={styles} {...listeners}>
      {children}
    </div>
  );
};

const Example = () => {
  const [columns, setColumns] = useState(data);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensor = useGetDndSensor()

  const findColumn = (id: number) => {
    return columns.find(
      col => col.tasks.some(task => task.id === id) || col.id === id
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveTask(event.active.data.current?.item);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!active || !over) return;

    const activeId = Number(active.id);
    const overId = Number(over.id);

    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);

    if (!activeColumn || !overColumn || activeColumn.id === overColumn.id)
      return;

    setColumns(prevData => {
      const activeTaskIndex = activeColumn.tasks.findIndex(
        item => item.id === activeId
      );

      if (activeTaskIndex === -1) return prevData;

      const activeItem = activeColumn.tasks[activeTaskIndex];
      const updatedActiveContents = activeColumn.tasks.filter(
        task => task.id !== activeId
      );

      const updatedOverContents = [...overColumn.tasks];
      const overItemIndex = overColumn.tasks.findIndex(
        task => task.id === overId
      );

      updatedOverContents.splice(
        overItemIndex >= 0 ? overItemIndex : updatedOverContents.length,
        0,
        activeItem
      );

      return prevData.map(column => {
        if (column.id === activeColumn.id) {
          return { ...column, tasks: updatedActiveContents };
        }
        if (column.id === overColumn.id) {
          return { ...column, tasks: updatedOverContents };
        }
        return column;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over) return;
    const activeColumnId = active.data.current?.columnId;
    const overColumnId = over.data.current?.columnId || over.id;
    if (activeColumnId === overColumnId) {
      const columnIndex = columns.findIndex(col => col.id === activeColumnId);
      const column = columns[columnIndex];
      const oldIndex = column.tasks.findIndex(task => task.id === active.id);
      const newIndex = column.tasks.findIndex(task => task.id === over.id);

      const updatedContents = arrayMove(column.tasks, oldIndex, newIndex);

      const newColumns = [...columns];
      newColumns[columnIndex] = { ...column, tasks: updatedContents };
      setColumns(newColumns);
    } else {
      const sourceColumnIndex = columns.findIndex(
        col => col.id === activeColumnId
      );
      const destinationColumnIndex = columns.findIndex(
        col => col.id === overColumnId
      );

      const activeTask = columns[sourceColumnIndex].tasks.find(
        task => task.id === active.id
      );

      const newColumns = [...columns];
      newColumns[sourceColumnIndex].tasks = newColumns[
        sourceColumnIndex
      ].tasks.filter(task => task.id !== active.id);
      if (activeTask && destinationColumnIndex) {
        newColumns[destinationColumnIndex].tasks = [
          ...newColumns[destinationColumnIndex].tasks,
          activeTask
        ];
      }

      setColumns(newColumns);
    }
    setActiveTask(null);
  };
  return (
    <DndContext
      sensors={sensor}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Row>
        {columns.map(list => (
          <Col lg={6} key={list.id}>
            <SortableContext
              items={list.tasks.map(item => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {list.tasks.map(task => (
                <SortableItem key={task.id} task={task} columnId={list.id}>
                  <Card className="mb-3">
                    <Card.Body>
                      <p className="mb-0 fw-medium">{task.title}</p>
                    </Card.Body>
                  </Card>
                </SortableItem>
              ))}
            </SortableContext>
          </Col>
        ))}
      </Row>
      <DragOverlay>
        {activeTask && (
          <Card className="mb-3" style={{ cursor: 'grabbing' }}>
            <Card.Body>
              <p className="mb-0 fw-medium">{activeTask?.title}</p>
            </Card.Body>
          </Card>
        )}
      </DragOverlay>
    </DndContext>
  );
}
`;

const DraggableExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Draggable"
        description={`${
          import.meta.env.VITE_TITLE
        }-React utilizes @dnd-kit/core and @dnd-kit/sortable for its draggable component. @dnd-kit/core and @dnd-kit/sortable is designed to create visually appealing drag-and-drop functionality for lists, making it accessible to all.`}
        link={{
          text: '@dnd-kit Documentation',
          url: 'https://docs.dndkit.com/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Here is the example of the Multiple Container Sortable feature of
              the <code>@dnd-kit</code> library. We also design{' '}
              <Link to="/apps/kanban/kanban">Kanban</Link> using this{' '}
              <code>@dnd-kit</code> Library.{' '}
              <b>You can drag any card in between the two columns below:</b>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} hidePreview>
            <Example />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

const SortableItem = ({
  task,
  columnId,
  children
}: PropsWithChildren<SortableItemProps>) => {
  const { setNodeRef, listeners, transform, transition, isDragging } =
    useSortable({
      id: task.id,
      data: {
        type: 'task',
        item: task,
        columnId
      }
    });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? 'grabbing' : 'pointer',
    zIndex: isDragging ? 2 : 'auto',
    opacity: isDragging ? 0 : 1
  };

  return (
    <div ref={setNodeRef} style={styles} {...listeners}>
      {children}
    </div>
  );
};

const Example = () => {
  const [columns, setColumns] = useState(data);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensor = useGetDndSensor();

  const findColumn = (id: number) => {
    return columns.find(
      col => col.tasks.some(task => task.id === id) || col.id === id
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveTask(event.active.data.current?.item);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!active || !over) return;

    const activeId = Number(active.id);
    const overId = Number(over.id);

    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);

    if (!activeColumn || !overColumn || activeColumn.id === overColumn.id)
      return;

    setColumns(prevData => {
      const activeTaskIndex = activeColumn.tasks.findIndex(
        item => item.id === activeId
      );

      if (activeTaskIndex === -1) return prevData;

      const activeItem = activeColumn.tasks[activeTaskIndex];
      const updatedActiveContents = activeColumn.tasks.filter(
        task => task.id !== activeId
      );

      const updatedOverContents = [...overColumn.tasks];
      const overItemIndex = overColumn.tasks.findIndex(
        task => task.id === overId
      );

      updatedOverContents.splice(
        overItemIndex >= 0 ? overItemIndex : updatedOverContents.length,
        0,
        activeItem
      );

      return prevData.map(column => {
        if (column.id === activeColumn.id) {
          return { ...column, tasks: updatedActiveContents };
        }
        if (column.id === overColumn.id) {
          return { ...column, tasks: updatedOverContents };
        }
        return column;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over) return;
    const activeColumnId = active.data.current?.columnId;
    const overColumnId = over.data.current?.columnId || over.id;
    if (activeColumnId === overColumnId) {
      const columnIndex = columns.findIndex(col => col.id === activeColumnId);
      const column = columns[columnIndex];
      const oldIndex = column.tasks.findIndex(task => task.id === active.id);
      const newIndex = column.tasks.findIndex(task => task.id === over.id);

      const updatedContents = arrayMove(column.tasks, oldIndex, newIndex);

      const newColumns = [...columns];
      newColumns[columnIndex] = { ...column, tasks: updatedContents };
      setColumns(newColumns);
    } else {
      const sourceColumnIndex = columns.findIndex(
        col => col.id === activeColumnId
      );
      const destinationColumnIndex = columns.findIndex(
        col => col.id === overColumnId
      );

      const activeTask = columns[sourceColumnIndex].tasks.find(
        task => task.id === active.id
      );

      const newColumns = [...columns];
      newColumns[sourceColumnIndex].tasks = newColumns[
        sourceColumnIndex
      ].tasks.filter(task => task.id !== active.id);
      if (activeTask && destinationColumnIndex) {
        newColumns[destinationColumnIndex].tasks = [
          ...newColumns[destinationColumnIndex].tasks,
          activeTask
        ];
      }

      setColumns(newColumns);
    }
    setActiveTask(null);
  };
  return (
    <DndContext
      sensors={sensor}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Row>
        {columns.map(list => (
          <Col lg={6} key={list.id}>
            <SortableContext
              items={list.tasks.map(item => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {list.tasks.map(task => (
                <SortableItem key={task.id} task={task} columnId={list.id}>
                  <Card className="mb-3">
                    <Card.Body>
                      <p className="mb-0 fw-medium">{task.title}</p>
                    </Card.Body>
                  </Card>
                </SortableItem>
              ))}
            </SortableContext>
          </Col>
        ))}
      </Row>
      <DragOverlay>
        {activeTask && (
          <Card
            className="mb-3"
            style={{
              cursor: 'grabbing'
            }}
          >
            <Card.Body>
              <p className="mb-0 fw-medium">{activeTask?.title}</p>
            </Card.Body>
          </Card>
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableExample;
