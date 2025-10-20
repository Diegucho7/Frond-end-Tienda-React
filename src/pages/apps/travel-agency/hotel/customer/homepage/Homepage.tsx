import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMap } from '@fortawesome/free-solid-svg-icons';
import HotelCard from 'components/cards/HotelCard';
import { hotels } from 'data/travel-agency/customer/hotel';
import NavbarHome from 'components/navbars/travel-agency/NavbarHome';
import HotelActions from 'components/modules/travel-agency/hotel/HotelActions';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';
import HomepageFilterOffcanvas from 'components/modules/travel-agency/hotel/HomepageFilterOffcanvas';

const HotelHomepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="container-small py-0">
        <NavbarHome currentPage="Hotel" />
      </section>
      <HotelActions background={true} />
      <section className="container-medium py-0">
        <div className="py-6">
          <div className="d-flex">
            <Form.Select className="w-sm-auto me-4">
              <option>Sort by</option>
              <option>Best reviewed and lowest price</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Form.Select>
            <Button
              variant="phoenix-secondary"
              className="text-nowrap px-3 px-md-4 ms-auto me-2"
            >
              <FontAwesomeIcon icon={faMap} className="me-md-2" />
              <span className="d-none d-md-inline-block">Show in map</span>
            </Button>
            <Button
              variant="phoenix-secondary"
              className="text-nowrap px-3"
              onClick={() => setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faFilter} className="me-md-2" />
              <span className="d-none d-md-inline-block">Filters</span>
            </Button>
          </div>
        </div>
        <Row className="g-3 mb-6">
          {hotels.map((hotelInfo, index) => (
            <Col key={index} sm={6} lg={4} xl={3}>
              <HotelCard hotelInfo={hotelInfo} />
            </Col>
          ))}
        </Row>
      </section>
      <TravelFooter />
      <HomepageFilterOffcanvas isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HotelHomepage;
