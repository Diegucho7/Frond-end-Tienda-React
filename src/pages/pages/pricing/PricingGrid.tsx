import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingPackageList from 'components/list-items/PricingPackageList';
import PricingGridItem from 'components/pricing-items/PricingGridItem';
import {
  pricingBreadcrumbItems,
  pricingGridFeatures,
  pricingGridItems
} from 'data/pricing';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

const PricingGrid = () => {
  return (
    <div className="mb-9">
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-7">Pricing</h2>
      <Row>
        <Col xl={12} xxl={9} className="mb-1">
          <Tab.Container defaultActiveKey="monthly">
            <Nav variant="underline" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="yearly">Yearly</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="monthly">Monthly</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="yearly">
                <Row className="g-3">
                  {pricingGridItems.map(item => (
                    <Col key={item.id} md={6} lg={12} xl={6}>
                      <PricingGridItem item={item} pricingType="yearly" />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="monthly">
                <Row className="g-3">
                  {pricingGridItems.map(item => (
                    <Col key={item.id} md={6} lg={12} xl={6}>
                      <PricingGridItem item={item} pricingType="monthly" />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <div>
            <p className="mb-0 mt-7">
              Business Starter, Business Standard, and Business Plus plans can
              be purchased for a maximum of 300 users. There is no{' '}
              <br className="d-none d-xl-block d-xxl-none" />
              maximum user limit for Enterprise plans.
            </p>
            <p className="fw-semibold">
              Phoenix customers may have access to additional features for a
              limited <br className="d-none d-sm-block d-lg-none" />
              promotional period.
            </p>
            <div className="d-grid d-sm-flex">
              <Button
                variant="primary"
                size="lg"
                className="mb-3 mb-sm-0 me-sm-3 px-sm-8"
                endIcon={
                  <FontAwesomeIcon icon={faAngleRight} transform="down-2" />
                }
              >
                Subscribe Now
              </Button>
              <Button variant="outline-primary" size="lg" className="px-sm-7">
                Start 7 days free Trial
              </Button>
            </div>
          </div>
        </Col>
        <Col xxl={3} className="mt-8">
          <h3 className="fw-semibold mb-3">Included in our all packages</h3>
          <PricingPackageList features={pricingGridFeatures} />
        </Col>
      </Row>
    </div>
  );
};

export default PricingGrid;
