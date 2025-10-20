import React from 'react';
import { File } from 'data/file-manager';
import FileBox from './FileBox';

interface fileGroup {
  title: string;
  data: File[];
}

const GridGroupView = ({ data }: { data: File[] }) => {
  const fileTypes = ['folder', 'image', 'video', 'doc', 'zip', 'csv', 'xlx'];
  const folder = data.filter(file => file.type === 'folder');
  const images = data.filter(file => file.type === 'image');
  const videos = data.filter(file => file.type === 'video');
  const files = data.filter(file =>
    ['doc', 'zip', 'csc', 'xlx'].includes(file.type)
  );
  const others = data.filter(
    file => !fileTypes.some(type => file.type.includes(type))
  );
  const fileGroups: fileGroup[] = [
    {
      title: 'Folder',
      data: folder
    },
    {
      title: 'Images',
      data: images
    },
    {
      title: 'Videos',
      data: videos
    },
    {
      title: 'Files',
      data: files
    },
    {
      title: 'Others',
      data: others
    }
  ];

  return (
    <>
      {fileGroups.map(
        (fileGroup, index) =>
          fileGroup.data.length > 0 && (
            <React.Fragment key={fileGroup.title}>
              <h4 className="mb-3">{fileGroup.title}</h4>
              <div className="files-container mb-3">
                {fileGroup.data.map(file => (
                  <FileBox file={file} key={file.id} />
                ))}
              </div>
              {index < fileGroups.length - 1 && <hr className="my-5" />}
            </React.Fragment>
          )
      )}
    </>
  );
};

export default GridGroupView;
