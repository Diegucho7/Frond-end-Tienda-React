import classNames from 'classnames';
import FileListItem from 'components/modules/project-management/todo-list/FileListItem';
import { Attachment } from 'data/project-management/todoListData';
import React from 'react';

const DealDetailsAttachments = ({
  attachments
}: {
  attachments: Attachment[];
}) => {
  return (
    <>
      <h2 className="mb-4">Attachments</h2>
      <div>
        {attachments.map((attachment, index) => (
          <FileListItem
            key={attachment.name}
            attachment={attachment}
            className={classNames('border-dashed border-translucent', {
              'border-top': index === 0,
              'border-bottom-0': index === attachments.length - 1
            })}
          />
        ))}
      </div>
    </>
  );
};

export default DealDetailsAttachments;
