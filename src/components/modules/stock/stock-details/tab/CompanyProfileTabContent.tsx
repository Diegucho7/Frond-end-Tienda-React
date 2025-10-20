import { CompanyProfileItems } from 'data/stock/stockDetails';
import CompanyProfileTotalItemsCard from 'components/cards/CompanyProfileTotalItemsCard';
import CompanyProfileDescriptionCard from 'components/cards/CompanyProfileDescriptionCard';
import { Row, Col, ButtonGroup, Card, Form } from 'react-bootstrap';
import Button from 'components/base/Button';
import CompanyProfileEmployeesChart from 'components/charts/e-charts/CompanyProfileEmployeesChart';
import EmployeeRecordsTable from 'components/tables/EmployeeRecordsTable';

const CompanyProfileTabContent = ({
  companyProfileItems
}: {
  companyProfileItems: CompanyProfileItems;
}) => {
  return (
    <>
      <CompanyProfileTotalItemsCard
        cardItems={companyProfileItems.companyProfileTotalItems}
      />
      <CompanyProfileDescriptionCard
        companyDetails={companyProfileItems.companyDetailsItems}
        stockDetails={companyProfileItems.stockDetailsItems}
      />
      <Row className="flex-between-center g-3 mb-4">
        <Col xs="auto">
          <h4>Chart of Employees</h4>
          <p className="mb-0">No. of bookings fulfilled &amp; cancelled</p>
        </Col>
        <Col xs="auto">
          <ButtonGroup className="stock-btn-group">
            <Button variant="phoenix-secondary">Total</Button>
            <Button variant="phoenix-secondary">Change</Button>
            <Button variant="phoenix-secondary" className="active">
              Growth
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <CompanyProfileEmployeesChart />
      <Card>
        <Card.Body>
          <Row className="g-3 flex-between-center mb-3">
            <Col xs="auto">
              <h4>Employee Records</h4>
              <p className="mb-0">Record of employee's roles and tenure.</p>
            </Col>
            <Col xs="auto">
              <Form.Select size="sm">
                <option value="export">Export</option>
                <option value="import">Import</option>
                <option value="delete">Delete</option>
              </Form.Select>
            </Col>
          </Row>
          <EmployeeRecordsTable
            data={companyProfileItems.employeeRecordTableRows}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default CompanyProfileTabContent;
