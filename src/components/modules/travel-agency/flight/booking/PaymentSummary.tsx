import classNames from 'classnames';
import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';

interface SummaryItemProps {
  label: string;
  value: string;
  isBold?: boolean;
  badgeText?: string;
  isPositive?: boolean;
  className?: string;
}

const SummaryItem = ({
  label,
  value,
  isBold = false,
  badgeText,
  isPositive = false,
  className
}: SummaryItemProps) => (
  <ListGroup.Item
    className={classNames('px-0 py-3 bg-body-highlight', className)}
  >
    <div className="d-flex flex-between-center">
      <h6 className="mb-0">
        {label}
        {badgeText && (
          <Badge bg="warning" className="ms-2">
            {badgeText}
          </Badge>
        )}
      </h6>
      <p
        className={classNames('mb-0 text-body-emphasis', {
          'fw-semibold': isBold
        })}
      >
        <span className="fs-9 me-2">BDT</span>
        {isPositive ? `+${value}` : value}
      </p>
    </div>
  </ListGroup.Item>
);

const PaymentSummary = () => {
  return (
    <div className="mb-4 mb-lg-9">
      <h3 className="mb-4">Payment Summary</h3>
      <Card className="bg-body-highlight">
        <Card.Body>
          <ListGroup variant="flush">
            <SummaryItem label="Base fare" value="4,074" className="pt-0" />
            <SummaryItem label="Tax" value="725" isPositive={true} />
            <SummaryItem
              label="Sub-total"
              value="4,799"
              isBold={true}
              className="pb-5"
            />
            <SummaryItem label="Code" value="-285" badgeText="DOMFLy2023" />
            <SummaryItem
              label="Convenience charge"
              value="95"
              isPositive={true}
              className="pb-0"
            />
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentSummary;
