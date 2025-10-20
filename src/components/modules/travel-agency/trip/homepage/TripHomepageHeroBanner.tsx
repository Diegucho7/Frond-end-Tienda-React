import React, { Fragment, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'components/base/Button';
import bgIllustrations from 'assets/img/bg/46.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { homepageFilterCheckboxItems } from 'data/travel-agency/customer/trip';
import TripHomepageFilterOffcanvas from './TripHomepageFilterOffcanvas';

const TripHomepageHeroBanner = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <>
      <section className="p-0">
        <div
          className="bg-holder overlay bg-opacity-50"
          style={{
            backgroundImage: `url(${bgIllustrations})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Container fluid="medium" className="position-relative pt-11 pb-15">
          <h2 className="text-center text-white mb-4">
            Where do you want to go?
          </h2>
          <div className="position-relative w-md-70 w-lg-50 mx-auto mb-4 mb-lg-10">
            <Form.Control
              type="text"
              placeholder="Search for a location"
              className="py-3 ps-4 pe-6 rounded-pill fs-8"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="position-absolute top-0 end-0 mt-4 me-4 fs-8 text-body-tertiary"
              transform="up-3"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-none d-lg-flex gap-2">
              {homepageFilterCheckboxItems.categories.map((category, index) => (
                <Fragment key={category.id}>
                  <Form.Check.Input
                    type="checkbox"
                    name="trip-type"
                    id={category.id}
                    className="btn-check trip-filter-checkbox"
                    defaultChecked={index === 0}
                  />
                  <Form.Check.Label
                    htmlFor={category.id}
                    className="btn btn-phoenix-secondary fw-bold text-nowrap px-3"
                  >
                    {category.label}
                  </Form.Check.Label>
                </Fragment>
              ))}
            </div>
            <Button
              variant="phoenix-secondary"
              className="ms-lg-auto"
              onClick={() => setIsOffCanvasOpen(true)}
            >
              <FontAwesomeIcon icon={faFilter} className="fs-10 me-2" />
              Filter
            </Button>
          </div>
        </Container>
      </section>
      <TripHomepageFilterOffcanvas
        show={isOffCanvasOpen}
        onHide={() => setIsOffCanvasOpen(false)}
      />
    </>
  );
};

export default TripHomepageHeroBanner;
