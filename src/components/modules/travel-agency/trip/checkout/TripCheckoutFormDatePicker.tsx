import React from 'react';
import DatePicker from 'components/base/DatePicker';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';

interface TripCheckoutFormDatePickerProps {
  label: string;
  id: string;
  placeholder?: string;
}

const TripCheckoutFormDatePicker = ({
  id,
  label,
  placeholder = 'DD/MM/YYYY'
}: TripCheckoutFormDatePickerProps) => {
  return (
    <>
      <label htmlFor={id} className="fw-bold text-body-highlight mb-1">
        {label}
      </label>
      <div className="form-icon-container flatpickr-input-container">
        <DatePicker
          render={(_, ref) => {
            return (
              <>
                <Form.Control
                  type="text"
                  placeholder={placeholder}
                  ref={ref}
                  id={id}
                  className="form-icon-input"
                />
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="form-icon text-body-quaternary fs-9"
                  transform="up-1"
                />
              </>
            );
          }}
          hideIcon={true}
          options={{
            dateFormat: 'Y-m-d'
          }}
        />
      </div>
    </>
  );
};

export default TripCheckoutFormDatePicker;
