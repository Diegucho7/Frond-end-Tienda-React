import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const MessageAttachments = ({ attachments }: { attachments: string[] }) => {
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <>
      <Lightbox {...lightboxProps} />
      <Row className="g-2 mt-0">
        {attachments.map((attachment, index) => (
          <Col
            xs={
              attachments.length === 2 ? 6 : attachments.length > 2 ? 4 : 'auto'
            }
            key={attachment}
          >
            <img
              src={attachment}
              alt=""
              className="rounded-2 cursor-pointer img-fluid"
              onClick={() => {
                openLightbox(index + 1);
              }}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MessageAttachments;
