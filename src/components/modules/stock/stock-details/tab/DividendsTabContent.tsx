import classNames from 'classnames';
import RevealDropdown from 'components/base/RevealDropdown';
import DividendBarChart from 'components/charts/e-charts/DividendBarChart';
import DividendGrowthChart from 'components/charts/e-charts/DividendGrowthChart';
import DividendRecordTable from 'components/tables/DividendRecordTable';
import { DividendContent } from 'data/stock/dividend';
import { Alert, Card, Col, Form, Row, Dropdown } from 'react-bootstrap';

interface DividendsTabContentProps {
  dividendContent: DividendContent;
}

const DividendsTabContent = ({ dividendContent }: DividendsTabContentProps) => {
  return (
    <>
      <Alert variant={`phoenix-secondary`} className="mb-4">
        <Alert.Heading>
          <h4 className="text-body-tertiary mb-2">
            Apple's Dividend Distribution
          </h4>
        </Alert.Heading>
        <p className="text-body-tertiary mb-0">
          Apple offers a $1.00 yearly dividend per share, or 0.44% return. The
          dividend is distributed every three months, and as of August 12, 2024,
          there was no ex-dividend date.
        </p>
      </Alert>
      <Card className="mb-4">
        <Card.Body>
          <Row className="g-0">
            {dividendContent.dividendCardItems.map(item => (
              <Col
                key={item.id}
                xs={6}
                xxl={3}
                className={classNames(item.className)}
              >
                <div className="d-flex flex-column flex-sm-row flex-xxl-column gap-3">
                  <div
                    className={classNames(
                      'icon-item border align-items-end p-2 d-flex align-items-center rounded fw-normal',
                      item.iconClassName
                    )}
                  >
                    {item.icon}
                  </div>
                  <div className="text-nowrap">
                    <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
                      {item.title}
                    </h5>
                    <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
                      {item.content}
                    </h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      <Row className="g-3 mb-4">
        <Col xxl={6}>
          <Row className="g-3 g-lg-5 flex-between-center mb-4">
            <Col xs="auto">
              <h4>Dividends</h4>
              <p className="text-body-tertiary mb-0">Dividend Income Basics</p>
            </Col>
            <Col xs="auto" className="d-flex align-items-center gap-2">
              <Form.Select size="sm">
                <option value="9">9 Years</option>
                <option value="8">8 Years</option>
                <option value="7">7 Years</option>
              </Form.Select>
              <RevealDropdown
                btnClassName="btn-phoenix-secondary bg-body-emphasis bg-body-hover action-btn"
                dropdownMenuClassName="py-3"
              >
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
              </RevealDropdown>
            </Col>
          </Row>
          <DividendBarChart data={dividendContent.dividendChartData} />
        </Col>
        <Col xxl={6}>
          <Row className="g-3 g-lg-5 flex-between-center mb-4">
            <Col xs="auto">
              <h4>Dividend Growth</h4>
              <p className="text-body-tertiary mb-0">
                Boosting Dividend Income
              </p>
            </Col>
            <Col xs="auto" className="d-flex align-items-center gap-2">
              <Form.Select size="sm">
                <option value="7">7 Years</option>
                <option value="8">8 Years</option>
                <option value="9">9 Years</option>
              </Form.Select>
              <RevealDropdown
                btnClassName="btn-phoenix-secondary bg-body-emphasis bg-body-hover action-btn"
                dropdownMenuClassName="py-3"
              >
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
              </RevealDropdown>
            </Col>
          </Row>
          <DividendGrowthChart data={dividendContent.dividendGrowthChartData} />
        </Col>
      </Row>
      <Row className="g-3 flex-between-center">
        <Col xs="auto">
          <h4>Dividend Record</h4>
          <p className="text-body-tertiary mb-0">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs="auto">
          <Form.Select size="sm">
            <option value="export">Export</option>
            <option value="import">Import</option>
            <option value="remove">Remove</option>
          </Form.Select>
        </Col>
        <Col xs={12} className="mt-3">
          <DividendRecordTable
            data={dividendContent.dividendRecordDataTableRow}
          />
        </Col>
      </Row>
    </>
  );
};

export default DividendsTabContent;
