import React from 'react';
import type { TripDetailsAlbum as TripDetailsAlbumProps } from 'data/travel-agency/customer/trip';
import { Col, Row } from 'react-bootstrap';
import TripDetailsMostHighlights from 'components/sliders/TripDetailsMostHighlights';
import TripDetailsAlbum from './TripDetailsAlbum';

interface TripDetailsGalleryProps {
  galleryItems: TripDetailsAlbumProps;
}
const TripDetailsGallery = ({ galleryItems }: TripDetailsGalleryProps) => {
  return (
    <Row className="g-2 g-md-3">
      <Col md={6}>
        <TripDetailsMostHighlights items={galleryItems.mostHighlightedImage} />
      </Col>
      <Col md={6}>
        <TripDetailsAlbum imageItems={galleryItems.highlightImages} />
      </Col>
    </Row>
  );
};

export default TripDetailsGallery;
