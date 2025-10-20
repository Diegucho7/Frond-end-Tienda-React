import { FileAttachment } from 'components/common/AttachmentPreview';
import { supportChat, Message as MessageType, Conversation } from 'data/chat';
import dayjs from 'dayjs';
import {
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  use
} from 'react';

interface ChatWidgetProps {
  isOpenChat: boolean;
  conversation: Conversation;
  setConversation: Dispatch<SetStateAction<Conversation>>;
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
  sentMessage: ({
    message,
    attachments
  }: {
    message?: string;
    attachments?: { images?: string[]; file?: FileAttachment };
  }) => void;
}

export const ChatWidgetContext = createContext({} as ChatWidgetProps);

const ChatWidgetProvider = ({ children }: PropsWithChildren) => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [conversation, setConversation] = useState(supportChat);

  const sentMessage = useCallback(
    ({
      message,
      attachments
    }: {
      message?: string;
      attachments?: { images?: string[]; file?: FileAttachment };
    }) => {
      const newMessages = [
        ...conversation.messages,
        {
          id: Date.now(),
          type: 'sent',
          time: dayjs().toNow(),
          readAt: null,
          message,
          attachments
        } as MessageType
      ];
      const newConversation = { ...conversation, messages: newMessages };
      setConversation(newConversation);
    },
    [conversation]
  );

  return (
    <ChatWidgetContext
      value={{
        conversation,
        setConversation,
        isOpenChat,
        setIsOpenChat,
        sentMessage
      }}
    >
      {children}
    </ChatWidgetContext>
  );
};

export const useChatWidgetContext = () => use(ChatWidgetContext);

export default ChatWidgetProvider;
