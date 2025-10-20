import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSuitcaseRolling,
  faBriefcase,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface BaggageRowProps {
  icon: IconDefinition;
  label: string;
  weight: string;
}

const BaggageRow: React.FC<BaggageRowProps> = ({ icon, label, weight }) => (
  <tr>
    <td className="text-nowrap py-1">
      <p className="mb-0 text-body-tertiary text-nowrap">
        <FontAwesomeIcon icon={icon} className="text-body-emphasis me-2" />
        {label}
      </p>
    </td>
    <td className="w-max-content py-1 pe-1">
      <p className="mb-0 text-body-tertiary">:</p>
    </td>
    <td className="py-1 align-middle">
      <h5 className="mb-0">{weight}</h5>
    </td>
  </tr>
);

const FlightDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="mb-4">Flight Details</h3>
      <Row className="g-0 justify-content-between mb-4">
        {/* Baggage Weight Limit Section */}
        <Col lg={3} className="border-end-lg mb-5 mb-lg-0">
          <h5 className="mb-4">Baggage weight limit</h5>
          <Table borderless className="mb-0" style={{ maxWidth: '9.375rem' }}>
            <tbody>
              <tr>
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
              </tr>
              <BaggageRow
                icon={faSuitcaseRolling}
                label="Cargo"
                weight="20 kgs"
              />
              <BaggageRow icon={faBriefcase} label="Carry" weight="7 kgs" />
            </tbody>
          </Table>
        </Col>

        {/* Policy Section */}
        <Col className="col-auto col-lg-8">
          <h5 className="mb-4">Policy</h5>
          <div className="d-flex flex-column flex-sm-row justify-content-between gap-4">
            <div>
              <p className="mb-2 text-info">Cancellation</p>
              <p className="mb-0">
                Refund Amount = Paid Amount - Airline’s Cancellation Fee
              </p>
            </div>
            <div>
              <p className="mb-2 text-info">Re-issue</p>
              <p className="mb-0">
                Re-issue Fee = Airline’s Fee + Fare Difference
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <p className="mb-0 text-info">
        *The airline’s fee is indicative and per person. Convenience fee is
        non-refundable.
      </p>
    </div>
  );
};

export default FlightDetails;
