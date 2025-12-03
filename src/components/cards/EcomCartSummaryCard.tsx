import { faChevronRight, faTag, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderSummaryDetails, { calculateOrderSummary } from 'components/common/OrderSummaryDetails';
import { currencyFormat } from 'helpers/utils';
import { Card, Form, FormControl, InputGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router';
import { CartItemType } from 'data/e-commerce/products';
import { useState } from 'react';
import { toast } from 'react-toastify';

// Cupones de ejemplo (en producción esto vendría del backend)
const VALID_COUPONS: Record<string, { type: 'percent' | 'fixed'; value: number; minPurchase?: number }> = {
  'DESCUENTO10': { type: 'percent', value: 10 },
  'DESCUENTO20': { type: 'percent', value: 20, minPurchase: 200 },
  'AHORRA50': { type: 'fixed', value: 50, minPurchase: 300 },
  'PRIMERACOMPRA': { type: 'percent', value: 15 },
};

interface EcomCartSummaryCardProps {
  products: CartItemType[];
  onCheckout?: () => void;
}

const EcomCartSummaryCard = ({ products, onCheckout }: EcomCartSummaryCardProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Calcular resumen
  const summary = calculateOrderSummary(products, discount, discountPercent);

  // Aplicar cupón
  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      toast.warning('Ingresa un código de cupón');
      return;
    }

    if (appliedCoupon) {
      toast.warning('Ya tienes un cupón aplicado. Remuévelo primero.');
      return;
    }

    const coupon = VALID_COUPONS[code];

    if (!coupon) {
      toast.error('Cupón inválido');
      return;
    }

    // Verificar compra mínima
    if (coupon.minPurchase && summary.subtotal < coupon.minPurchase) {
      toast.error(`Este cupón requiere una compra mínima de ${currencyFormat(coupon.minPurchase)}`);
      return;
    }

    // Aplicar descuento
    if (coupon.type === 'percent') {
      setDiscountPercent(coupon.value);
      setDiscount(0);
      toast.success(`¡Cupón aplicado! ${coupon.value}% de descuento`);
    } else {
      setDiscount(coupon.value);
      setDiscountPercent(0);
      toast.success(`¡Cupón aplicado! ${currencyFormat(coupon.value)} de descuento`);
    }

    setAppliedCoupon(code);
    setCouponCode('');
  };

  // Remover cupón
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
    setDiscountPercent(0);
    toast.info('Cupón removido');
  };

  // Verificar si el carrito está vacío
  const isCartEmpty = products.length === 0;

  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-between-center mb-3">
          <h3 className="mb-0">Resumen</h3>
          {!isCartEmpty && (
            <span className="text-body-tertiary small">
              {summary.itemCount} {summary.itemCount === 1 ? 'artículo' : 'artículos'}
            </span>
          )}
        </div>

        {/* Método de pago */}
        <Form.Select
          className="mb-3"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          disabled={isCartEmpty}
        >
          <option value="card">💳 Tarjeta de crédito/débito</option>
          <option value="paypal">🅿️ PayPal</option>
          <option value="transfer">🏦 Transferencia bancaria</option>
          <option value="cod">📦 Pago contra entrega</option>
        </Form.Select>

        {/* Detalles del resumen */}
        <OrderSummaryDetails
          products={products}
          discount={discount}
          discountPercent={discountPercent}
        />

        {/* Cupón aplicado */}
        {appliedCoupon && (
          <div className="d-flex justify-content-between align-items-center bg-success-subtle rounded p-2 mb-3">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTag} className="text-success me-2" />
              <span className="text-success-emphasis fw-semibold small">
                {appliedCoupon}
              </span>
            </div>
            <Button
              variant="link"
              className="p-0 text-danger"
              onClick={handleRemoveCoupon}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        )}

        {/* Input de cupón */}
        {!appliedCoupon && (
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Código de cupón"
              aria-label="coupon"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
              disabled={isCartEmpty}
            />
            <Button
              variant="phoenix-primary"
              className="px-4"
              onClick={handleApplyCoupon}
              disabled={isCartEmpty}
            >
              Aplicar
            </Button>
          </InputGroup>
        )}

        {/* Total */}
        <div className="d-flex justify-content-between border-y border-dashed border-translucent py-3 mb-4">
          <h4 className="mb-0">Total :</h4>
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

        {/* Ahorro total */}
        {summary.discount > 0 && (
          <div className="text-center mb-3">
            <Badge bg="success" className="px-3 py-2">
              ¡Estás ahorrando {currencyFormat(summary.discount, { minimumFractionDigits: 2 })}!
            </Badge>
          </div>
        )}

        {/* Botón de checkout */}
        <Button
          as={Link}
          to="/shipping-info"
          className="w-100"
          variant="primary"
          disabled={isCartEmpty}
          endIcon={
            <FontAwesomeIcon icon={faChevronRight} className="ms-1 fs-10" />
          }
          onClick={onCheckout}
        >
          {isCartEmpty ? 'Carrito vacío' : 'Realizar pedido'}
        </Button>

        {/* Métodos de pago aceptados */}
        <div className="text-center mt-3">
          <small className="text-body-tertiary">
            Pago seguro • Envíos a todo el país
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomCartSummaryCard;
