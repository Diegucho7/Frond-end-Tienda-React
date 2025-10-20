import classNames from 'classnames';
import ContactsBySourceChart from 'components/charts/e-charts/ContactsBySourceChart';
import ContactSourceItem from 'components/grid-list-items/ContactSourceItem';
import { contactSourceData } from 'data/crm/dashboardData';
import { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactsBySource = () => {
  const total = useMemo(() => {
    return contactSourceData.reduce((acc, item) => acc + item.value, 0);
  }, [contactSourceData]);

  return (
    <Row>
      <Col xs={12} sm={7} md={8} xxl={8} className="mb-md-3 mb-lg-0">
        <h3>New Contacts by Source</h3>
        <p className="text-body-tertiary">
          Payment received across all channels
        </p>
        <Row className="g-0">
          {contactSourceData.map((item, index) => (
            <Col xs={6} xl={4} key={item.name}>
              <ContactSourceItem
                value={item.value}
                label={item.name}
                color={item.color}
                className={classNames('border-translucent', {
                  'border-bottom border-end': index === 0,
                  'border-bottom border-end-md-0 border-end-xl': index === 1,
                  'border-bottom border-end border-end-md border-end-xl-0':
                    index === 2,
                  'border-end-xl border-bottom border-bottom-xl-0': index === 3,
                  'border-end': index === 4
                })}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col sm={5} md={4} xxl={4} className="my-3 my-sm-0">
        <div className="position-relative d-flex flex-center mb-sm-4 mb-xl-0 echart-contact-by-source-container mt-sm-7 mt-lg-4 mt-xl-0">
          <ContactsBySourceChart style={{ height: 245, width: '100%' }} />
          <div
            className="position-absolute rounded-circle bg-primary-subtle top-50 start-50 translate-middle d-flex flex-center"
            style={{ height: '100px', width: '100px' }}
          >
            <h3 className="mb-0 text-primary-dark fw-bolder">{total}</h3>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ContactsBySource;
