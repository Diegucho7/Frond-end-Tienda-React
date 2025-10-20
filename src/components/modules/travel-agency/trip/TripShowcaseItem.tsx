import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { numberFormat } from 'helpers/utils';
import { TripHomepageItems } from 'data/travel-agency/customer/trip';

interface TripShowcaseItemProps {
  showcaseItem: TripHomepageItems;
}

const TripShowcaseItem = ({ showcaseItem }: TripShowcaseItemProps) => {
  return (
    <Col md={6} xl={4}>
      <div className="hoverbox rounded">
        <Link to="/apps/travel-agency/trip/trip-details">
          <img src={showcaseItem.image} alt="" className="img-fluid" />
          <div className="backdrop-faded">
            <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2 pt-4">
              {showcaseItem.title}
            </h3>
            <h5 className="text-secondary-lighter fw-normal mb-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-primary me-2"
              />
              {showcaseItem.location}
            </h5>
            <div className="d-sm-flex d-md-block d-lg-flex flex-between-center pb-4">
              <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
                $ {numberFormat(showcaseItem.price)}
              </h3>
              <div className="d-flex gap-3">
                <h5 className="text-secondary-lighter fw-normal">
                  <FontAwesomeIcon icon={faClock} className="fs-9 me-2" />
                  {showcaseItem.days} days
                </h5>
                <h5 className="text-secondary-lighter fw-normal">
                  <FontAwesomeIcon icon={faUser} className="fs-9 me-2" />
                  From 1 to people
                </h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default TripShowcaseItem;
