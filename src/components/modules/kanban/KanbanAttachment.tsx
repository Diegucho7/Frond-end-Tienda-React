import {
  faComment,
  faPencil,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { getFileIcon } from 'helpers/utils';
import React from 'react';

export interface FileAttachment {
  name: string;
  size: string;
  format: string;
  date?: string;
  preview?: string;
}

interface KanbanAttachmentProps {
  attachment: FileAttachment;
  type?: 'primary' | 'secondary';
  size?: 'lg' | 'xl';
  handleRemove?: () => void;
}

const KanbanAttachment = ({ attachment }: KanbanAttachmentProps) => {
  return (
    <div className="border-bottom border-translucent d-flex flex-row pb-3">
      {attachment.preview ? (
        <img
          src={attachment.preview}
          alt=""
          className="rounded-3"
          height={64}
          width={64}
        />
      ) : (
        <div
          className="border border-translucent rounded-3 flex-center d-flex"
          style={{ height: 64, width: 64 }}
        >
          <FontAwesomeIcon
            icon={getFileIcon(attachment.format)}
            className="fa-2x text-body-quaternary"
          />
        </div>
      )}
      <div className="flex-1 ms-3 d-flex flex-column">
        <h5 className="lh-sm">{attachment.name}</h5>
        <p className="lh-1 fs-9 text-body-tertiary fw-medium mb-0">
          {attachment.date}
        </p>
        <div className="d-flex gap-3 mt-auto">
          <Button className="p-0 text-body-tertiary">
            <FontAwesomeIcon icon={faComment} />
          </Button>
          <Button className="p-0 text-body-tertiary">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button className="p-0 text-body-tertiary">
            <FontAwesomeIcon icon={faPencil} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KanbanAttachment;
