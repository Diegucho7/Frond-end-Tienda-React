import {
  faClock,
  faHeart,
  faLocationDot,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import GenerateStar from 'components/common/GenerateStar';
import TextTruncate from 'components/common/TextTruncate';
import TripDetailsAvailabilityModal from 'components/modals/TripDetailsAvailabilityModal';
import { TripOverview } from 'data/travel-agency/customer/trip';
import { currencyFormat, numberFormat } from 'helpers/utils';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface TripDetailsOverviewProps {
  tripOverview: TripOverview;
}

const TripDetailsOverview = ({ tripOverview }: TripDetailsOverviewProps) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="d-flex flex-wrap align-items-center gap-3">
        <h2 className="me-3">
          {currencyFormat(tripOverview.cost)}{' '}
          <span className="fs-8 fw-semibold text-body-tertiary align-middle">
            / per person
          </span>
        </h2>
        <div className="me-3">
          <GenerateStar
            filledStars={tripOverview.totalRate}
            className="me-1 fs-9"
          />
          <span className="fw-semibold text-body-tertiary">
            ( {numberFormat(tripOverview.totalReviews, 'standard')} reviews )
          </span>
        </div>
        <h5 className="fw-semibold text-body-tertiary me-3">
          <span className="p-2 d-inline-flex bg-danger-subtle rounded-pill me-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="fs-9 text-danger-light"
              transform="down-1"
            />
          </span>
          Recommended by {numberFormat(tripOverview.recommendBy, 'standard')}{' '}
          travellers
        </h5>
        <Button
          variant="primary"
          className="ms-md-auto"
          onClick={() => setModalShow(true)}
        >
          Check availability
        </Button>
      </div>
      <div className="p-4 bg-body-highlight rounded-2 mt-3 mb-5">
        <Row className="gy-4">
          <Col md={4} lg={3} className="border-end-md">
            <h6 className="text-body fw-semibold mb-2">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" />
              {tripOverview.tripLocation}
            </h6>
            <h6 className="text-body fw-semibold mb-2">
              <FontAwesomeIcon icon={faClock} className="me-2" />
              {tripOverview.tripDuration}
            </h6>
            <h6 className="text-body fw-semibold mb-4">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              From {tripOverview.minPeoples} to {tripOverview.maxPeoples} people
            </h6>
            <div className="d-flex flex-wrap">
              {tripOverview.tripTags.map(tag => (
                <Link key={tag} to="#!" className="me-2">
                  <Badge variant="phoenix" bg="secondary">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </Col>
          <Col md={8} lg={9} className="ps-lg-7">
            <h4 className="text-body mb-3">Overview</h4>
            <p className="mb-0">
              <TextTruncate text={tripOverview.description} maxLength={313} />
            </p>
          </Col>
        </Row>
      </div>
      <TripDetailsAvailabilityModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TripDetailsOverview;
