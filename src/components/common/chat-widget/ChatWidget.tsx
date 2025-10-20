import {
  faChevronDown,
  faCircle,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Card, Dropdown } from 'react-bootstrap';
import Button from 'components/base/Button';
import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
import ChatWidgetConversation from './ChatWidgetConversation';
import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import ChatWidgetFooter from './ChatWidgetFooter';

const ChatWidget = () => {
  const {
    config: { isChatWidgetVisible }
  } = useAppContext();
  const { isOpenChat, setIsOpenChat } = useChatWidgetContext();
  return (
    <div
      className={classNames({
        'd-none': !isChatWidgetVisible
      })}
    >
      <div
        className={classNames('container-fluid support-chat', {
          'show-chat': isOpenChat
        })}
      >
        <Card className="bg-body-emphasis chat">
          <Card.Header className="d-flex flex-between-center px-4 py-2 border-bottom">
            <h5 className="mb-0 d-flex align-items-center gap-2">
              Demo widget
              <FontAwesomeIcon icon={faCircle} className="text-success fs-11" />
            </h5>
            <RevealDropdownTrigger>
              <RevealDropdown>
                <Dropdown.Item>Request a callback</Dropdown.Item>
                <Dropdown.Item>Search in chat</Dropdown.Item>
                <Dropdown.Item>Show history</Dropdown.Item>
                <Dropdown.Item>Report to Admin</Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenChat(!isOpenChat)}>
                  Close Support
                </Dropdown.Item>
              </RevealDropdown>
            </RevealDropdownTrigger>
          </Card.Header>
          <Card.Body className="scrollbar p-3">
            <ChatWidgetConversation />
          </Card.Body>
          <Card.Footer className="border-top ps-3 pe-4 py-3">
            <ChatWidgetFooter />
          </Card.Footer>
        </Card>
      </div>
      <Button
        className={classNames(
          'p-0 border border-translucent btn-support-chat',
          {
            'btn-chat-close': isOpenChat
          }
        )}
        onClick={() => setIsOpenChat(!isOpenChat)}
      >
        <span className="fs-8 btn-text text-primary text-nowrap">
          Chat demo
        </span>
        <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
          <span className="ping-icon-bg" />
          <FontAwesomeIcon icon={faCircle} className="ping-icon" />
        </span>
        <FontAwesomeIcon
          icon={faHeadset}
          className="text-primary fs-8 d-sm-none"
        />
        <FontAwesomeIcon icon={faChevronDown} className="text-primary fs-7" />
      </Button>
    </div>
  );
};

export default ChatWidget;
