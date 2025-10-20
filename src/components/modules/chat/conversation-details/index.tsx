import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { Conversation } from 'data/chat';
import { Dropdown } from 'react-bootstrap';
import SharedMedia from './SharedMedia';
import SharedFiles from './SharedFiles';
import ActionButton from './ActionButton';
import {
  faBan,
  faBellSlash,
  faChevronLeft,
  faEllipsisV,
  faFlag,
  faGear,
  faHandHoldingHeart,
  faPalette,
  faPhone,
  faSearch,
  faUserPen,
  faUserPlus,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

interface ConversationDetailsProps {
  conversation: Conversation;
  handleClose: () => void;
}

const ConversationDetails = ({
  conversation,
  handleClose
}: ConversationDetailsProps) => {
  return (
    <>
      <div className="border-bottom border-translucent p-4">
        <div className="d-flex flex-between-center">
          <Button className="p-0" onClick={handleClose}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-body-tertiary"
            />
          </Button>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant=""
              size="sm"
              className="p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
            >
              <FontAwesomeIcon
                icon={faEllipsisV}
                className="text-body-tertiary"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="py-2">
              <ActionDropdownItems />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex flex-column align-items-center text-center">
          <Avatar src={conversation.user.avatar} size="4xl" className="mb-2" />
          <h4 className="fw-semibold mb-3">{conversation.user.name}</h4>
          <div className="d-flex gap-1">
            <Button variant="primary" className="btn-icon fs-10">
              <FontAwesomeIcon icon={faPhone} />
            </Button>
            <Button variant="primary" className="btn-icon fs-10">
              <FontAwesomeIcon icon={faVideo} />
            </Button>
            <Button variant="phoenix-primary" className="btn-icon fs-10">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 px-sm-5 d-flex flex-column gap-3 scrollbar">
        <ActionButton icon={faUserPen}>Nickname</ActionButton>
        <ActionButton icon={faPalette}>Change Color</ActionButton>
        <ActionButton icon={faUserPlus}>Create Group Chat</ActionButton>

        <SharedMedia />

        <SharedFiles />

        <ActionButton icon={faBellSlash}>Mute Conversation</ActionButton>
        <ActionButton icon={faGear}>Manage Settings</ActionButton>
        <ActionButton icon={faHandHoldingHeart}>Get help</ActionButton>
        <ActionButton icon={faFlag}>Report Account</ActionButton>
        <ActionButton icon={faBan}>Block Account</ActionButton>
      </div>
    </>
  );
};

export default ConversationDetails;
