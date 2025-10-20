import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Lightbox from 'components/base/LightBox';
import Portal from 'components/base/Portal';
import { attachments } from 'data/chat';
import useLightbox from 'hooks/useLightbox';
import { Col, Row } from 'react-bootstrap';

const SharedMedia = () => {
  const { lightboxProps, openLightbox } = useLightbox(
    attachments.map(attachment => attachment.image)
  );

  return (
    <div className="d-flex gap-3 my-3">
      <FontAwesomeIcon icon={faPhotoFilm} className="fs-9" />
      <div>
        <h6 className="fw-semibold mb-2">Shared Media</h6>
        <Row className="g-2">
          {attachments.map((attachment, index) => (
            <Col xs="auto" key={attachment.image}>
              <Button className="p-0" onClick={() => openLightbox(index + 1)}>
                <img
                  src={attachment.image}
                  alt=""
                  height={100}
                  width={100}
                  className="fit-cover rounded-2 bg-body-secondary-hover"
                />
              </Button>
            </Col>
          ))}
        </Row>
        <Portal>
          <Lightbox {...lightboxProps} />
        </Portal>
      </div>
    </div>
  );
};

export default SharedMedia;
