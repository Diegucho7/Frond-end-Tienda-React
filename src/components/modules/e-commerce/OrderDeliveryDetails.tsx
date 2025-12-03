import OrderInfoItem from 'components/info-items/OrderInfoItem';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface BillingDetailsProps {
  billing?: {
    name: string;
    email: string;
    phone: string;
    address: string;
    reference?: string;
  };
  customer?: {
    id: string;
    name: string;
    email: string;
    img?: string;
  };
}

interface ShippingDetailsProps {
  shipping?: {
    address: string;
    phone: string;
    reference?: string;
    method: string;
  };
  createdAt?: string;
}

const formatDate = (dateString?: string): string => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const getDeliveryMethodLabel = (method?: string): string => {
  const methodMap: Record<string, string> = {
    standard: 'Envío estándar',
    express: 'Express',
    free: 'Envío gratis',
    local_pickup: 'Retiro local',
    local_delivery: 'Entrega local',
    cash_on_delivery: 'Pago contra entrega',
    efectivo: 'Pago en efectivo'
  };
  return method ? (methodMap[method] || method) : 'No especificado';
};

export const BillingDetails = ({ billing, customer }: BillingDetailsProps) => {
  const name = billing?.name || customer?.name || 'No especificado';
  const email = billing?.email || customer?.email || 'No especificado';
  const phone = billing?.phone || 'No especificado';
  const address = billing?.address || 'No especificado';

  return (
    <>
      <h4 className="mb-5">Detalles de facturación</h4>
      <Row className="g-4 flex-sm-column">
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="user" label="Cliente" />
          {customer?.id ? (
            <Link className="fs-9 ms-4" to={`/admin/apps/e-commerce/admin/customer-details/${customer.id}`}>
              {name}
            </Link>
          ) : (
            <span className="fs-9 ms-4 text-body-secondary">{name}</span>
          )}
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="mail" label="Email" />
          <Link className="fs-9 ms-4" to={`mailto:${email}`}>
            {email}
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="phone" label="Teléfono" />
          <Link className="fs-9 ms-4" to={`tel:${phone}`}>
            {phone}
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="home" label="Dirección" />
          <div className="ms-4">
            <p className="text-body-secondary mb-0 fs-9">{name}</p>
            <p className="text-body-secondary mb-0 fs-9">
              {address}
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export const ShippingDetails = ({ shipping, createdAt }: ShippingDetailsProps) => {
  const address = shipping?.address || 'No especificado';
  const phone = shipping?.phone || 'No especificado';
  const reference = shipping?.reference;
  const method = getDeliveryMethodLabel(shipping?.method);

  return (
    <>
      <h4 className="mb-5">Detalles de envío</h4>
      <Row className="g-4 flex-sm-column">
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="truck" label="Método" />
          <p className="mb-0 text-body-secondary fs-9 ms-4">{method}</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="phone" label="Teléfono" />
          <Link className="fs-9 ms-4" to={`tel:${phone}`}>
            {phone}
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="calendar" label="Fecha de orden" />
          <p className="mb-0 text-body-secondary fs-9 ms-4">{formatDate(createdAt)}</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="home" label="Dirección" />
          <div className="ms-4">
            <p className="text-body-secondary mb-0 fs-9">
              {address}
            </p>
            {reference && (
              <p className="text-body-tertiary mb-0 fs-10">
                Ref: {reference}
              </p>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

// Componente legacy para mantener compatibilidad
export const OtherDetails = () => {
  return (
    <>
      <h4 className="mb-5">Otros detalles</h4>
      <Row className="g-4 flex-sm-column">
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="shopping-bag" label="Pedido regalo" />
          <p className="mb-0 text-body-secondary fs-9 ms-4">No</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="package" label="Empaque" />
          <p className="mb-0 text-body-secondary fs-9 ms-4">Estándar</p>
        </Col>
      </Row>
    </>
  );
};
