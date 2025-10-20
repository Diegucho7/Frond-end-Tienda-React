import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import LeadDealsTable from 'components/tables/LeadDealsTable';
import React from 'react';

const LeadDeals = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Deals</h2>
        <Button
          variant="primary"
          size="sm"
          startIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Add Deals
        </Button>
      </div>
      <LeadDealsTable />
    </div>
  );
};

export default LeadDeals;
