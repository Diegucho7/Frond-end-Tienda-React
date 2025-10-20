import {
  faAngleDown,
  faBars,
  faBarsStaggered,
  faBoxArchive,
  faCalendarDays,
  faFilter,
  faPalette,
  faRightLeft,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { kanbanBoardMembers } from 'data/kanban';
import { Col, Dropdown, Nav, Row } from 'react-bootstrap';
import { useKanbanContext } from 'providers/KanbanProvider';
import { useState } from 'react';
import KanbanInviteModal from 'components/modals/KanbanInviteModal';
import { TOGGLE_DETAILS_OFFCANVAS } from 'reducers/KanbanReducer';

const navItems = [
  {
    icon: faFilter,
    title: 'Filter'
  },
  {
    icon: faRightLeft,
    title: 'Export/import'
  },
  {
    icon: faPalette,
    title: 'Modify'
  },
  {
    icon: faBarsStaggered,
    title: 'Gantt'
  },
  {
    icon: faCalendarDays,
    title: 'Calendar'
  },
  {
    icon: faBoxArchive,
    title: 'Archive'
  }
];

const KanbanHeader = () => {
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const { kanbanDispatch } = useKanbanContext();

  return (
    <>
      <div className="kanban-header">
        <Row className="gx-0 justify-content-between justify-content-md-start">
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-decoration-none dropdown-caret-none text-body-emphasis fs-8 ps-0"
              >
                <span className="fs-7 me-2">Phoenix</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-body-quaternary d-inline-block"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="py-0">
                <Dropdown.Item href="#/action-1">Sparrow</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Boreas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Erebus</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs="auto" className="d-flex align-items-center gap-4">
            <Avatar.Group
              total={
                kanbanBoardMembers.members.length +
                kanbanBoardMembers.guests.length
              }
              size="m"
            >
              {kanbanBoardMembers.members.slice(0, 3).map(member => (
                <AvatarDropdown user={member} size="m" key={member.id} />
              ))}
            </Avatar.Group>
            <Button
              startIcon={<FontAwesomeIcon icon={faUserPlus} />}
              variant="primary"
              className="fs-10 px-3"
              onClick={() => setOpenInviteModal(!openInviteModal)}
            >
              <span className="d-none d-sm-inline">invite</span>
            </Button>
          </Col>
          <Col md="auto" className="d-flex align-items-center gap-4 ms-auto">
            <Nav className="w-100 fs-9">
              {navItems.map(item => (
                <Nav.Item key={item.title}>
                  <Nav.Link className="d-flex gap-2 align-items-center text-body px-2 px-xl-3 fw-bold">
                    <FontAwesomeIcon icon={item.icon} transform="up-2" />
                    <span className="d-none d-xxl-inline">{item.title}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item className="my-auto ms-auto">
                <Nav.Link
                  className="d-flex gap-2 align-items-center text-body px-2 px-xl-3 fw-bold"
                  onClick={() => {
                    kanbanDispatch({
                      type: TOGGLE_DETAILS_OFFCANVAS,
                      payload: true
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faBars} transform="up-2" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
      <KanbanInviteModal
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
      />
    </>
  );
};

export default KanbanHeader;
