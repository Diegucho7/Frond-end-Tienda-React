import {
  faAnglesDown,
  faBoxArchive,
  faCalendarXmark,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import { privateBoards, recentBoards, yourBoards } from 'data/kanban';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import KanbanBoardSection from 'components/modules/kanban/KanbanBoardSection';

const Boards = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('kanban-boards-content');

    return () => {
      setContentClass('');
    };
  }, []);
  return (
    <div className="mb-9">
      <div className="border-bottom border-translucent px-4 px-lg-6 pb-5">
        <Row className="justify-content-between gy-4">
          <Col xs="auto">
            <h2>
              Kanban Boards{' '}
              <span className="text-body-tertiary fw-semibold">(8)</span>
            </h2>
          </Col>
          <Col xs="auto" className="d-flex flex-wrap gap-2">
            <Button
              variant="phoenix-primary"
              startIcon={<FontAwesomeIcon icon={faFilter} />}
              className="d-flex px-4"
            >
              Filter
            </Button>
            <Form.Select className="w-auto" id="select-deals">
              <option>Sort by - Last visited</option>
              <option>Sort by - Name (A - Z)</option>
              <option>Sort by - Name (Z - A)</option>
              <option>Sort by - Category</option>
              <option>Sort by - Date created</option>
            </Form.Select>
            <SearchBox placeholder="Search by name" />
          </Col>
        </Row>
      </div>
      <div className="d-flex flex-wrap gap-3 border-bottom border-translucent px-4 px-lg-6 py-5">
        <Button
          variant="primary"
          className="px-3 px-sm-5 px-md-10"
          as={Link}
          to="/apps/kanban/create-board"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
        >
          Create New Board
        </Button>
        <Button
          variant="phoenix-primary"
          className="px-3 px-sm-4 d-flex text-body"
          as={Link}
          to="#!"
        >
          <FontAwesomeIcon icon={faAnglesDown} className="me-sm-2" />
          <span className="d-none d-sm-block white-space-nowrap">
            Import Bulk Tasks
          </span>
        </Button>
        <Button
          variant="phoenix-primary"
          className="px-3 px-sm-4 d-flex text-body"
          as={Link}
          to="#!"
        >
          <FontAwesomeIcon icon={faCalendarXmark} className="me-sm-2" />
          <span className="d-none d-sm-block">Upcoming Deadlines</span>
        </Button>
      </div>
      <KanbanBoardSection
        title="Most Recent Boards"
        description="Boards you’ve visited recently. Can be private or public boards."
        changePreference={true}
        boards={recentBoards}
      />
      <KanbanBoardSection
        title="Your Boards"
        description="Boards where you are either an Admin or a Member."
        boards={yourBoards}
      />
      <KanbanBoardSection
        title="Private Boards"
        description="Your eyes only"
        boards={privateBoards}
      />
      <div className="text-center">
        <Button
          variant="phoenix-primary"
          startIcon={<FontAwesomeIcon icon={faBoxArchive} className="me-2" />}
          className="mt-4"
        >
          Open Archive
        </Button>
      </div>
    </div>
  );
};

export default Boards;
