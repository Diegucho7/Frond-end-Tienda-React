import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderSummaryDetails from 'components/common/OrderSummaryDetails';
import { currencyFormat } from 'helpers/utils';
import { Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router';
import { CartItemType } from 'data/e-commerce/products';
// import FeatherIcon from 'feather-icons-react';
interface EcomCartTableProps {
  products: CartItemType[];
}
const EcomCartSummaryCard = ({ products }: EcomCartTableProps) => {
  const subtotalItems = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = 0;
  const taxRate = 0.12;
  const taxes = subtotalItems * taxRate;
  const shippingCost = 30;

  const total = subtotalItems - discount + taxes + shippingCost;

  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-between-center mb-3">
          <h3 className="mb-0">Resumen</h3>
          <Link to="#!" className="btn btn-link p-0">
            Editar carrito
          </Link>
        </div>
        <Form.Select className="mb-3">
          <option value="cod">Cash on Delivery</option>
          <option value="card">Tarjeta</option>
          <option value="paypal">Paypal</option>
        </Form.Select>
        <OrderSummaryDetails products={products} />
        <InputGroup className="mb-3">
          <FormControl placeholder="Voucher" aria-label="voucher" />
          <Button variant="phoenix-primary" className="px-5">
            Apply
          </Button>
        </InputGroup>
        <div className="d-flex justify-content-between border-y border-dashed border-translucent py-3 mb-4">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-">
            {currencyFormat(total, { minimumFractionDigits: 2 })}
          </h4>
        </div>
        <Button
          as={Link}
          // to="/apps/e-commerce/customer/shipping-info"
          to="/shipping-info"
          className="w-100"
          variant="primary"
          endIcon={
            <FontAwesomeIcon icon={faChevronRight} className="ms-1 fs-10" />
          }
        >
          Realizar pedido
        </Button>

      </Card.Body>
    </Card >
  );
};

export default EcomCartSummaryCard;
