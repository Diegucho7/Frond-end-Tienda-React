import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FinancialStatementTable from 'components/tables/FinancialStatementTable';
import { Card, Row, Col, Form } from 'react-bootstrap';

const FinancialStatementTabContent = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="g-3 flex-between-center mb-4">
          <Col xs="auto">
            <h4>Apple Income Statement</h4>
            <p className="text-body-tertiary mb-0">
              Financials in millions USD.
            </p>
          </Col>
          <Col xs="auto">
            <div className="d-flex align-items-center gap-2">
              <Form.Select size="sm">
                <option value="millions">Millions</option>
                <option value="thousand">Thousand</option>
                <option value="hundreds">Hundred</option>
              </Form.Select>
              <Form.Select size="sm">
                <option value="annual">Annual</option>
                <option value="semi-annual">Semi Annual</option>
                <option value="quarterly">Quarterly</option>
              </Form.Select>
              <Button variant="phoenix-secondary" size="sm">
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </Col>
        </Row>
        <FinancialStatementTable />
      </Card.Body>
    </Card>
  );
};

export default FinancialStatementTabContent;
