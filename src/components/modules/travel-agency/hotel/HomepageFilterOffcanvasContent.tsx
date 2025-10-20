import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import React, { Fragment, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { homepageOffcanvasAmenitiesItems } from 'data/travel-agency/customer/hotel';
import classNames from 'classnames';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import GenerateStar from 'components/common/GenerateStar';
import InputGroupCounter from 'components/common/InputGroupCounter';

const HomepageFilterOffcanvasContent = () => {
  const [range, setRange] = useState([110, 200]);
  return (
    <>
      <h4 className="text-body-highlight mb-4">Price Range</h4>
      <Row className="g-2">
        <Col xs={6}>
          <div className="form-icon-container">
            <Form.Control
              type="text-"
              placeholder="Minimum amount $100"
              className="form-icon-input"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="fs-9 form-icon text-body-tertiary"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div className="form-icon-container">
            <Form.Control
              type="text-"
              placeholder="Maximum amount $245"
              className="form-icon-input"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="fs-9 form-icon text-body-tertiary"
            />
          </div>
        </Col>
      </Row>
      <PhoenixReactRange
        min={100}
        max={245}
        values={range}
        onChange={val => setRange(val)}
        trackHeight="1.5rem"
        variant="primary-lighter"
        classNames="phoenix-react-range-large mt-3 ps-5 pe-3"
      />
      <hr className="my-5" />
      <h4 className="text-body-highlight mb-4">Amenities</h4>
      {homepageOffcanvasAmenitiesItems.map(amenity => (
        <Fragment key={amenity.id}>
          <p className={classNames(amenity.className, 'text-body-tertiary')}>
            {amenity.title}
          </p>
          <Row className="g-3">
            <Col xs={6}>
              {amenity.checkboxItems
                .slice(0, Math.ceil(amenity.checkboxItems.length / 2))
                .map(item => (
                  <Form.Check key={item.id}>
                    <Form.Check.Input
                      type="checkbox"
                      id={item.id}
                      name={item.label}
                    />
                    <Form.Check.Label className="fs-8 text-body-highlight fw-normal">
                      {item.label}
                    </Form.Check.Label>
                  </Form.Check>
                ))}
            </Col>
            <Col xs={6}>
              {amenity.checkboxItems
                .slice(Math.ceil(amenity.checkboxItems.length / 2))
                .map(item => (
                  <Form.Check key={item.id}>
                    <Form.Check.Input
                      type="checkbox"
                      id={item.id}
                      name={item.label}
                    />
                    <Form.Check.Label className="fs-8 text-body-highlight fw-normal">
                      {item.label}
                    </Form.Check.Label>
                  </Form.Check>
                ))}
            </Col>
          </Row>
        </Fragment>
      ))}
      <Link to={'#!'} className="fw-bold fs-9 mt-3 d-inline-block">
        Show more items
      </Link>
      <hr className="my-5" />
      <h4 className="mb-4 text-body-highlight">Number of Private Bathrooms</h4>
      <InputGroupCounter
        id="privateBathrooms"
        inputGap="gap-2 w-70 w-sm-50"
        buttonClasses="px-3 rounded"
        iconClasses=""
      />

      <h4 className="mb-4 mt-5 text-body-highlight">Number of Bedrooms</h4>
      <InputGroupCounter
        id="bedRooms"
        inputGap="gap-2 w-70 w-sm-50"
        buttonClasses="px-3 rounded"
        iconClasses=""
      />

      <h4 className="mb-4 mt-5 text-body-highlight">Number of Beds</h4>
      <InputGroupCounter
        id="beds"
        inputGap="gap-2 w-70 w-sm-50"
        buttonClasses="px-3 rounded"
        iconClasses=""
      />
      <hr className="my-5" />
      <h4 className="text-body-highlight mb-4">Rating</h4>
      {Array.from([5, 4, 3, 2, 1]).map((stars, index) => (
        <div key={stars}>
          <Form.Check type="radio" className="px-0">
            <Form.Check.Input
              type="radio"
              className="rating-radio btn-check"
              name="ratingOption"
              defaultValue={`${stars}-stars`}
              defaultChecked={index === 0}
              id={`option${stars}`}
            />
            <Form.Check.Label
              htmlFor={`option${stars}`}
              className="btn w-100 d-flex align-items-center gap-1"
            >
              <GenerateStar filledStars={stars} />
              {stars < 5 && (
                <span className="text-body ms-1 fs-8 fw-normal">and above</span>
              )}
            </Form.Check.Label>
          </Form.Check>
        </div>
      ))}
      <div className="mt-4 pt-4 border-top border-translucent d-flex gap-2">
        <Button variant="phoenix-primary" size="lg">
          Reset
        </Button>
        <Button variant="primary" size="lg" className="flex-1">
          Show 445 items
        </Button>
      </div>
    </>
  );
};

export default HomepageFilterOffcanvasContent;
