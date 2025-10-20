import { faAdd, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import WatchlistCollapsibleCard from 'components/cards/WatchlistCollapsibleCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import WatchlistTab from 'components/modules/stock/watchlist/WatchlistTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from 'react-bootstrap';

const Watchlist = () => {
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <h2 className="mb-4">Watchlist</h2>
      <Row className="g-3 g-lg-5 mb-4 flex-between-center">
        <Col xs="auto">
          <h4>My Watchlist</h4>
          <p className="mb-0 text-body-tertiary me-2">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs="auto">
          <Button variant="phoenix-secondary" className="me-2">
            <FontAwesomeIcon icon={faSort} className="me-2" />
            Reorder Symbol
          </Button>
          <Button variant="phoenix-secondary">
            <FontAwesomeIcon icon={faAdd} className="me-2" />
            Add Symbol
          </Button>
        </Col>
      </Row>
      <Row className="pb-5 pb-md-7 pb-xl-9">
        <Col xs={12}>
          <WatchlistCollapsibleCard className="mb-3" />
          <WatchlistTab />
        </Col>
      </Row>
    </>
  );
};

export default Watchlist;
