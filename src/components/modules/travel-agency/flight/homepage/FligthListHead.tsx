import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import IsotopeNav from 'components/navs/IsotopeNav';
import React, { useState } from 'react';
import FlightFilterModal from 'components/modals/FlightFilterModal';

const FligthListHead = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const navItems = [
    {
      eventKey: '1',
      label: 'Cheapest'
    },
    {
      eventKey: '2',
      label: 'Fastest'
    }
  ];

  return (
    <>
      <div className="d-flex flex-between-center mb-3">
        <IsotopeNav
          navItems={navItems}
          className="justify-content-center w-max-content"
          defaultActiveKey={navItems[1].eventKey}
          // onSelect={handleSelect}
        />
        <Button
          variant="phoenix-secondary"
          className="text-nowrap px-4"
          onClick={() => setFilterModalOpen(true)}
        >
          <FontAwesomeIcon icon={faFilter} className="me-md-2" />
          <span className="d-none d-md-inline-block"> Filters </span>
        </Button>
      </div>
      <FlightFilterModal
        show={filterModalOpen}
        handleModalClose={() => setFilterModalOpen(false)}
      />
    </>
  );
};

export default FligthListHead;
