import classNames from 'classnames';
import { currencyFormat } from 'helpers/utils';
import { Card } from 'react-bootstrap';

interface OrderSummary {
  itemsSubtotal: number;
  iva: number;
  discount: number;
  shipping: number;
  total: number;
}

interface OrderDetailsSummaryCardProps {
  className?: string;
  summary?: OrderSummary;
}

const OrderDetailsSummaryCard = ({ className, summary }: OrderDetailsSummaryCardProps) => {
  // Valores por defecto si no hay summary
  const {
    itemsSubtotal = 0,
    iva = 0,
    discount = 0,
    shipping = 0,
    total = 0
  } = summary || {};

  const TAX_RATE = 0.15; // 15% IVA
  const calculatedIva = iva || itemsSubtotal * TAX_RATE;
  const FREE_SHIPPING_THRESHOLD = 500;

  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <Card.Title as="h3" className="mb-4">
          Resumen
        </Card.Title>

        <div className="border-bottom border-translucent border-dashed mb-4">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-body-tertiary fw-semibold">Artículos ({Math.round(itemsSubtotal / (total || 1) * 100) || 0}%) :</span>
            <span className="text-body-emphasis fw-semibold">
              {currencyFormat(itemsSubtotal)}
            </span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-body-tertiary fw-semibold">IVA (15%) :</span>
            <span className="text-body-emphasis fw-semibold">
              {currencyFormat(calculatedIva)}
            </span>
          </div>

          {discount > 0 && (
            <div className="d-flex justify-content-between mb-2">
              <span className="text-body-tertiary fw-semibold">Descuento :</span>
              <span className="text-danger fw-semibold">
                -{currencyFormat(discount)}
              </span>
            </div>
          )}

          <div className="d-flex justify-content-between mb-3">
            <span className="text-body-tertiary fw-semibold">Envío :</span>
            <span className={classNames('fw-semibold', {
              'text-success': shipping === 0,
              'text-body-emphasis': shipping > 0
            })}>
              {shipping === 0 ? '¡Gratis!' : currencyFormat(shipping)}
            </span>
          </div>

          {shipping > 0 && itemsSubtotal < FREE_SHIPPING_THRESHOLD && (
            <p className="text-body-tertiary fs-10 text-end mb-3">
              ¡Agrega {currencyFormat(FREE_SHIPPING_THRESHOLD - itemsSubtotal)} más para envío gratis!
            </p>
          )}
        </div>

        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-0">
            {currencyFormat(total, { minimumFractionDigits: 2 })}
          </h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderDetailsSummaryCard;
