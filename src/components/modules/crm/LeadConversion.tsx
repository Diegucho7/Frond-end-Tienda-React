import LeadConversationChart from 'components/charts/e-charts/LeadConversationChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const LeadConversion = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <h3>Lead Conversion</h3>
        <p className="text-body-tertiary mb-0">
          Stages of deals &amp; conversion
        </p>
        <LeadConversationChart style={{ height: 250, width: '100%' }} />
      </Card.Body>
    </Card>
  );
};

export default LeadConversion;
