import React from 'react';
import DatePicker from 'components/base/DatePicker';
import { Form } from 'react-bootstrap';

interface TripCheckoutFormTimePickerProps {
  label: string;
  id: string;
  placeholder?: string;
}

const TripCheckoutFormTimePicker = ({
  id,
  label,
  placeholder = 'Hour : Minute'
}: TripCheckoutFormTimePickerProps) => {
  return (
    <>
      <label htmlFor={id} className="fw-bold text-body-highlight mb-1">
        {label}
      </label>
      <div className="flatpickr-input-container">
        <DatePicker
          render={(_, ref) => {
            return (
              <Form.Control
                type="text"
                placeholder={placeholder}
                ref={ref}
                id={id}
              />
            );
          }}
          hideIcon={true}
          options={{
            enableTime: true,
            dateFormat: 'h:i',
            noCalendar: true,
            disableMobile: true
          }}
        />
      </div>
    </>
  );
};

export default TripCheckoutFormTimePicker;
