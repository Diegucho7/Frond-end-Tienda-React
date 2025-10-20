import {
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import StockShareReportChart from 'components/charts/e-charts/StockShareReportChart';
import { Col, Form, Row } from 'react-bootstrap';

const ChartTabContent = () => {
  return (
    <>
      <Row className="flex-between-center g-3 mb-4">
        <Col xs="auto">
          <h4>Share Report</h4>
          <p className="text-body-tertiary mb-0">
            Updated inventory according to the sales report.
          </p>
        </Col>
        <Col xs="auto" className="d-flex gap-2">
          <Form.Select size="sm" style={{ width: 107 }}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="yearly">Yearly</option>
          </Form.Select>
          <Button variant="phoenix-secondary" size="sm">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </Button>
          <Button variant="phoenix-secondary" size="sm">
            <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
          </Button>
        </Col>
      </Row>
      <StockShareReportChart />
    </>
  );
};

export default ChartTabContent;
