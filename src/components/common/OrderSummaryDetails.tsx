import { currencyFormat } from 'helpers/utils';
// import React from 'react';
import { CartItemType } from 'data/e-commerce/products';
interface EcomCartTableProps {
  products: CartItemType[];
}
const OrderSummaryDetails = ({ products }: EcomCartTableProps) => {
      const subtotalItems = products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      // Descuento (si no tienes, queda en 0)
      const discount = 0;

      // Impuestos (ejemplo: IVA 12%)
      const taxRate = 0.12;
      const taxes = subtotalItems * taxRate;

      // Subtotal después de impuestos y descuento
      const subtotal = subtotalItems - discount + taxes;

      // Costo de envío
      const shippingCost = 30;


  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Subtotal de artículos :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(subtotalItems)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Descuento :</p>
        <p className="text-danger fw-semibold">-{currencyFormat(0)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Impuestos :</p>
        <p className="text-body-emphasis fw-semibold">
          {currencyFormat(taxes)}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Subtotal :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(subtotal)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Costo de envío :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(shippingCost)}</p>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
