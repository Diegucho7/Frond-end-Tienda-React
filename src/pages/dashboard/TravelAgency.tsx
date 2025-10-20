import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { TravelStatistics } from 'components/modules/travel-agency/dashboard/TravelStatistics';
import { FinancialActivities } from 'components/modules/travel-agency/dashboard/FinancialActivities';
import { HolidaysCard } from 'components/cards/HolidaysCard';
import { IntegrationsCard } from 'components/cta/IntegrationsCard';
import Bookings from 'components/modules/travel-agency/dashboard/Bookings';
import Flights from 'components/modules/travel-agency/dashboard/Flights';
import { VisitorsCard } from 'components/cards/VisitorsCard';
import GrossProfitCard from 'components/cards/GrossProfitCard';

const TravelAgency = () => {
  return (
    <>
      <Row className="mb-4 mb-xl-6 mb-xxl-4 gy-3 justify-content-between">
        <Col xs="auto">
          <h2> Travel Agency </h2>
        </Col>
        <Col xs="auto">
          <div className="d-flex gap-3">
            <Link to="#!" className="btn btn-phoenix-primary">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              New Package
            </Link>
            <Link to="#!" className="btn btn-primary px-4 px-sm-11">
              <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
              Book Now
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="gx-3">
        <Col xxl={7}>
          <Row className="gx-7 pe-xxl-3">
            <Col xs={12} xl={5} xxl={12}>
              <TravelStatistics />
            </Col>
            <Col xs={12} xl={7} xxl={12}>
              <FinancialActivities />
            </Col>
          </Row>
        </Col>
        <Col xxl={5}>
          <Row className="g-3">
            <Col xs={12} lg={6} xxl={12}>
              <VisitorsCard />
            </Col>
            <Col xs={12} lg={6} xxl={12}>
              <HolidaysCard />
            </Col>
            <Col xs={12}>
              <IntegrationsCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-3 mb-5">
        <Col xl={5} xxl={7}>
          <GrossProfitCard />
        </Col>
        <Col xl={7} xxl={5}>
          <Bookings />
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 pb-9 bg-body-emphasis border-top">
        <Flights />
      </div>
    </>
  );
};

export default TravelAgency;
