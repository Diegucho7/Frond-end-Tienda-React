import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import EmojiPicker from 'components/base/EmojiPicker';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useState } from 'react';

const emojiButtonCode = `
import Button from 'components/base/Button';
import EmojiPicker from 'components/base/EmojiPicker';

function EmojiButtonExample() {
  const [message, setMessage] = useState('')
  return (
    <EmojiPicker
      onSelect={selection => {
        setMessage(message + selection.emoji);
      }}
    >
      <Button
        variant="primary"
        className="fs-7"
      >
        <FontAwesomeIcon icon={faFaceSmile} />
      </Button>
    </EmojiPicker>
  )
}
`;

const EmojiButtonExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Emoji button"
        description={`${
          import.meta.env.VITE_TITLE
        }-React uses Picmo as a emoji picker component. It displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you.`}
        link={{
          text: 'Documentation for Picmo',
          url: 'https://picmojs.com/docs/api/overview/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={emojiButtonCode}
            scope={{
              EmojiPicker,
              Button,
              FontAwesomeIcon,
              useState,
              faFaceSmile
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default EmojiButtonExample;
