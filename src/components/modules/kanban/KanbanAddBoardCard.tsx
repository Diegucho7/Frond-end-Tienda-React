import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Link } from 'react-router';

const KanbanAddBoardCard = () => {
  return (
    <Button
      variant="phoenix-primary"
      className="d-flex flex-center h-100 w-100 fs-7 fw-semibold"
      as={Link}
      to="/apps/kanban/create-board"
    >
      <FontAwesomeIcon icon={faPlusCircle} className="fs-8 me-2" />
      Create New Board
    </Button>
  );
};

export default KanbanAddBoardCard;
