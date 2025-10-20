import { Form } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import { flightAirports } from 'data/travel-agency/customer/flight';

const FilterFormFlightAirports = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Airports"
      titleClass="fs-8"
      containerSize="sm"
      id="flightAirports"
    >
      <div className="p-3 pb-0">
        <div className="d-flex gap-3">
          {flightAirports.map(item => (
            <div key={item.id} className="flex-1">
              <h5 className="mb-3">{item.label}</h5>
              {item.airports.map(airport => (
                <Form.Check key={airport} className="gap-2">
                  <Form.Check.Input
                    id={airport.split(' : ')[0]}
                    className="mt-0"
                  />
                  <Form.Check.Label
                    htmlFor={airport.split(' : ')[0]}
                    className="fs-9 text-body lh-sm"
                  >
                    {airport}
                  </Form.Check.Label>
                </Form.Check>
              ))}
            </div>
          ))}
        </div>
      </div>
    </CollapsibleContainer>
  );
};

export default FilterFormFlightAirports;
