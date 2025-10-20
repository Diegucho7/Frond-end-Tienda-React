import RevenueTargetChart from 'components/charts/e-charts/RevenueTargetChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const RevenueTarget = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <h3>Revenue Target</h3>
        <p className="text-body-tertiary mb-0">
          Country-wise target fulfilment
        </p>
        <RevenueTargetChart style={{ height: 250, width: '100%' }} />
      </Card.Body>
    </Card>
  );
};

export default RevenueTarget;
