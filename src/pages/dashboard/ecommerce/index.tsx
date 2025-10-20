import { Col, Row } from 'react-bootstrap';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import EcomLatestReviewsTable from 'components/tables/EcomLatestReviewsTable';
import EcomTopRegionsMap from 'components/leaflet-maps/EcomTopRegionsMap';
import EcomStats from 'components/stats/EcomStats';
import { mapMarkerPoints } from 'data/mapMarkerPoints';
import EcomProjectionVsActual from 'components/modules/e-commerce/dashboard/EcomProjectionVsActual';
import EcomReturningCustomerRate from 'components/modules/e-commerce/dashboard/EcomReturningCustomerRate';
import EcomTotalSells from 'components/modules/e-commerce/dashboard/EcomTotalSells';
import EcomTopRegions from 'components/modules/e-commerce/dashboard/EcomTopRegions';

const Ecommerce = () => {
  return (
    <>
      <div className="pb-5">
        <Row className="g-4">
          <Col xs={12} xxl={6}>
            <div className="mb-8">
              <h2 className="mb-2">Ecommerce Dashboard</h2>
              <h5 className="text-body-tertiary fw-semibold">
                Here’s what’s going on at your business right now
              </h5>
            </div>
            <EcomStats />
            <hr className="bg-body-secondary mb-6 mt-4" />
            <EcomTotalSells />
          </Col>
          <Col xs={12} xxl={6}>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <EcomTotalOrdersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomNewCustomersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomTopCouponsCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomPayingVsNonPayingCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 border-y">
        <EcomLatestReviewsTable />
      </div>
      <Row className="gx-6">
        <Col xs={12} xl={6}>
          <EcomTopRegions />
        </Col>
        <Col xs={12} xl={6}>
          <div className="mx-n4 mx-lg-n6 ms-xl-0 h-100">
            <div className="h-100 w-100" style={{ minHeight: 300 }}>
              <EcomTopRegionsMap data={mapMarkerPoints} />
            </div>
          </div>
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-9 border-top">
        <Row className="g-6">
          <Col xs={12} xl={6}>
            <EcomProjectionVsActual />
          </Col>
          <Col xs={12} xl={6}>
            <EcomReturningCustomerRate />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Ecommerce;
