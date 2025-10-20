import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FlightBottomBar = () => {
  return (
    <div className="flight-bottom-bar bg-secondary" data-bs-theme="light">
      <Container fluid="small" className="py-3">
        <div className="d-flex gap-4 gap-sm-6 align-items-center justify-content-end">
          <h6 className="text-white mb-0">
            <span className="me-2">Total</span>
            <span className="me-2">:</span>
            <span>BDT</span>
            <span className="fs-5 ms-2">4,609</span>
          </h6>
          <Button
            variant="primary"
            className="flex-1 text-nowrap"
            href="#!"
            style={{ maxWidth: '17rem' }}
          >
            Continue
            <FontAwesomeIcon icon={faChevronRight} className="fs-9 ms-2" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FlightBottomBar;
