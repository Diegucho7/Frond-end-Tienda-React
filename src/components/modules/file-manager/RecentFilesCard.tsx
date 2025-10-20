import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Collapse, Row } from 'react-bootstrap';
import Badge from 'components/base/Badge';
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import FilesDropdown from './FilesDropdown';
import { RecentFiles, recentFiles } from 'data/file-manager';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useFileManagerContext } from 'providers/FileManagerProvider';

const RecentFilesCardItem = ({
  file,
  openLightbox
}: {
  file: RecentFiles;
  openLightbox: (index: number) => void;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Col sm={6} xxl={3}>
      <div
        className="position-relative"
        {...(file.type === 'video' && {
          onMouseEnter: () => setIsPlaying(true),
          onMouseLeave: () => setIsPlaying(false)
        })}
      >
        <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
          <div className="position-relative">
            <div className="mask-image-recent-file overflow-hidden">
              <div className="ratio ratio-16x9">
                {(file.type === 'image' || file.type === 'pdf') && (
                  <img
                    src={file.img}
                    alt=""
                    className="w-100 h-100 object-fit-cover"
                  />
                )}
                {file.type === 'video' && (
                  <>
                    <video
                      className="video d-block h-100 w-100 object-fit-cover"
                      loop
                      muted
                      src={file.video}
                      ref={videoRef}
                      poster={file.thumb}
                    />
                    <Button
                      data-bs-theme="light"
                      className="p-0 circle-icon-item-md position-absolute top-50 start-50 translate-middle bg-body-emphasis bg-opacity-50 z-5"
                      onClick={handlePlayPause}
                    >
                      <span className="play-icon pointer-events-none">
                        {!isPlaying ? (
                          <FontAwesomeIcon
                            icon={faPlay}
                            className="text-body-secondary fs-9"
                            transform="down-1"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faPause}
                            className="text-body-secondary fs-9"
                            transform="down-1"
                          />
                        )}
                      </span>
                    </Button>
                  </>
                )}
              </div>
              <Badge
                bg={file.actionType === 'Edited' ? 'warning' : 'info'}
                variant="phoenix"
                className="fs-10 position-absolute top-0 start-0 mt-3 ms-3"
              >
                {file.actionType} {file.createdAt}
              </Badge>
            </div>
          </div>
          <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
            <div className="w-75">
              <Link
                to="#!"
                className="stretched-link text-body-highlight fw-bold mb-2 d-block text-truncate"
                onClick={() => openLightbox(file.fileNo)}
              >
                {file.name}
              </Link>
              <h6 className="mb-0 fw-semibold text-body-tertiary">
                {file.size}
              </h6>
            </div>
            <FilesDropdown toggleClass="mt-n1" />
          </div>
        </div>
      </div>
    </Col>
  );
};

const RecentFilesCard = () => {
  const table = useAdvanceTableContext<File>();
  const { setCheckedFileIds } = useFileManagerContext();
  const attachments = recentFiles.map(file => {
    if (file.type === 'pdf' && file.pdf) {
      return (
        <iframe
          key={file.name}
          src={file.pdf}
          title="PDF Viewer"
          width="1900px"
          height="1920px"
        />
      );
    }
    if (file.type === 'video' && file.video) {
      return file.video;
    }
    if (file.type === 'image' && file.img) {
      return file.img;
    }
    return '';
  });

  const { lightboxProps, openLightbox } = useLightbox([...attachments]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setCheckedFileIds([]);
    table.setRowSelection({});
  }, [table.getState().globalFilter]);

  return (
    <>
      {table.getState().globalFilter === undefined && (
        <Card className="mt-4">
          <Lightbox {...lightboxProps} />
          <Card.Body className="pb-5">
            <h4 className="mb-3">Recent Files</h4>
            <Row className="g-3">
              {recentFiles.slice(0, 4).map((file, index) => (
                <RecentFilesCardItem
                  key={index}
                  file={file}
                  openLightbox={openLightbox}
                />
              ))}
            </Row>
            <Collapse in={!isCollapsed}>
              <div className="mt-3">
                <Row className="g-3">
                  {recentFiles.slice(4, 8).map((file, index) => (
                    <RecentFilesCardItem
                      key={index}
                      file={file}
                      openLightbox={openLightbox}
                    />
                  ))}
                </Row>
              </div>
            </Collapse>
            <Button
              variant="phoenix-secondary"
              className="btn collapse-indicator bg-body-emphasis fs-10 py-1 border rounded-1 px-3 position-absolute start-50 translate-middle-x"
              style={{ bottom: '-11px' }}
              role="button"
              onClick={toggleCollapse}
            >
              <span className={isCollapsed ? 'collapse-show' : 'collapse-hide'}>
                {isCollapsed ? 'VIEW MORE' : 'VIEW LESS'}
              </span>
              <FontAwesomeIcon
                icon={isCollapsed ? faChevronDown : faChevronUp}
                className="toggle-icon fs-10 ms-2"
              />
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default RecentFilesCard;
