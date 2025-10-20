import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { ChangeEvent, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import EmojiPicker from 'components/base/EmojiPicker';
import { useChatContext } from 'providers/ChatProvider';
import ReactTextareaAutosize from 'react-textarea-autosize';
import AttachmentPreview from 'components/common/AttachmentPreview';
import { convertFileToAttachment } from 'helpers/utils';
import ImageAttachmentPreview from 'components/common/ImageAttachmentPreview';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsis,
  faImage,
  faMicrophone,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { SENT_MESSAGE } from 'reducers/ChatReducer';

const ChatContentFooter = () => {
  const { currentConversation, chatDispatch } = useChatContext();

  const [messageText, setMessageText] = useState('');
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [imageAttachments, setImageAttachments] = useState<File[]>([]);

  const sentMessage = () => {
    if (
      currentConversation &&
      (messageText || fileAttachment || imageAttachments.length > 0)
    ) {
      chatDispatch({
        type: SENT_MESSAGE,
        payload: {
          conversationId: currentConversation.id,
          message: messageText,
          attachments: {
            images: imageAttachments.map(imageAttachment =>
              URL.createObjectURL(imageAttachment)
            ),
            file: fileAttachment
              ? convertFileToAttachment(fileAttachment)
              : undefined
          }
        }
      });
      setMessageText('');
      setImageAttachments([]);
      setFileAttachment(null);
    }
  };

  return (
    <Card.Footer>
      <ReactTextareaAutosize
        minRows={1}
        maxRows={6}
        value={messageText}
        placeholder="Type your message..."
        onChange={({ target: { value } }) => setMessageText(value)}
        className="chat-textarea form-control outline-none border-0 scrollbar resize-none mb-1 p-0 fs-8 fw-normal"
      />

      {fileAttachment && (
        <div className="mb-2">
          <AttachmentPreview
            attachment={convertFileToAttachment(fileAttachment)}
            size="xl"
            handleRemove={() => setFileAttachment(null)}
          />
        </div>
      )}

      {imageAttachments && (
        <div className="mb-2 d-flex gap-2">
          {imageAttachments.map((attachment, index) => (
            <ImageAttachmentPreview
              key={index}
              image={URL.createObjectURL(attachment)}
              handleClose={() => {
                setImageAttachments(
                  imageAttachments.filter((_, i) => index !== i)
                );
              }}
            />
          ))}
        </div>
      )}

      <div className="d-flex gap-3 align-items-center">
        <EmojiPicker
          onSelect={selection => {
            setMessageText(messageText => messageText + selection.emoji);
          }}
        >
          <Button variant="link" className="p-0 text-body fs-9 btn-emoji">
            <FontAwesomeIcon icon={faFaceSmile} />
          </Button>
        </EmojiPicker>
        <div>
          <Button className="p-0">
            <label className="text-body fs-9 cursor-pointer" htmlFor="images">
              <FontAwesomeIcon icon={faImage} />
            </label>
          </Button>
          <Form.Control
            className="d-none"
            type="file"
            accept="image/*"
            id="images"
            multiple
            onChange={({ target: { files } }: ChangeEvent<HTMLInputElement>) =>
              files && setImageAttachments(Array.from(files))
            }
          />
        </div>
        <div>
          <Button className="p-0">
            <label
              className="text-body fs-9 cursor-pointer"
              htmlFor="attachments"
            >
              <FontAwesomeIcon icon={faPaperclip} />
            </label>
          </Button>
          <Form.Control
            className="d-none"
            type="file"
            id="attachments"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar"
            onChange={({
              target: { files }
            }: ChangeEvent<HTMLInputElement>) => {
              files && setFileAttachment(files[0]);
            }}
          />
        </div>

        <Button className="p-0 text-body fs-9">
          <FontAwesomeIcon icon={faMicrophone} />
        </Button>
        <Button className="p-0 text-body fs-9">
          <FontAwesomeIcon icon={faEllipsis} />
        </Button>

        <Button
          variant="primary"
          endIcon={<FontAwesomeIcon icon={faPaperPlane} className="ms-2" />}
          className="ms-auto"
          type="submit"
          onClick={sentMessage}
        >
          Send
        </Button>
      </div>
    </Card.Footer>
  );
};

export default ChatContentFooter;
