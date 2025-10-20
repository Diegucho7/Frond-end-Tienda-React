import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CountdownDisplay = () => {
  return (
    <div>
      <p className="mb-2 text-info">Book before time runs out</p>
      <h3 className="mb-0 text-info fw-bold d-flex gap-2 align-items-center justify-content-sm-end">
        <FontAwesomeIcon icon={faClock} className="fs-8" />
        <span>29</span>
        <span className="fs-9 fw-normal">min</span>
        <span>50</span>
        <span className="fs-9 fw-normal">sec</span>
      </h3>
    </div>
  );
};

export default CountdownDisplay;
