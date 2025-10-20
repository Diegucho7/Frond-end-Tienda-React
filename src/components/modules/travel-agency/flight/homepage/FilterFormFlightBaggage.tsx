import React from 'react';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import InputGroupCounter from 'components/common/InputGroupCounter';

const FilterFormFlightBaggage = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Baggage"
      titleClass="fs-8"
      containerSize="sm"
      id="flightBaggage"
    >
      <div className="p-3 pb-0">
        <div className="d-flex gap-2 justify-content-between">
          <div>
            <h5 className="mb-3 text-body-highlight">Carry on bag</h5>
            <InputGroupCounter />
          </div>
          <div>
            <h5 className="mb-3 text-body-highlight">Checked bag</h5>
            <InputGroupCounter />
          </div>
        </div>
      </div>
    </CollapsibleContainer>
  );
};

export default FilterFormFlightBaggage;
