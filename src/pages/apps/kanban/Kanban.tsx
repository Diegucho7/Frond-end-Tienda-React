import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import KanbanAddListModal from 'components/modals/KanbanAddListModal';
import KanbanBoardOffcanvas from 'components/modules/kanban/KanbanBoardOffcanvas';
import KanbanHeader from 'components/modules/kanban/KanbanHeader';
import KanbanList from 'components/modules/kanban/KanbanList';
import KanbanProvider, { useKanbanContext } from 'providers/KanbanProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect, useState } from 'react';
import { TOGGLE_ADD_LIST_MODAL } from 'reducers/KanbanReducer';
import { KanbanBoardItem, KanbanBoardTask } from 'data/kanban';
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  closestCorners
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import KanbanListItemCard from 'components/modules/kanban/KanbanListItemCard';
import { useGetDndSensor } from 'hooks/useGetDndSensor';

const Kanban = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('kanban-content');

    return () => {
      setContentClass('');
    };
  }, [setContentClass]);

  return (
    <KanbanProvider>
      <KanbanContent />
    </KanbanProvider>
  );
};

const KanbanContent = () => {
  const { boardLists, kanbanDispatch } = useKanbanContext();
  const sensors = useGetDndSensor();
  const [activeTask, setActiveTask] = useState<KanbanBoardTask | null>(null);
  const [activeList, setActiveList] = useState<KanbanBoardItem | null>(null);
  const findColumn = (id: number) => {
    return boardLists.find(
      col => col.tasks.some(task => task.id === id) || col.id === id
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const activeColumn = boardLists.find(
      list => list.id === active.data.current?.columnId
    );
    setActiveTask(active.data.current?.item);
    setActiveList(activeColumn || null);
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

    const activeTaskIndex = activeColumn.tasks.findIndex(
      task => task.id === activeId
    );
    const overTaskIndex = overColumn.tasks.findIndex(
      task => task.id === overId
    );

    const updatedSourceTasks = activeColumn.tasks.filter(
      task => task.id !== activeId
    );
    const updatedDestTasks = [
      ...overColumn.tasks.slice(0, overTaskIndex + 1),
      activeColumn.tasks[activeTaskIndex],
      ...overColumn.tasks.slice(overTaskIndex + 1)
    ];

    kanbanDispatch({
      type: 'UPDATE_DUAL_COLUMN',
      payload: {
        sourceColumn: activeColumn,
        updatedSourceItems: updatedSourceTasks,
        destColumn: overColumn,
        updatedDestItems: updatedDestTasks
      }
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over) return;

    const activeId = Number(active.id);
    const overId = Number(over.id);

    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);

    if (!activeColumn || !overColumn) return;

    if (activeColumn.id === overColumn.id) {
      const oldIndex = activeColumn.tasks.findIndex(
        task => task.id === activeId
      );
      const newIndex = activeColumn.tasks.findIndex(task => task.id === overId);

      if (oldIndex === -1 || newIndex === -1) return;

      const reorderedTasks = arrayMove(activeColumn.tasks, oldIndex, newIndex);

      kanbanDispatch({
        type: 'UPDATE_SINGLE_COLUMN',
        payload: { column: activeColumn, reorderItems: reorderedTasks }
      });
    } else {
      const activeTask = activeColumn.tasks.find(task => task.id === activeId);

      if (!activeTask) return;

      const updatedSourceTasks = activeColumn.tasks.filter(
        task => task.id !== activeId
      );
      const updatedDestTasks = [...overColumn.tasks, activeTask];

      kanbanDispatch({
        type: 'UPDATE_DUAL_COLUMN',
        payload: {
          sourceColumn: activeColumn,
          updatedSourceItems: updatedSourceTasks,
          destColumn: overColumn,
          updatedDestItems: updatedDestTasks
        }
      });
    }

    setActiveTask(null);
    setActiveList(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div>
        <KanbanHeader />
        <div className="kanban-container scrollbar">
          {boardLists.map(list => (
            <KanbanList list={list} key={list.id} columnId={list.id} />
          ))}
          <div className="kanban-column scrollbar position-relative bg-transparent d-flex flex-column h-100 flex-center bg-body-hover">
            <Button
              className="stretched-link btn-icon btn-icon bg-body-secondary rounded-circle mb-1"
              onClick={() =>
                kanbanDispatch({
                  type: TOGGLE_ADD_LIST_MODAL,
                  payload: true
                })
              }
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="text-body-secondary fs-8"
              />
            </Button>
            <h5 className="text-body-secondary">Add another list</h5>
          </div>
        </div>
        <KanbanBoardOffcanvas />
        <KanbanAddListModal />
      </div>
      <DragOverlay className="drag-overlay">
        {activeList && activeTask && (
          <KanbanListItemCard list={activeList} task={activeTask} />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default Kanban;
