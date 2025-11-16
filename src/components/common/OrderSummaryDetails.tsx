import { currencyFormat } from 'helpers/utils';
import React from 'react';
import { CartItemType } from 'data/e-commerce/products';
interface EcomCartTableProps {
  products: CartItemType[];
}
const OrderSummaryDetails = ({ products }: EcomCartTableProps) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Subtotal de artículos :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(691)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Descuento :</p>
        <p className="text-danger fw-semibold">-{currencyFormat(59)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Impuestos :</p>
        <p className="text-body-emphasis fw-semibold">
          {currencyFormat(126.2)}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Subtotal :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(665)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Costo de envío :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(30)}</p>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
