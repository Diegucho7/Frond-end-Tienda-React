import Avatar from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { suggestions } from 'data/chat';
import Button from 'components/base/Button';
import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import Message from 'components/modules/chat/message';
import { useEffect, useRef } from 'react';

const ChatWidgetConversation = () => {
  const { conversation, sentMessage } = useChatWidgetContext();
  const messageEndRef = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [conversation]);
  return (
    <>
      <div className="text-center mt-auto">
        <Avatar
          src={conversation.user.avatar}
          size="3xl"
          status="online"
          className="mx-auto"
        />
        <h5 className="mt-2 mb-3">Eric</h5>
        <p className="text-center text-body-emphasis mb-0">
          Ask us anything – we’ll get back to you here or by email within 24
          hours.
        </p>
      </div>
      {!conversation.messages.length && (
        <div className="text-end mt-6">
          {suggestions.map((message, index) => (
            <Button
              key={message}
              onClick={() => sentMessage({ message })}
              className={classNames(
                'd-inline-flex align-items-center text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3 lh-base',
                { 'mb-2': index !== suggestions.length - 1 }
              )}
            >
              <p className="mb-0 fw-semibold fs-9">{message}</p>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-primary fs-9 ms-3"
              />
            </Button>
          ))}
        </div>
      )}
      {conversation.messages.length > 0 && (
        <>
          <hr className="my-4 border-dashed border-top" />
          <div className="d-flex flex-column gap-2">
            {conversation.messages.map(message => (
              <Message
                message={message}
                user={conversation.user}
                key={message.id}
                showActions={false}
              />
            ))}
            <span ref={messageEndRef} />
          </div>
        </>
      )}
    </>
  );
};

export default ChatWidgetConversation;
