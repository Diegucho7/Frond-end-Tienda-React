import { Card } from 'react-bootstrap';
import plane from 'assets/img/spot-illustrations/air-plane.png';
import planeDark from 'assets/img/spot-illustrations/air-plane-dark.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PricingOffer = () => {
  return (
    <Card className="rounded-4 border-0 offer-card">
      <Card.Body className="d-md-flex align-items-center gap-4 py-5">
        <img
          src={plane}
          alt=""
          className="mb-4 mb-md-0 d-dark-none"
          width={155}
        />
        <img
          src={planeDark}
          alt=""
          className="mb-4 mb-md-0 d-light-none"
          width={155}
        />
        <div>
          <p>
            Business Starter, Business Standard, and Business Plus plans can be
            purchased for a maximum of 300 users. There is no minimum or maximum
            user limit for Enterprise plans.
          </p>
          <p className="mb-6">
            Phoenix customers may have access to additional features for a
            limited promotional period
          </p>
          <Button
            variant="link"
            className="me-2 p-0 fs-9"
            endIcon={<FontAwesomeIcon icon={faAngleRight} transform="down-1" />}
          >
            Contact Support
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PricingOffer;
