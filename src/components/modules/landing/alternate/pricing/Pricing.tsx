import { pricingItemsAlternate } from 'data/landing/pricingData';
import { Col, Row } from 'react-bootstrap';
import PricingItem from './PricingItem';
import PricingOffer from './PricingOffer';

const Pricing = () => {
  return (
    <section className="position-static pt-15 pt-md-5 pt-lg-2">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-3 mb-lg-7">
          <h5 className="text-info mb-3">Pricing</h5>
          <h2 className="mb-2">Choose the best deal for you</h2>
        </div>
        <Row className="g-3 mb-7 mb-lg-11">
          {pricingItemsAlternate.map(pricing => (
            <Col lg={4} key={pricing.id}>
              <PricingItem pricing={pricing} />
            </Col>
          ))}
        </Row>
        <PricingOffer />
      </div>
    </section>
  );
};

export default Pricing;
