import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import { Card, Col, Dropdown, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router';
import OrderDetailsSummaryCard from 'components/cards/OrderDetailsSummaryCard';
import {
  BillingDetails,
  ShippingDetails
} from 'components/modules/e-commerce/OrderDeliveryDetails';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import {
  faChevronDown,
  faPrint,
  faUndo
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;

// Tipos para el detalle de orden
export interface OrderProduct {
  id: string;
  productId: string;
  name: string;
  code: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
  subtotal: number;
  iva: number;
  discount: number;
  total: number;
}

export interface OrderDetailData {
  id: string;
  orderNumber: string;
  customer: {
    id: string;
    name: string;
    email: string;
    img?: string;
  };
  billing: {
    name: string;
    email: string;
    phone: string;
    address: string;
    reference?: string;
  };
  shipping: {
    address: string;
    phone: string;
    reference?: string;
    method: string;
  };
  products: OrderProduct[];
  summary: {
    itemsSubtotal: number;
    iva: number;
    discount: number;
    shipping: number;
    total: number;
  };
  status: {
    payment: 'pending' | 'paid' | 'cancelled' | 'failed' | 'refunded';
    fulfillment: 'unfulfilled' | 'fulfilled' | 'partial' | 'ready_pickup' | 'delivered' | 'cancelled' | 'delayed';
  };
  createdAt: string;
}

// Mapeos de estados
const PAYMENT_STATUS_MAP: Record<string, number> = {
  pending: 0,
  paid: 1,
  cancelled: 2,
  failed: 3,
  refunded: 4
};

const FULFILLMENT_STATUS_MAP: Record<string, number> = {
  unfulfilled: 0,
  fulfilled: 1,
  partial: 2,
  ready_pickup: 3,
  delivered: 4,
  cancelled: 5,
  delayed: 6
};

const PAYMENT_STATUS_LABELS: Record<string, string> = {
  pending: 'Pendiente',
  paid: 'Pagado',
  cancelled: 'Cancelado',
  failed: 'Fallido',
  refunded: 'Reembolsado'
};

const FULFILLMENT_STATUS_LABELS: Record<string, string> = {
  unfulfilled: 'Sin cumplir',
  fulfilled: 'Cumplido',
  partial: 'Parcial',
  ready_pickup: 'Listo para recoger',
  delivered: 'Entregado',
  cancelled: 'Cancelado',
  delayed: 'Retrasado'
};

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [orderData, setOrderData] = useState<OrderDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>('pending');
  const [fulfillmentStatus, setFulfillmentStatus] = useState<string>('unfulfilled');

  // Fetch order details
  const fetchOrderDetail = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/orders/detail/${id}`, {
        headers: { 'x-token': token || '' }
      });

      const data = await response.json();

      if (data.ok) {
        setOrderData(data.order);
        setPaymentStatus(data.order.status.payment);
        setFulfillmentStatus(data.order.status.fulfillment);
      } else {
        toast.error(data.msg || 'Error al cargar el detalle de la orden');
      }
    } catch (error) {
      console.error('Error fetching order detail:', error);
      toast.error('Error de red al cargar el detalle');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOrderDetail();
  }, [fetchOrderDetail]);

  // Actualizar estado de pago
  const handlePaymentStatusChange = async (newStatus: string) => {
    if (!id) return;

    setUpdatingStatus(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/orders/${id}/payment-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token || ''
        },
        body: JSON.stringify({ paymentStatus: PAYMENT_STATUS_MAP[newStatus] })
      });

      const data = await response.json();

      if (data.ok) {
        setPaymentStatus(newStatus);
        toast.success('Estado de pago actualizado');
      } else {
        toast.error(data.msg || 'Error al actualizar estado de pago');
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
      toast.error('Error de red al actualizar');
    } finally {
      setUpdatingStatus(false);
    }
  };

  // Actualizar estado de cumplimiento
  const handleFulfillmentStatusChange = async (newStatus: string) => {
    if (!id) return;

    setUpdatingStatus(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/orders/${id}/fulfillment-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token || ''
        },
        body: JSON.stringify({ fulfillmentStatus: FULFILLMENT_STATUS_MAP[newStatus] })
      });

      const data = await response.json();

      if (data.ok) {
        setFulfillmentStatus(newStatus);
        toast.success('Estado de cumplimiento actualizado');
      } else {
        toast.error(data.msg || 'Error al actualizar estado');
      }
    } catch (error) {
      console.error('Error updating fulfillment status:', error);
      toast.error('Error de red al actualizar');
    } finally {
      setUpdatingStatus(false);
    }
  };

  // Imprimir orden
  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Cargando detalle de orden...</span>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="text-center py-5">
        <h4 className="text-body-tertiary">Orden no encontrada</h4>
        <Link to="/admin/apps/e-commerce/admin/orders" className="btn btn-primary mt-3">
          Volver a órdenes
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-1">
          Orden <span>#{orderData.orderNumber}</span>
        </h2>
        <div className="d-flex flex-wrap flex-between-center mb-3 gap-2">
          <p className="text-body-secondary lh-sm mb-0">
            Customer ID :{' '}
            <Link className="fw-bold" to={`/admin/apps/e-commerce/admin/customer-details/${orderData.customer.id}`}>
              {orderData.customer.id.substring(0, 8)}
            </Link>
          </p>
          <div className="d-flex">
            <Button
              variant="link"
              className="ps-0 pe-3 text-body text-decoration-none"
              startIcon={<FontAwesomeIcon icon={faPrint} className="me-2" />}
              onClick={handlePrint}
            >
              Imprimir
            </Button>
            <Button
              variant="link"
              className="px-3 text-body text-decoration-none"
              startIcon={<FontAwesomeIcon icon={faUndo} className="me-2" />}
              onClick={() => handlePaymentStatusChange('refunded')}
            >
              Reembolsar
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                className="ps-3 pe-0 dropdown-caret-none text-decoration-none"
              >
                Más acciones
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item onClick={() => handlePaymentStatusChange('cancelled')}>
                  Cancelar orden
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFulfillmentStatusChange('fulfilled')}>
                  Marcar como cumplida
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleFulfillmentStatusChange('delivered')}>
                  Marcar como entregada
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Row className="g-5 gy-7">
          <Col xs={12} xl={8} xxl={9}>
            <div className="mb-6">
              <OrderDetailsTable products={orderData.products} />
            </div>
            <Row className="gx-4 gy-6 g-xl-7 justify-content-sm-center justify-content-xl-start">
              <Col xs={12} sm="auto">
                <BillingDetails billing={orderData.billing} customer={orderData.customer} />
              </Col>

              <Col xs={12} sm="auto">
                <ShippingDetails
                  shipping={orderData.shipping}
                  createdAt={orderData.createdAt}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={4} xxl={3}>
            <OrderDetailsSummaryCard
              className="mb-4"
              summary={orderData.summary}
            />
            <Card>
              <Card.Body>
                <Card.Title as="h3" className="mb-4">
                  Estado de la Orden
                </Card.Title>
                <h6 className="mb-2">Estado de pago</h6>
                <Form.Select
                  className="mb-4"
                  value={paymentStatus}
                  onChange={(e) => handlePaymentStatusChange(e.target.value)}
                  disabled={updatingStatus}
                >
                  {Object.entries(PAYMENT_STATUS_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </Form.Select>
                <h6 className="mb-2">Estado de cumplimiento</h6>
                <Form.Select
                  value={fulfillmentStatus}
                  onChange={(e) => handleFulfillmentStatusChange(e.target.value)}
                  disabled={updatingStatus}
                >
                  {Object.entries(FULFILLMENT_STATUS_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderDetails;
