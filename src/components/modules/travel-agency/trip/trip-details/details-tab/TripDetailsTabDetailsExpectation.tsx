import React from 'react';
import { Expectation } from 'data/travel-agency/customer/trip';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface TripDetailsTabDetailsExpectationProps {
  expectations: Expectation[];
}

const TripDetailsTabDetailsExpectation = ({
  expectations
}: TripDetailsTabDetailsExpectationProps) => {
  return (
    <div className="py-6 px-4">
      {expectations.map((expectation, index) => (
        <div
          key={expectation.id}
          className={classNames({
            'mb-5': expectations.length - 1 !== index
          })}
        >
          <div className="d-flex align-items-center gap-2">
            <span
              className="bg-secondary rounded-pill d-flex flex-center text-white"
              style={{ width: 27, height: 27 }}
            >
              {index + 1}
            </span>
            <h5 className="text-body-highlight mb-0">{expectation.event}</h5>
          </div>
          <p className="my-2">{expectation.description}</p>
          <div className="d-flex gap-3 gap-xl-4 flex-wrap">
            <h5 className="text-body-highlight fw-semibold mb-0">
              <FontAwesomeIcon
                icon={faClock}
                className="text-body-quaternary me-2"
              />
              Duration :{' '}
              <span className="text-body-tertiary fw-normal">
                {expectation.duration}
              </span>
            </h5>
            <h5 className="text-body-highlight fw-semibold mb-0">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-body-quaternary me-2"
              />
              Location :{' '}
              <span className="text-body-tertiary fw-normal">
                {expectation.location}
              </span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripDetailsTabDetailsExpectation;
