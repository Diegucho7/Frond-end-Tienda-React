import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card, Dropdown, Form, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import ChatFilterTab from './ChatFilterTab';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import { useState } from 'react';
import {
  faBars,
  faMagnifyingGlass,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from 'providers/AppProvider';

const ChatSidebar = ({ className }: { className?: string }) => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const {
    config: { isRTL }
  } = useAppContext();
  return (
    <>
      <Card className={classNames(className, 'chat-sidebar p-3 p-xl-1')}>
        <Button
          className="d-none d-sm-block d-xl-none mb-2"
          onClick={() => setOpenSearchModal(true)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-body-tertiary text-opacity-85 fs-7"
          />
        </Button>
        <Dropdown
          className="d-none d-sm-block d-xl-none mb-5"
          align={isRTL ? 'end' : 'start'}
        >
          <Dropdown.Toggle
            variant=""
            size="sm"
            className="w-100 mx-auto dropdown-caret-none"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="fs-7 text-body-tertiary text-opacity-85"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="p-0">
            <Dropdown.Item eventKey="1">All</Dropdown.Item>
            <Dropdown.Item eventKey="2">Read</Dropdown.Item>
            <Dropdown.Item eventKey="3">Unread</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group className="form-icon-container mb-4 d-sm-none d-xl-block">
          <Form.Control
            type="text"
            placeholder="People, Groups and Messages"
            className="form-icon-input"
          />
          <FontAwesomeIcon icon={faUser} className="text-body fs-9 form-icon" />
        </Form.Group>
        <ChatFilterTab />
      </Card>
      <Modal
        show={openSearchModal}
        onHide={() => setOpenSearchModal(false)}
        className="search-box-modal mt-15"
      >
        <Modal.Body className="p-0 bg-transparent">
          <DropdownSearchBox
            placeholder="Search People, Groups and Messages"
            size="lg"
            style={{ width: 'auto' }}
            autoFocus
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChatSidebar;
