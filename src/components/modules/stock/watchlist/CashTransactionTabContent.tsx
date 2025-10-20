import { useState } from 'react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import WatchlistCashTransactionTable from 'components/tables/WatchlistCashTransactionTable';
import { watchlistItems } from 'data/stock/watchlist';
import { Col, Row } from 'react-bootstrap';
import AddCashTransactionModal from './AddCashTransactionModal';

const CashTransactionTabContent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Row className="mt-4 flex-between-center">
        <Col xs="auto">
          <h4>Cash Transaction Report</h4>
          <p className="mb-0 text-body-tertiary">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs="auto">
          <Button
            variant="phoenix-secondary"
            size="sm"
            startIcon={<FontAwesomeIcon icon={faAdd} className="me-2" />}
            onClick={() => setShow(true)}
          >
            Add Cash Transaction
          </Button>
        </Col>
      </Row>
      <WatchlistCashTransactionTable
        data={watchlistItems.cashTransactionTableDataRow}
      />
      <AddCashTransactionModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default CashTransactionTabContent;
