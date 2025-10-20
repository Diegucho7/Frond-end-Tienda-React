import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { currencyFormat } from 'helpers/utils';
import { Form, InputGroup } from 'react-bootstrap';
interface StockDetailsBuyAndSellFormProps {
  title: string;
}

const StockDetailsBuyAndSellForm = ({
  title
}: StockDetailsBuyAndSellFormProps) => {
  return (
    <>
      <div className="mb-3">
        <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
          Order type
        </label>
        <Form.Select>
          <option value="market">Market {title}</option>
          <option value="share">Share {title}</option>
        </Form.Select>
      </div>
      <div className="mb-3">
        <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
          Shares
        </label>
        <Form.Control type="text" placeholder="Enter shares" />
      </div>
      <div className="mb-3">
        <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
          Amount
        </label>
        <InputGroup>
          <InputGroup.Text className="border-end-0">$</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            className="input-spin-none"
          />
        </InputGroup>
      </div>
      <div className="mb-3">
        <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
          Account
        </label>
        <Form.Select>
          <option value="">Select account</option>
          <option value="debit">Debit</option>
        </Form.Select>
      </div>
      <div className="d-flex flex-between-center gap-3 mb-3">
        <h5 className="mb-0 text-body fw-semibold">
          {title === 'buy' ? 'Available cash' : 'Available shares'}
        </h5>
        <p className="mb-0">
          {title === 'buy'
            ? `${currencyFormat(65.89, { minimumFractionDigits: 2 })} USD`
            : 100}
        </p>
      </div>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary" size="sm" className="flex-1 text-capitalize">
          {title} Share
        </Button>
        <Button variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon={faClock} />
        </Button>
        <Button variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </div>
    </>
  );
};

export default StockDetailsBuyAndSellForm;
