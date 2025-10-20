import React from 'react';
import { JourneyDetail } from 'data/travel-agency/customer/trip';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

interface TripDetailsTabDetailsDepartureProps {
  departureItems: JourneyDetail[];
}
const TripDetailsTabDetailsDeparture = ({
  departureItems
}: TripDetailsTabDetailsDepartureProps) => {
  return (
    <div className="py-6 px-4">
      {departureItems.map((item, index) => (
        <Card
          key={item.id}
          className={classNames('bg-transparent', {
            'mb-3': departureItems.length - 1 !== index
          })}
        >
          <Card.Body>
            <h5 className="mb-3">{item.label}</h5>
            <p className="mb-0">{item.description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TripDetailsTabDetailsDeparture;
