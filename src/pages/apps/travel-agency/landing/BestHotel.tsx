import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgLeft29 from 'assets/img/bg/bg-left-29.png';

import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { hotelInterFace, hotelsData } from 'data/travel-agency/landing';

const HotelDetails = (data: hotelInterFace) => {
  const { image, rating, stay, name, located, price } = data;
  return (
    <Card className="card-img-shift border-0 mx-auto">
      <div className="rounded-3 overflow-hidden w-100 position-relative z-5">
        <img src={image} alt="" className="w-100" height="250" />
        <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <Card.Body className="p-0">
        <div className="card-content">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <Badge
                variant="phoenix"
                bg={data.status.type}
                className="px-1 me-2"
              >
                {data.status.label}
              </Badge>
              <Badge variant="phoenix" bg={data.package.type} className="px-1">
                {data.package.label}
              </Badge>
            </div>
            <h6>
              <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
              {rating} ({stay}k stay)
            </h6>
          </div>

          <Link
            to="#!"
            className="fw-bold fs-7 text-body-emphasis mb-2 text-primary-hover"
          >
            {name}
          </Link>
          <Link to="#!" className="fw-semibold text-body-tertiary mb-3 d-block">
            <FeatherIcon
              icon="map-pin"
              className="me-1"
              style={{ width: 16, height: 16 }}
            />
            {located}
          </Link>
          <h6 className="fe-semibold text-body-tertiary d-flex align-items-center gap-1 mb-4">
            From
            <span className="fw-bolder fs-7 text-body-highlight">${price}</span>
            / per night
          </h6>
          <Button variant="primary" className="px-5">
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const BestHotel = () => {
  return (
    <section className="py-0">
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft29})`,
          backgroundPosition: '-15%',
          backgroundSize: 'auto'
        }}
      />
      <div className="position-relative container-medium">
        <h3 className="mb-2 text-body-emphasis text-center text-xl-start">
          The best of our hotel
        </h3>
        <div className="d-xl-flex justify-content-between mb-5 text-center">
          <p className="mb-0 text-body-tertiary">
            This list will help you get insights into how much you’ll need to
            spend to afford accommodation.
          </p>
          <Button variant="link" className="p-0 fs-8">
            View all
            <FontAwesomeIcon
              icon={faChevronRight}
              transform="shrink-3"
              className="ms-2"
            />
          </Button>
        </div>
        <Row className="g-0 justify-content-center">
          <Col sm={11} md={8} lg={6} xl={12}>
            <Row className="gy-5 gx-xl-7 justify-content-between pe-4">
              {hotelsData.map((data, index) => (
                <Col xl={4} key={index}>
                  <HotelDetails {...data} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BestHotel;
