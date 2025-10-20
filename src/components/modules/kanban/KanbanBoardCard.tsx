import {
  faCalendarXmark,
  faComment,
  faListCheck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import { KanbanBoard } from 'data/kanban';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';

const KanbanBoardCard = ({ board }: { board: KanbanBoard }) => {
  return (
    <Card className="overflow-hidden bg-transparent h-100 position-relative">
      <div className="position-relative">
        {board.coverImage ? (
          <>
            <img
              src={board.coverImage}
              alt=""
              height={128}
              className="w-100 fit-cover"
            />
          </>
        ) : (
          <div className="bg-body-secondary" style={{ height: '128px' }} />
        )}
        <Avatar.Group
          total={board.users.length}
          size="m"
          className="position-absolute bottom-0 mb-3 ms-4"
        >
          {board.users.map(user => (
            <Avatar
              size="m"
              className="border rounded-circle border-light-subtle"
              src={user.avatar}
              key={user.id}
            />
          ))}
        </Avatar.Group>
      </div>
      <Card.Body className="d-flex flex-column rounded-bottom-lg justify-content-between">
        <div>
          <h3 className="text-body">{board.title}</h3>
          <p className="text-body-tertiary mb-4">{board.category}</p>
        </div>
        <div className="d-flex gap-4">
          <h5 className="text-body">
            <FontAwesomeIcon
              icon={faListCheck}
              className="text-body-tertiary me-1"
            />
            {board.totalTasks}
          </h5>
          <h5 className="text-body">
            <FontAwesomeIcon
              icon={faComment}
              className="text-body-tertiary me-1"
            />
            {board.comments}
          </h5>
          <h5 className="text-body">
            <FontAwesomeIcon
              icon={faCalendarXmark}
              className="text-body-tertiary me-1"
            />
            {board.deadlines}
          </h5>
        </div>
      </Card.Body>
      <Link to="/apps/kanban/kanban" className="stretched-link" />
    </Card>
  );
};

export default KanbanBoardCard;
