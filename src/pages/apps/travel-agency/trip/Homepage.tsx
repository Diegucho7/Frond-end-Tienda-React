import React from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import NavbarHome from 'components/navbars/travel-agency/NavbarHome';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { tripNavItems } from 'data/travel-agency/resizableNav';
import TripHomepageHeroBanner from 'components/modules/travel-agency/trip/homepage/TripHomepageHeroBanner';
import TripHomepageTripList from 'components/modules/travel-agency/trip/homepage/TripHomepageTripList';
import { tripHomepageItems } from 'data/travel-agency/customer/trip';

const TripHomepage = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <ResizableNavbar navItems={tripNavItems} />
      <section className="container-small py-0">
        <NavbarHome currentPage="Trip" />
      </section>
      <TripHomepageHeroBanner />
      <TripHomepageTripList tripItems={tripHomepageItems} />
    </>
  );
};

export default TripHomepage;
