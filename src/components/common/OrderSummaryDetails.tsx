import { currencyFormat } from 'helpers/utils';
import { CartItemType } from 'data/e-commerce/products';

// Configuración de impuestos y envío
export const TAX_RATE = 0.15; // 15% IVA
export const SHIPPING_COST = 30; // Costo de envío fijo
export const FREE_SHIPPING_THRESHOLD = 500; // Envío gratis arriba de este monto

export interface OrderSummary {
  subtotal: number;
  discount: number;
  taxes: number;
  shipping: number;
  total: number;
  itemCount: number;
}

export const calculateOrderSummary = (
  products: CartItemType[],
  discountAmount: number = 0,
  discountPercent: number = 0
): OrderSummary => {
  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const itemCount = products.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Calcular descuento (puede ser monto fijo o porcentaje)
  let discount = discountAmount;
  if (discountPercent > 0) {
    discount = subtotal * (discountPercent / 100);
  }

  // Subtotal después de descuento
  const subtotalAfterDiscount = subtotal - discount;

  // Impuestos sobre el subtotal después de descuento
  const taxes = subtotalAfterDiscount * TAX_RATE;

  // Envío gratis si supera el umbral
  const shipping = subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;

  // Total final
  const total = subtotalAfterDiscount + taxes + shipping;

  return {
    subtotal,
    discount,
    taxes,
    shipping,
    total,
    itemCount
  };
};

interface OrderSummaryDetailsProps {
  products: CartItemType[];
  discount?: number;
  discountPercent?: number;
  showShipping?: boolean;
}

const OrderSummaryDetails = ({
  products = [],
  discount = 0,
  discountPercent = 0,
  showShipping = true
}: OrderSummaryDetailsProps) => {

  const summary = calculateOrderSummary(products, discount, discountPercent);

  return (
    <div>
      {/* Cantidad de artículos */}
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold mb-2">
          Artículos ({summary.itemCount}) :
        </p>
        <p className="text-body-emphasis fw-semibold mb-2">
          {currencyFormat(summary.subtotal, { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Descuento */}
      {summary.discount > 0 && (
        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold mb-2">Descuento :</p>
          <p className="text-success fw-semibold mb-2">
            -{currencyFormat(summary.discount, { minimumFractionDigits: 2 })}
          </p>
        </div>
      )}

      {/* Impuestos (IVA) */}
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold mb-2">
          IVA ({(TAX_RATE * 100).toFixed(0)}%) :
        </p>
        <p className="text-body-emphasis fw-semibold mb-2">
          {currencyFormat(summary.taxes, { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Costo de envío */}
      {showShipping && (
        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold mb-2">Envío :</p>
          <p className={`fw-semibold mb-2 ${summary.shipping === 0 ? 'text-success' : 'text-body-emphasis'}`}>
            {summary.shipping === 0
              ? '¡Gratis!'
              : currencyFormat(summary.shipping, { minimumFractionDigits: 2 })
            }
          </p>
        </div>
      )}

      {/* Mensaje de envío gratis */}
      {showShipping && summary.shipping > 0 && (
        <div className="bg-warning-subtle text-warning-emphasis rounded p-2 mb-2">
          <small>
            ¡Agrega {currencyFormat(FREE_SHIPPING_THRESHOLD - summary.subtotal + summary.discount, { minimumFractionDigits: 2 })} más para envío gratis!
          </small>
        </div>
      )}
    </div>
  );
};

export default OrderSummaryDetails;
