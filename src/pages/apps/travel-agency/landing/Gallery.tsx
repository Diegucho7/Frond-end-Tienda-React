import bgLeft30 from 'assets/img/bg/bg-left-30.png';
import bgRight30 from 'assets/img/bg/bg-right-30.png';
import IsotopeNav from 'components/navs/IsotopeNav';
import { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Rating from 'components/base/Rating';
import Button from 'components/base/Button';
import { GalleryInterface, galleryItems } from 'data/travel-agency/landing';

const navItems = [
  {
    eventKey: 'tokyo',
    label: 'Tokyo'
  },
  {
    eventKey: 'bali',
    label: 'Bali'
  },
  {
    eventKey: 'sydney',
    label: 'Sydney'
  },
  {
    eventKey: 'paris',
    label: 'Paris'
  }
];

const GalleryItem = ({ galleryItem }: { galleryItem: GalleryInterface }) => {
  return (
    <Col xs={12} className="w-100">
      <div className="img-zoom-hover-lg rounded-2 overflow-hidden position-relative">
        <Link to="#!">
          <img
            className="w-100 object-fit-cover"
            height={220}
            src={galleryItem.img}
            alt=""
          />
        </Link>
        <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div className="backdrop-faded">
          <Link to="#!" className="fw-bolder fs-7 text-white streched-link">
            {galleryItem.location}
          </Link>
          <h5 className="text-light mb-0">
            {/* <FontAwesomeIcon icon={faStar} className="text-warning me-1" /> */}
            <Rating
              iconClass="me-1 fs-8 mb-1"
              initialValue={1}
              iconsCount={1}
              allowFraction={false}
            />
            {galleryItem.rating}
            <span className="fs-10">/5 </span>({galleryItem.review}k review)
          </h5>
        </div>
      </div>
    </Col>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    galleryItems[0].category
  );
  const initialgallery = galleryItems.filter(item =>
    item.category.includes(selectedCategory)
  );
  const [images, setImages] = useState(initialgallery);

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || galleryItems[0].category);
    setImages(
      galleryItems.filter(item =>
        category ? item.category.includes(category) : true
      )
    );
  };

  return (
    <section className="py-10 overflow-hidden">
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft30})`,
          backgroundPosition: 'left',
          backgroundSize: '40%',
          zIndex: '1'
        }}
      />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgRight30})`,
          backgroundPosition: 'right 25px',
          backgroundSize: '26%',
          zIndex: '1'
        }}
      />
      <div className="bg-booking-gallery" />
      <div className="container-medium position-relative z-2">
        <h3 className="mb-2 text-body-emphasis text-center">
          Popular Attractions
        </h3>
        <p className="mb-0 text-body-tertiary text-center mb-5">
          Explore the most popular and frequently visited destinations around
          the world
        </p>
        <IsotopeNav
          navItems={navItems}
          className="mb-5 justify-content-center w-max-content mx-auto"
          onSelect={handleNavItemSelect}
        />
        <div className="row g-0 justify-content-center">
          <Col md={9} lg={7} xl={5}>
            <Row className="gx-0 gy-3">
              {images.map(gallery => (
                <GalleryItem galleryItem={gallery} key={gallery.img} />
              ))}
            </Row>
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <h5 className="mb-0">Explore more popular destination</h5>
              <div className="btn-ping">
                <div className="btn-ping-bg" />
                <Button
                  variant="link"
                  className="border p-0 fs-8 d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
