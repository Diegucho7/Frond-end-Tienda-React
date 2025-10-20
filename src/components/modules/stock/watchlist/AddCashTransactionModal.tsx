import { ChangeEvent, useState } from 'react';
import { faCalendarAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { currencyFormat } from 'helpers/utils';
import { Col, Form, Modal, Row } from 'react-bootstrap';

interface AddCashTransactionModalProps {
  show: boolean;
  handleClose: () => void;
}

const AddCashTransactionModal = ({
  show,
  handleClose
}: AddCashTransactionModalProps) => {
  const [note, setNote] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 60) {
      setNote(value);
    }
  };

  return (
    <Modal
      show={show}
      centered
      onHide={handleClose}
      dialogClassName="modal-600"
    >
      <Modal.Header className="border-0">
        <h4 className="text-body-highlight mb-0">Add Transaction</h4>
        <Button
          variant="link"
          className="text-danger fs-9 ms-auto p-1"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Row className="bg-body-highlight rounded-3 g-0 gap-3 p-3 flex-between-center mb-4">
          <Col xs="auto">
            <p className="fw-bold mb-0">Stock Name : Apple Inc</p>
          </Col>
          <Col xs="auto">
            <p className="mb-0 fw-bold">NASDAQ : AAPL</p>
          </Col>
        </Row>
        <Row className="g-3">
          <Col sm={6}>
            <label className="fw-bold text-body-highlight mb-2">Type</label>
            <Form.Select>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="hold">Hold</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <label className="fw-bold text-body-highlight mb-2">Date</label>
            <DatePicker
              placeholder="dd/mm/yyyy"
              style={{ height: 33.06 }}
              options={{ disableMobile: true }}
              className="px-5"
              hideIcon={true}
              icon={
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-body fs-9 flatpickr-icon translate-middle-y"
                  transform="shrink-1 down-1"
                />
              }
            />
          </Col>
          <Col sm={6}>
            <label className="fw-bold text-body-highlight mb-2">
              Cost per share
            </label>
            <Form.Control
              name="costPerShare"
              type="number"
              className="input-spin-none"
              placeholder="Enter cost per Share..."
            />
          </Col>
          <Col sm={6}>
            <label className="fw-bold text-body-highlight mb-2">Currency</label>
            <Form.Select>
              <option value="usd">USD</option>
              <option value="cad">CAD</option>
              <option value="yen">YEN</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <label className="fw-bold text-body-highlight mb-2">
              Share Quantity
            </label>
            <Form.Control
              type="number"
              className="input-spin-none"
              placeholder="Enter share quantity..."
              name="shareQuantity"
            />
          </Col>
          <Col sm={6}>
            <label className="fw-bold text-body-highlight mb-2">
              Commission
            </label>
            <Form.Select>
              <option value="">Select</option>
              <option value="20%">20%</option>
              <option value="25%">25%</option>
            </Form.Select>
          </Col>
          <Col xs={12} className="mb-4">
            <label className="fw-bold text-body-highlight mb-2">Note</label>
            <Form.Control
              type="text"
              name="note"
              value={note}
              placeholder="Write a note..."
              onChange={handleChange}
            />
            <span className="text-end fs-8 lh-sm mt-2 d-block">
              <span className="fw-semibold text-primary">{note.length}</span>
              <span className="text-body-quaternary">/60</span>
            </span>
          </Col>
          <Col xs={12}>
            <Row className="flex-between-center g-3 border-top border-dashed">
              <Col xs="auto">
                <h4 className="mb-0">Total Cost:</h4>
              </Col>
              <Col xs="auto">
                <h4 className="mb-0">
                  {currencyFormat(562.08, { minimumFractionDigits: 2 })}
                </h4>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="text-end">
            <Button variant="link" size="sm" className="text-secondary">
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Add Transaction
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddCashTransactionModal;
