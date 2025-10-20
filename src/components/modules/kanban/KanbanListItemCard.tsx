import {
  faAngleRight,
  faCalendarXmark,
  faCircle,
  faEllipsisV,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Badge, { BadgeBg } from 'components/base/Badge';
import { KanbanBoardItem, KanbanBoardTask } from 'data/kanban';
import { Card, Dropdown } from 'react-bootstrap';
import KanbanTaskDetailsModal from './KanbanTaskDetailsModal';
import { Fragment, useState } from 'react';
import classNames from 'classnames';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface KanbanListItemCardProps {
  task: KanbanBoardTask;
  list: KanbanBoardItem;
  className?: string;
  columnId?: number;
}

const actions = [
  {
    id: 1,
    label: 'Move',
    isNested: true
  },
  {
    id: 2,
    label: 'Duplicate'
  },
  {
    id: 3,
    label: 'Jump to top'
  },
  {
    id: 4,
    label: 'Jump to bottom'
  },
  {
    id: 5,
    hr: true
  },
  {
    id: 6,
    label: 'Print/Download'
  },
  {
    id: 7,
    label: 'Share',
    isNested: true
  },
  {
    id: 8,
    hr: true
  },
  {
    id: 9,
    label: 'Move to archive',
    isNested: true
  },
  {
    id: 10,
    label: 'Delete',
    class: 'text-danger'
  }
];

const KanbanListItemCard = ({
  task,
  list,
  className,
  columnId
}: KanbanListItemCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    setNodeRef,
    listeners,
    attributes,
    isDragging,
    transform,
    transition
  } = useSortable({
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
    opacity: isDragging ? 0 : 1,
    cursor: isDragging ? 'grabbing' : 'pointer'
  };

  return (
    <div ref={setNodeRef} style={styles} {...attributes} {...listeners}>
      <Card
        className={classNames(
          className,
          'sortable-item hover-actions-trigger',
          { 'bg-body-emphasis': isDragging }
        )}
      >
        <Card.Body className="p-3">
          {task.coverImage && (
            <div
              className="position-relative mb-2 overflow-hidden rounded w-100"
              style={{ height: 200 }}
            >
              <div
                className="bg-holder banner-bg"
                style={{
                  backgroundImage: `url(${task.coverImage})`,
                  backgroundPosition: 'bottom left'
                }}
              />
            </div>
          )}
          <div className="kanban-status mb-1 position-relative lh-1">
            <FontAwesomeIcon
              transform="shrink-1 down-3"
              icon={faCircle}
              className={`me-2 d-inline-block text-${task.status.color}`}
            />
            <Badge
              variant="phoenix"
              bg={task.status.color as BadgeBg}
              className="fs-10"
            >
              {task.status.label}
              <FontAwesomeIcon
                icon={task.status.icon}
                transform="up-2"
                className="ms-1 d-inline-block"
                style={{ height: 7.8, width: 7.8 }}
              />
            </Badge>
            <Dropdown autoClose="outside" className="position-static">
              <Dropdown.Toggle
                variant=""
                size="sm"
                className="hover-actions dropdown-caret-none kanban-item-dropdown-btn"
              >
                <FontAwesomeIcon icon={faEllipsisV} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="py-2" style={{ width: '15rem' }}>
                {actions.map(action => (
                  <Fragment key={action.id}>
                    {action.hr ? (
                      <hr className="my-2" />
                    ) : (
                      <Dropdown.Item
                        href="#!"
                        key={action.label}
                        className="d-flex flex-between-center"
                      >
                        {action.label}
                        {action.isNested && (
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="fs-10"
                          />
                        )}
                      </Dropdown.Item>
                    )}
                  </Fragment>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <p className="mb-2 stretched-link" onClick={() => setOpenModal(true)}>
            {task.title}
          </p>
          <div className="d-flex mt-2 align-items-center">
            {task.date && (
              <p className="mb-0 text-body-tertiary text-opactity-85 fs-9 lh-1 me-3 white-space-nowrap">
                <FontAwesomeIcon
                  icon={faCalendarXmark}
                  className="fs-0 me-2 d-inline-block"
                />
                <>{task.date}</>
              </p>
            )}
            {task.attachments && (
              <p className="mb-0 text-body-tertiary text-opactity-85 fs-9 lh-1">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="fs-0 me-2 d-inline-block"
                />
                {task.attachments}
              </p>
            )}
            {task.completedTasks && (
              <p className="mb-0 text-body-tertiary text-opactity-85 fs-9 lh-1">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="fs-0 me-2 d-inline-block"
                />
                {task.completedTasks[0]} / {task.completedTasks[1]}
              </p>
            )}
            {task.members && (
              <Avatar.Group
                total={task.members.length}
                size="s"
                className="ms-auto"
              >
                {task.members.slice(0, 4).map(member => (
                  <Avatar key={member.id} size="s" src={member.avatar} />
                ))}
              </Avatar.Group>
            )}
          </div>
        </Card.Body>
      </Card>

      <KanbanTaskDetailsModal
        show={openModal}
        handleClose={() => setOpenModal(false)}
        task={task}
        list={list}
      />
    </div>
  );
};

export default KanbanListItemCard;
