import { faCloudBolt, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseLineChart from 'components/charts/e-charts/BaseLineChart';
import BasicEcharts from 'components/charts/e-charts/BasicEcharts';
import CommissionChart from 'components/charts/e-charts/CommissionChart';
import TravelStats from 'components/stats/TravelStats';
import { currencyFormat, getDates } from 'helpers/utils';
import { Col, Row } from 'react-bootstrap';

export const TravelStatistics = () => {
  return (
    <Row className="g-0">
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="border-bottom border-end border-end-xl-0 border-end-xxl pb-4 pt-4 pt-xl-0 pt-xxl-4 pe-4 pe-sm-5 pe-xl-0 pe-xxl-5"
      >
        <TravelStats
          title="Total Value"
          amount={currencyFormat(2345, {
            minimumFractionDigits: 2
          })}
          badgeLabel="23.33%"
          badgeBg="primary"
        >
          <div
            className="order-1 order-sm-0 order-md-1"
            style={{ height: 54, width: 90 }}
          >
            <BaseLineChart
              data={[150, 100, 300, 200, 250, 180, 250]}
              dates={getDates(
                new Date('11/1/2023'),
                new Date('11/7/2023'),
                1000 * 60 * 60 * 24
              )}
              color="warning"
              style={{ height: '100%', width: 90 }}
            />
          </div>
        </TravelStats>
      </Col>

      {/* 2nd */}
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="border-bottom py-4 ps-4 ps-sm-5 ps-xl-0 ps-xxl-5"
      >
        <TravelStats
          title="Booked Flights"
          amount="1,432"
          badgeLabel="3.98%"
          badgeBg="success"
        >
          <div className="d-md-flex align-items-center gap-2 order-sm-0 order-md-1">
            <FontAwesomeIcon
              icon={faCloudBolt}
              className="fs-5 text-warning-light dark__text-opacity-75"
              data-bs-theme="light"
            />
            <div className="d-flex d-md-block gap-2 align-items-center mt-1 mt-md-0">
              <p className="fs-9 mb-0 mb-md-2 text-body-tertiary text-nowrap">
                Rain Chances
              </p>
              <h4 className="text-body-highlight mb-0">95%</h4>
            </div>
          </div>
        </TravelStats>
      </Col>

      {/* 3rd */}
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="border-bottom-xl border-bottom-xxl-0 border-end border-end-xl-0 border-end-xxl py-4 pe-4 pe-sm-5 pe-xl-0 pe-xxl-5"
      >
        <TravelStats
          title="Commission"
          amount="$3,339.00"
          badgeLabel="12.21%"
          badgeBg="danger"
          badgeIcon={faMinus}
        >
          <div
            className="order-sm-0 order-md-1"
            style={{ height: 54, width: 54 }}
          >
            <CommissionChart
              color="primary"
              style={{ height: 54, width: 54 }}
            />
          </div>
        </TravelStats>
      </Col>
      {/* 4th */}
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="py-4 ps-4 ps-sm-5 ps-xl-0 ps-xxl-5"
      >
        <TravelStats
          title="Canceled Booking"
          amount="120.00"
          badgeLabel="5.76%"
          badgeBg="danger"
        >
          <div
            className="order-1 order-sm-0 order-md-1"
            style={{ height: 54, width: 78 }}
          >
            <BasicEcharts
              data={[120, 150, 100, 120, 110, 160]}
              dates={getDates(
                new Date('11/1/2023'),
                new Date('11/6/2023'),
                1000 * 60 * 60 * 24
              )}
              style={{ height: '100%', width: 78 }}
            />
          </div>
        </TravelStats>
      </Col>
    </Row>
  );
};
