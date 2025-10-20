import React, { ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
}

const RoomFilterCheckbox = ({
  type = 'checkbox',
  name,
  label,
  value
}: CheckboxItemProps) => {
  return (
    <Form.Check type={type} id={String(value)} className="mt-3">
      <Form.Check.Input
        type={type}
        value={value}
        name={name}
        className="mt-0"
      />
      <Form.Check.Label className="d-block lh-sm fs-8 text-body-highlight mb-0">
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default RoomFilterCheckbox;
