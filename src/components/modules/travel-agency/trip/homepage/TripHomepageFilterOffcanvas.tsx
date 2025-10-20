import { Offcanvas } from 'react-bootstrap';
import TripHomepageFilterOffcanvasContent from './TripHomepageFilterOffcanvasContent';

interface TripHomepageFilterOffcanvasProps {
  show: boolean;
  onHide: () => void;
}

const TripHomepageFilterOffcanvas = ({
  show,
  onHide
}: TripHomepageFilterOffcanvasProps) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header className="p-4 bg-body-highlight" closeButton>
        <h5 className="mb-0 text-body-highlight">Filter</h5>
      </Offcanvas.Header>
      <Offcanvas.Body className="scrollbar p-0">
        <TripHomepageFilterOffcanvasContent />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TripHomepageFilterOffcanvas;
