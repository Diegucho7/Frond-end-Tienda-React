import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

const RoomFilterActions = () => {
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };
  return (
    <>
      <InputGroup className="gap-2">
        <Button
          variant="phoenix-primary"
          className="px-3 rounded"
          onClick={() => handleCount('decrease')}
          disabled={value === 0}
        >
          <FontAwesomeIcon icon={faMinus} className="px-1" />
        </Button>

        <FormControl
          type="number"
          value={value}
          onChange={e => setValue(parseInt(e.target.value))}
          size="lg"
          className="border-translucent input-spin-none text-center rounded"
        />
        <Button
          variant="phoenix-primary"
          className="px-3 rounded"
          onClick={() => handleCount('increase')}
        >
          <FontAwesomeIcon icon={faPlus} className="px-1" />
        </Button>
      </InputGroup>
    </>
  );
};

export default RoomFilterActions;
