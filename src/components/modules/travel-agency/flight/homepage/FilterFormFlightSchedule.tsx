import { Form, Row, Col } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import { flightSchedules } from 'data/travel-agency/customer/flight';

const FilterFormFlightSchedule = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Flight Schedules"
      titleClass="fs-8"
      containerSize="sm"
      id="flightTime"
    >
      <div className="p-3 pb-0">
        {flightSchedules.map(schedule => (
          <div key={schedule.id} className={schedule.className}>
            <h5 className="mb-3">{schedule.title}</h5>
            <Row className="g-2">
              {schedule.scheduleChecks.map(check => (
                <Col key={check.id} xs={6} sm={4}>
                  <Form.Check.Input
                    className="btn-check flight-filter-checkbox"
                    name={schedule.name}
                    id={check.id}
                  />
                  <Form.Check.Label
                    className="btn btn-phoenix-secondary fw-bold text-nowrap w-100 px-0"
                    htmlFor={check.id}
                  >
                    {check.label}
                  </Form.Check.Label>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export default FilterFormFlightSchedule;
