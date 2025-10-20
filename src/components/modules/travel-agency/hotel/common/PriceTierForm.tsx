import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { Form } from 'react-bootstrap';

interface PriceTierFormProps {
  id: string;
  name: string;
  className?: string;
  // eslint-disable-next-line
  methods?: any;
}

const PriceTierForm = ({
  id,
  name,
  className = 'mb-3',
  methods
}: PriceTierFormProps) => {
  const { formData, setFormData } = methods;
  const [active, setActive] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };

  return (
    <div
      className={classNames('form-price-tier border p-3 rounded-2', className, {
        active: active
      })}
    >
      <div className="d-sm-flex align-items-center gap-3">
        <Form.Check id={id} type="switch" className="mb-0">
          <Form.Check.Input
            onClick={() => {
              setActive(!active);
            }}
            onChange={handleChange}
            name={id}
          />
          <Form.Check.Label className="fw-bold fs-8 text-body ms-2">
            {name}
          </Form.Check.Label>
        </Form.Check>
        <div
          className={classNames('ms-auto mt-2 mt-sm-0', {
            'd-block': active,
            'd-none': !active
          })}
        >
          <Form.Check type="radio" className="form-check-inline me-3 mb-0">
            <Form.Check.Input
              type="radio"
              id={`${name}-free`}
              name={`${name}-radio`}
              defaultValue="free"
              defaultChecked
            />
            <Form.Check.Label htmlFor={`${name}-free`}>Free</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" className="form-check-inline me-0 mb-0">
            <Form.Check.Input
              type="radio"
              id={`${name}-paid`}
              name={`${name}-radio`}
              defaultValue="paid"
            />
            <Form.Check.Label htmlFor={`${name}-paid`}>Paid</Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </div>
  );
};

export default PriceTierForm;
