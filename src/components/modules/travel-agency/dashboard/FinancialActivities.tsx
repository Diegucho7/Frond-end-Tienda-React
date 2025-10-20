import classNames from 'classnames';
import BasicDropdown from 'components/base/basicDropdown';
import FinancialActivitiesChart from 'components/charts/e-charts/FinancialActivitiesChart';
import { FinancialActivitiesData } from 'data/travel-agency/travelAgency';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { capitalize } from 'helpers/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';

export const FinancialActivities = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const [legends, setlegends] = useState({
    profit: true,
    revenue: true,
    expenses: true
  });

  const handleLegend = (value: 'profit' | 'revenue' | 'expenses') => {
    setlegends({
      ...legends,
      [value]: !legends[value]
    });

    chartRef?.current?.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: capitalize(value)
    });
  };

  useEffect(() => {
    const data1 = FinancialActivitiesData.profitData[selectedOption];
    const data2 = FinancialActivitiesData.revenueData[selectedOption];
    const data3 = FinancialActivitiesData.expensesData[selectedOption];
    chartRef?.current?.getEchartsInstance().setOption({
      series: [
        {
          data: data1
        },
        {
          data: data2
        },
        {
          data: data3
        }
      ]
    });
  }, [selectedOption]);

  return (
    <div className="mt-5 mt-xl-0 mt-xxl-5 mb-5 mb-xxl-0">
      <Row className="flex-between-end gy-3 gx-2">
        <Col xs="auto">
          <h3 className="text-body-highlight">Financial activities</h3>
          <p className="mb-0 text-body-tertiary"> Yearly Balance</p>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{
            span: 'auto',
            order: 0
          }}
          md={{ order: 1 }}
          lg={{ order: 0 }}
          xxl={{ order: 1 }}
          className="ms-auto"
        >
          <Form.Select
            size="sm"
            className="pe-9 w-auto mt-xl-3 mt-xxl-0"
            value={selectedOption}
            onChange={e => setSelectedOption(parseInt(e.target.value))}
          >
            <option value={0}>Hotel</option>
            <option value={1}>Flight</option>
            <option value={2}>Trip</option>
          </Form.Select>
        </Col>
        <Col xs="auto" md={{ order: 1 }} lg={{ order: 0 }} xxl={{ order: 1 }}>
          <BasicDropdown>
            <Dropdown.Item href="#!">Action</Dropdown.Item>
            <Dropdown.Item href="#!">Another action</Dropdown.Item>
            <Dropdown.Item href="#!">Something else</Dropdown.Item>
          </BasicDropdown>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ order: 0 }}
          md="auto"
          lg={12}
          xxl="auto"
          className="mx-auto mb-4"
        >
          <div className="d-flex justify-content-center gap-6 gap-xxl-4">
            <Button
              variant="link"
              id="profile"
              onClick={() => handleLegend('profit')}
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-semibold text-decoration-none',
                {
                  'opacity-50': !legends.profit
                }
              )}
            >
              <span
                className="bg-primary-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-body-secondary"> Profit </span>
            </Button>
            <Button
              variant="link"
              id="revenue"
              onClick={() => handleLegend('revenue')}
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-semibold text-decoration-none',
                {
                  'opacity-50': !legends.revenue
                }
              )}
            >
              <span
                className="bg-success-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-body-secondary"> Revenue </span>
            </Button>
            <Button
              variant="link"
              id="expenses"
              onClick={() => handleLegend('expenses')}
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-semibold text-decoration-none',
                {
                  'opacity-50': !legends.expenses
                }
              )}
            >
              <span
                className="bg-info-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-body-secondary"> Expenses </span>
            </Button>
          </div>
        </Col>
      </Row>
      <FinancialActivitiesChart ref={chartRef} />
    </div>
  );
};
