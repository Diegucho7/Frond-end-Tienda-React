import { ChangeEvent, ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxItem = ({
  type = 'checkbox',
  name,
  label,
  value,
  checked,
  onChange
}: CheckboxItemProps) => {
  return (
    <Form.Check
      type={type}
      id={`${name}-${value}`}
      className="mb-0 d-flex align-items-center gap-2"
    >
      <Form.Check.Input
        type={type}
        value={value}
        name={name}
        className="mt-0"
        checked={checked}
        onChange={onChange}
      />
      <Form.Check.Label className="d-block lh-sm fs-8 text-body fw-normal mb-0">
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default CheckboxItem;
