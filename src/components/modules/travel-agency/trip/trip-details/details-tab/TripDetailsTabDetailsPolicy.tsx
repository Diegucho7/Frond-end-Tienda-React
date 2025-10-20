import React from 'react';
import { Policy } from 'data/travel-agency/customer/trip';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface TripDetailsTabDetailsPolicyProps {
  policies: Policy[];
}

const TripDetailsTabDetailsPolicy = ({
  policies
}: TripDetailsTabDetailsPolicyProps) => {
  return (
    <div className="py-6 px-4">
      {policies.map((policy, index) => (
        <Card
          key={policy.id}
          className={classNames('bg-transparent', {
            'mb-3': index !== policies.length - 1
          })}
        >
          <Card.Body>
            <h5 className="mb-3">{policy.label}</h5>
            <ul className="list-unstyled mb-0">
              {policy.policyItems.map(item => (
                <li key={item.id} className="mb-3 d-flex">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-secondary-light me-3 fs-11"
                    transform="down-13 shrink-4"
                  />
                  {item.policyItem}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TripDetailsTabDetailsPolicy;
