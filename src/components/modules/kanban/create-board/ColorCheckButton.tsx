import { faPlus, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { getColorByBgColor, getRandomNumber } from 'helpers/utils';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { colors } from './BackgroundColorForm';

export const CustomColorButton = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [color, setColor] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setFormData({
      ...formData,
      backgroundImage: undefined,
      backgroundColor: e.target.value
    });
  };

  useEffect(() => {
    if (color === formData.backgroundColor) {
      setChecked(true);
    } else {
      setChecked(false);
      setColor('');
    }
  }, [formData.backgroundColor]);

  return (
    <div>
      <input
        type="color"
        id="customColor"
        name="colors"
        className="btn-check kanban-form-check"
        onChange={handleChange}
      />
      <input
        type="radio"
        name="backgroundColor"
        className="kanban-form-check d-none"
        value={color}
        checked={checked}
        readOnly
      />
      <Button
        variant="outline-secondary"
        as="label"
        htmlFor="customColor"
        className="rounded-pill text-uppercase"
        startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
        style={{
          background: color,
          color: color && getColorByBgColor(color)
        }}
      >
        Custom Color
      </Button>
    </div>
  );
};

export const RandomColorButton = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [color, setColor] = useState('');

  const ref = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    const value = colors[getRandomNumber(1, colors.length)];
    setColor(value);
    setFormData({
      ...formData,
      backgroundImage: undefined,
      backgroundColor: value
    });
  };

  return (
    <div>
      <input
        type="radio"
        name="backgroundColor"
        className="kanban-form-check d-none"
        value={color}
        id="randomColor"
        ref={ref}
        onClick={handleChange}
      />
      <Button
        variant="outline-danger"
        as="label"
        htmlFor="randomColor"
        className="rounded-pill text-uppercase"
        startIcon={<FontAwesomeIcon icon={faShuffle} className="me-2" />}
        style={{
          background: color,
          color: color && getColorByBgColor(color)
        }}
      >
        Random
      </Button>
    </div>
  );
};
