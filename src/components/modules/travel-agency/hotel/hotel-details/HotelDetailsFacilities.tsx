import React, { Fragment } from 'react';
import type {
  Facility,
  Charge
} from 'data/travel-agency/customer/hotelDetails';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface HotelDetailsFacilitiesProps {
  facilities: Facility[];
  charges: Charge[];
}

interface CategoryListProps {
  category: Charge;
  index: number;
}

const CategoryLists = ({ category, index }: CategoryListProps) => {
  return (
    <Fragment>
      <h5 className="mb-3">
        <FontAwesomeIcon icon={category.icon} className="fs-9 me-2" />
        {category.title}
      </h5>
      {category.desc && (
        <p className="mb-2 fs-9 text-body-tertiary">{category.desc}</p>
      )}
      <ul
        className={classNames('list-unstyled text-body-highlight', {
          'mb-5': index !== 4,
          'mb-sm-0': index === 4
        })}
      >
        {category.items.map((item, idx) => (
          <li key={idx}>
            <FontAwesomeIcon
              icon={faCheck}
              className="fs-9 text-success me-2"
            />
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const HotelDetailsFacilities = ({
  facilities,
  charges
}: HotelDetailsFacilitiesProps) => {
  return (
    <>
      <h3 className="mb-5 fw-bold">Facilities</h3>
      <h5 className="mb-3">Most popular</h5>
      <Row className="g-0">
        {facilities.map(facility => (
          <Col key={facility.id} sm={6} md={4}>
            <div
              className={classNames(
                'd-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent',
                facility.classes
              )}
            >
              <FontAwesomeIcon
                icon={facility.icon}
                className="fs-9 text-warning"
                transform="down-1"
              />
              <h5 className="text-body-tertiary mb-0 fw-normal">
                {facility.title}
              </h5>
            </div>
          </Col>
        ))}
      </Row>
      <h6 className="text-warning text-uppercase fw-normal my-5">
        <span className="me-2">*</span>
        additional charges
      </h6>
      <Row className="g-3">
        <Col xs="auto" md={4}>
          {charges.slice(0, 5).map((category, index) => (
            <CategoryLists key={index} category={category} index={index} />
          ))}
        </Col>
        <Col xs={6} md={4}>
          {charges.slice(5, 10).map((category, index) => (
            <CategoryLists key={index} category={category} index={index} />
          ))}
        </Col>
        <Col xs="auto" md={4}>
          {charges.slice(10).map((category, index) => (
            <CategoryLists key={index} category={category} index={index} />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default HotelDetailsFacilities;
