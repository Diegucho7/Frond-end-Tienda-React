import React from 'react';
import { Link } from 'react-router';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import {
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import { hotelImages } from 'data/travel-agency/customer/hotelDetails';
import HotelDetailsTab from 'components/modules/travel-agency/hotel/hotel-details/HotelDetailsTab';
import HotelDetailsGallery from 'components/image-gallery/HotelDetailsGallery';
import { numberFormat } from 'helpers/utils';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

const HotelDetails = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-4 pb-9">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-4">Hotel Details</h2>
          <Row className="g-4 flex-between-end mb-5">
            <Col md={8} lg={9}>
              <h1 className="mb-2 fw-semibold">
                Radisson Blu Water Garden Hotel, Dhaka
              </h1>
              <div className="mb-1">
                <Link className="text-body-tertiary" to="#!">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="me-2 text-body"
                  />
                  Airport Rd, Dhaka Cantonment, Dhaka, 1206, Bangladesh
                </Link>
              </div>
              <div className="mb-1">
                <Link className="text-body-tertiary" to="tel:+88029834555">
                  <FontAwesomeIcon icon={faPhone} className="me-2 text-body" />
                  +880 29834555
                </Link>
              </div>
              <div className="mb-1">
                <Link
                  className="text-body-tertiary"
                  to="mailto:sales.dhaka@radisson.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2 text-body"
                    transform="down-1"
                  />
                  sales.dhaka@radisson.com
                </Link>
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="d-flex flex-md-column align-items-center align-items-md-end gap-3">
                <h5 className="mb-0 text-nowrap">
                  <span className="text-body-tertiary me-2 fw-normal">
                    Rated
                  </span>
                  <span className="text-primary me-2">Good</span>
                  <Badge bg="primary">
                    {numberFormat(4.3, 'standard', {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1
                    })}
                  </Badge>
                </h5>
                <Button
                  variant="phoenix-primary"
                  className="px-5 px-lg-8 w-100 w-md-auto"
                  startIcon={<FontAwesomeIcon icon={faMap} className="me-2" />}
                >
                  Show in map
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            <Col xl={8}>
              <HotelDetailsGallery images={hotelImages} />
              <HotelDetailsTab />
            </Col>
            <Col xl={4}>
              <HotelDetailsSummaryCard
                showHotelInfo={false}
                className="mt-3 mt-xl-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelDetails;
