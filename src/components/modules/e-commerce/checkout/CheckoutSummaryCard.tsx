import { CartItemType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import { Link } from 'react-router';
import { calculateOrderSummary, TAX_RATE, FREE_SHIPPING_THRESHOLD } from 'components/common/OrderSummaryDetails';

interface CheckoutSummaryCardProps {
  products: CartItemType[];
  discount?: number;
  discountPercent?: number;
}

const CheckoutSummaryCard = ({
  products,
  discount = 0,
  discountPercent = 0
}: CheckoutSummaryCardProps) => {
  const summary = calculateOrderSummary(products, discount, discountPercent);

  if (products.length === 0) {
    return (
      <Card>
        <Card.Body className="text-center py-5">
          <p className="text-body-tertiary mb-3">Tu carrito está vacío</p>
          <Link to="/products-filter" className="btn btn-primary btn-sm">
            Ver productos
          </Link>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="mb-0">Resumen</h3>
          <Link to="/cart" className="btn btn-link pe-0">
            Editar carrito
          </Link>
        </div>

        {/* Lista de productos */}
        <div className="border-dashed border-bottom border-translucent mb-4">
          <div className="ms-n2 mb-4">
            {products.map(item => (
              <Row className="align-items-center g-3 mb-3" key={item.id}>
                <Col xs={8} md={7} lg={8}>
                  <div className="d-flex align-items-center">
                    <div
                      className="me-2 ms-1 rounded overflow-hidden flex-shrink-0"
                      style={{ width: 45, height: 45 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <h6 className="fw-semibold text-body-highlight lh-base line-clamp-2 mb-0">
                      {item.name}
                    </h6>
                  </div>
                </Col>
                <Col xs={2} md={3} lg={2}>
                  <h6 className="fs-10 mb-0 text-body-tertiary">x{item.quantity}</h6>
                </Col>
                <Col xs={2} className="ps-0">
                  <h6 className="mb-0 fw-semibold text-end">
                    {currencyFormat(item.price * item.quantity, { minimumFractionDigits: 2 })}
                  </h6>
                </Col>
              </Row>
            ))}
          </div>
        </div>

        {/* Desglose de precios */}
        <div className="border-dashed border-bottom border-translucent mb-3">
          {/* Subtotal de artículos */}
          <div className="d-flex justify-content-between mb-2">
            <h6 className="text-body fw-semibold mb-0">
              Artículos ({summary.itemCount}):
            </h6>
            <h6 className="text-body fw-semibold mb-0">
              {currencyFormat(summary.subtotal, { minimumFractionDigits: 2 })}
            </h6>
          </div>

          {/* Descuento (solo si aplica) */}
          {summary.discount > 0 && (
            <div className="d-flex justify-content-between mb-2">
              <h6 className="text-body fw-semibold mb-0">Descuento:</h6>
              <h6 className="text-success fw-semibold mb-0">
                -{currencyFormat(summary.discount, { minimumFractionDigits: 2 })}
              </h6>
            </div>
          )}

          {/* IVA */}
          <div className="d-flex justify-content-between mb-2">
            <h6 className="text-body fw-semibold mb-0">
              IVA ({(TAX_RATE * 100).toFixed(0)}%):
            </h6>
            <h6 className="text-body fw-semibold mb-0">
              {currencyFormat(summary.taxes, { minimumFractionDigits: 2 })}
            </h6>
          </div>

          {/* Costo de envío */}
          <div className="d-flex justify-content-between mb-3">
            <h6 className="text-body fw-semibold mb-0">Envío:</h6>
            <h6 className={`fw-semibold mb-0 ${summary.shipping === 0 ? 'text-success' : 'text-body'}`}>
              {summary.shipping === 0
                ? '¡Gratis!'
                : currencyFormat(summary.shipping, { minimumFractionDigits: 2 })
              }
            </h6>
          </div>

          {/* Mensaje de envío gratis */}
          {summary.shipping > 0 && (
            <div className="bg-info-subtle text-info-emphasis rounded p-2 mb-3">
              <small>
                💡 Agrega {currencyFormat(FREE_SHIPPING_THRESHOLD - summary.subtotal + summary.discount, { minimumFractionDigits: 2 })} más para envío gratis
              </small>
            </div>
          )}
        </div>

        {/* Total */}
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Total:</h4>
          <div className="text-end">
            {summary.discount > 0 && (
              <small className="text-body-tertiary text-decoration-line-through d-block">
                {currencyFormat(summary.subtotal + summary.taxes + summary.shipping, { minimumFractionDigits: 2 })}
              </small>
            )}
            <h4 className="mb-0 text-primary">
              {currencyFormat(summary.total, { minimumFractionDigits: 2 })}
            </h4>
          </div>
        </div>

        {/* Badge de ahorro */}
        {summary.discount > 0 && (
          <div className="text-center mt-3">
            <Badge bg="success" className="px-3 py-2">
              ¡Ahorras {currencyFormat(summary.discount, { minimumFractionDigits: 2 })}!
            </Badge>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CheckoutSummaryCard;
