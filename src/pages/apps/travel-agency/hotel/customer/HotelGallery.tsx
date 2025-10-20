import React from 'react';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import HotelGalleryImages from 'components/modules/travel-agency/hotel/HotelGalleryImages';
import { galleryItems } from 'data/travel-agency/customer/gallery';
import { Container } from 'react-bootstrap';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

const HotelGallery = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-6 pb-9">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-5">Gallery</h2>
          <HotelGalleryImages galleryItems={galleryItems} />
        </Container>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelGallery;
