import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faFileWord,
  faFileExcel,
  faFileInvoice,
  faFileZipper,
  faFilePdf,
  faFileCsv
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { File } from 'data/file-manager';

const RenderFileIcon = ({ file }: { file: File }) => {
  switch (file.type) {
    case 'folder':
      return (
        <FontAwesomeIcon
          icon={faFolder}
          className={classNames('fs-1', file.id === 3 ? 'text-info-light' : '')}
        />
      );
    case 'doc':
      return <FontAwesomeIcon icon={faFileWord} className="fs-1 mb-3" />;
    case 'xls':
    case 'xlx':
      return <FontAwesomeIcon icon={faFileExcel} className="fs-1 mb-3" />;
    case 'source-code':
    case 'html':
      return <FontAwesomeIcon icon={faFileInvoice} className="fs-1 mb-3" />;
    case 'zip':
      return <FontAwesomeIcon icon={faFileZipper} className="fs-1 mb-3" />;
    case 'pdf':
      return <FontAwesomeIcon icon={faFilePdf} className="fs-1 mb-3" />;
    case 'csv':
      return <FontAwesomeIcon icon={faFileCsv} className="fs-1 mb-3" />;
    case 'image':
      return (
        <img
          className="w-100 h-100 object-fit-cover rounded-2 mb-3"
          src={file.img}
          alt=""
          style={{ aspectRatio: '16/9' }}
        />
      );
    case 'video':
      return (
        <video
          className="d-block h-100 w-100 overflow-hidden rounded-2 object-fit-cover mb-3"
          muted
          controls
          style={{ aspectRatio: '16/9' }}
        >
          <source src={file.video} type="video/mp4" />
        </video>
      );
    default:
      return null;
  }
};

export default RenderFileIcon;
