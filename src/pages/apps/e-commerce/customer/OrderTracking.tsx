import {
  faCheck,
  faPhone,
  faEnvelope,
  faBox,
  faTruck,
  faTruckFast,
  faClipboardCheck,
  faSearch,
  faChevronRight,
  faMapMarkerAlt,
  faCreditCard,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Section from 'components/base/Section';
import PageBreadcrumb, { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import { useCallback, useEffect, useState } from 'react';
import { Card, Col, Row, Form, Spinner, Badge, Alert } from 'react-bootstrap';
import { Link, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { currencyFormat } from 'helpers/utils';
import confetti from 'canvas-confetti';

const API_URL = import.meta.env.VITE_API_URL;

// Tipos
interface OrderProduct {
  id: string;
  productId: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  total: number;
}

interface OrderData {
  id: string;
  orderNumber: string;
  total: number;
  status: {
    payment: string;
    fulfillment: string;
  };
  shipping: {
    address: string;
    phone: string;
    method: string;
  };
  products: OrderProduct[];
  createdAt: string;
}

// Mapeo de estados para timeline
const STATUS_STEPS = [
  { key: 'processing', label: 'Orden Recibida', icon: faClipboardCheck, description: 'Tu orden ha sido confirmada' },
  { key: 'preparing', label: 'Preparando', icon: faBox, description: 'Estamos preparando tu pedido' },
  { key: 'shipped', label: 'En Camino', icon: faTruck, description: 'Tu pedido está en ruta' },
  { key: 'delivered', label: 'Entregado', icon: faTruckFast, description: '¡Pedido entregado!' }
];

const getStatusIndex = (paymentStatus: string, fulfillmentStatus: string): number => {
  if (fulfillmentStatus === 'delivered') return 3;
  if (fulfillmentStatus === 'fulfilled' || fulfillmentStatus === 'ready_pickup') return 2;
  if (paymentStatus === 'paid') return 1;
  return 0;
};

const getPaymentLabel = (status: string): { label: string; variant: string } => {
  const map: Record<string, { label: string; variant: string }> = {
    pending: { label: 'Pendiente', variant: 'warning' },
    paid: { label: 'Pagado', variant: 'success' },
    cancelled: { label: 'Cancelado', variant: 'secondary' },
    failed: { label: 'Fallido', variant: 'danger' },
    refunded: { label: 'Reembolsado', variant: 'info' }
  };
  return map[status] || { label: status, variant: 'secondary' };
};

const getFulfillmentLabel = (status: string): { label: string; variant: string } => {
  const map: Record<string, { label: string; variant: string }> = {
    unfulfilled: { label: 'Procesando', variant: 'warning' },
    fulfilled: { label: 'Completado', variant: 'success' },
    partial: { label: 'Parcial', variant: 'info' },
    ready_pickup: { label: 'Listo para Recoger', variant: 'primary' },
    delivered: { label: 'Entregado', variant: 'success' },
    cancelled: { label: 'Cancelado', variant: 'secondary' },
    delayed: { label: 'Retrasado', variant: 'danger' }
  };
  return map[status] || { label: status, variant: 'secondary' };
};

const formatDate = (dateString: string): string => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Componente de animación de confirmación
const ConfirmationAnimation = ({ show, email }: { show: boolean; email?: string }) => {
  useEffect(() => {
    if (show) {
      // Confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="text-center mb-5">
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
        style={{
          width: 120,
          height: 120,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
          animation: 'pulse 2s infinite'
        }}
      >
        <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: 50 }} />
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4); }
            50% { transform: scale(1.05); box-shadow: 0 15px 50px rgba(16, 185, 129, 0.5); }
            100% { transform: scale(1); box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4); }
          }
        `}
      </style>
      <h2 className="text-success mb-2">¡Orden Confirmada!</h2>
      <p className="text-body-secondary fs-5 mb-0">
        Tu pedido ha sido recibido y está siendo procesado
      </p>
      {email && (
        <div className="mt-4 p-3 bg-primary bg-opacity-10 rounded-3 d-inline-block">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
          <span className="text-body-emphasis">
            Hemos enviado un correo de confirmación a <strong>{email}</strong>
          </span>
        </div>
      )}
    </div>
  );
};

// Componente de Timeline de progreso
const OrderProgressTimeline = ({ currentStep }: { currentStep: number }) => {
  return (
    <Card className="mb-5 border-0 shadow-sm">
      <Card.Body className="p-4">
        <h5 className="mb-4 text-body-emphasis">
          <FontAwesomeIcon icon={faTruck} className="me-2 text-primary" />
          Estado del Envío
        </h5>
        <div className="position-relative">
          {/* Progress bar background */}
          <div
            className="position-absolute bg-body-secondary rounded-pill"
            style={{
              top: 20,
              left: 40,
              right: 40,
              height: 4,
              zIndex: 0
            }}
          />
          {/* Progress bar active */}
          <div
            className="position-absolute rounded-pill"
            style={{
              top: 20,
              left: 40,
              width: `${(currentStep / (STATUS_STEPS.length - 1)) * (100 - 20)}%`,
              height: 4,
              background: 'linear-gradient(90deg, #10b981, #3b82f6)',
              transition: 'width 0.5s ease-in-out',
              zIndex: 1
            }}
          />

          <Row className="position-relative" style={{ zIndex: 2 }}>
            {STATUS_STEPS.map((step, index) => {
              const isCompleted = index <= currentStep;
              const isCurrent = index === currentStep;

              return (
                <Col key={step.key} className="text-center">
                  <div
                    className={`d-inline-flex align-items-center justify-content-center rounded-circle mb-3 ${isCompleted ? '' : 'bg-body-secondary'
                      }`}
                    style={{
                      width: 44,
                      height: 44,
                      background: isCompleted
                        ? 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
                        : undefined,
                      boxShadow: isCurrent ? '0 4px 15px rgba(59, 130, 246, 0.4)' : undefined,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FontAwesomeIcon
                      icon={isCompleted ? faCheck : step.icon}
                      className={isCompleted ? 'text-white' : 'text-body-tertiary'}
                      style={{ fontSize: 16 }}
                    />
                  </div>
                  <h6 className={`mb-1 ${isCompleted ? 'text-body-emphasis' : 'text-body-tertiary'}`}>
                    {step.label}
                  </h6>
                  <p className="text-body-tertiary small mb-0 d-none d-md-block">
                    {step.description}
                  </p>
                </Col>
              );
            })}
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

// Componente de búsqueda de orden
const OrderSearchForm = ({ onSearch, loading }: { onSearch: (email: string) => void; loading: boolean }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSearch(email.trim());
    }
  };

  return (
    <Card className="border-0 shadow-sm mb-5">
      <Card.Body className="p-4">
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: 60,
              height: 60,
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
            }}
          >
            <FontAwesomeIcon icon={faSearch} className="text-white fs-4" />
          </div>
          <h4 className="mb-2">Buscar tu Orden</h4>
          <p className="text-body-secondary mb-0">
            Ingresa tu correo electrónico para ver el estado de tus órdenes
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <div className="d-flex gap-2">
                <Form.Control
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <FontAwesomeIcon icon={faSearch} />
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

// Componente de producto de orden
const OrderProductItem = ({ product }: { product: OrderProduct }) => {
  const imageSrc = product.image
    ? `${API_URL}/api/uploads/productos/${product.image}`
    : '/placeholder-product.png';

  return (
    <div className="d-flex align-items-center py-3 border-bottom border-translucent">
      <div
        className="flex-shrink-0 rounded-3 border border-translucent overflow-hidden me-3"
        style={{ width: 60, height: 60 }}
      >
        <img
          src={imageSrc}
          alt={product.name}
          className="w-100 h-100 object-fit-cover"
        />
      </div>
      <div className="flex-grow-1 min-width-0">
        <h6 className="mb-1 text-truncate">{product.name}</h6>
        <p className="text-body-tertiary small mb-0">
          Cantidad: {product.quantity} × {currencyFormat(product.price)}
        </p>
      </div>
      <div className="text-end">
        <span className="fw-bold text-body-emphasis">
          {currencyFormat(product.total || product.price * product.quantity)}
        </span>
      </div>
    </div>
  );
};

// Componente principal de detalle de orden
const OrderDetailCard = ({ order, isNew = false, userEmail }: { order: OrderData; isNew?: boolean; userEmail?: string }) => {
  const currentStep = getStatusIndex(order.status.payment, order.status.fulfillment);
  const paymentBadge = getPaymentLabel(order.status.payment);
  const fulfillmentBadge = getFulfillmentLabel(order.status.fulfillment);

  return (
    <>
      {isNew && <ConfirmationAnimation show={isNew} email={userEmail} />}

      <Card className="border-0 shadow-sm mb-4">
        <Card.Header className="bg-transparent border-bottom-0 pt-4 pb-0">
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <h3 className="mb-0">Orden #{order.orderNumber}</h3>
                {isNew && (
                  <Badge bg="success" className="fs-10">
                    ¡Nueva!
                  </Badge>
                )}
              </div>
              <p className="text-body-secondary mb-0">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                {formatDate(order.createdAt)}
              </p>
            </div>
            <div className="d-flex gap-2">
              <Badge bg={paymentBadge.variant} className="px-3 py-2">
                <FontAwesomeIcon icon={faCreditCard} className="me-1" />
                {paymentBadge.label}
              </Badge>
              <Badge bg={fulfillmentBadge.variant} className="px-3 py-2">
                <FontAwesomeIcon icon={faTruck} className="me-1" />
                {fulfillmentBadge.label}
              </Badge>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="pt-4">
          <OrderProgressTimeline currentStep={currentStep} />

          <Row className="g-4">
            {/* Productos */}
            <Col xs={12} lg={7}>
              <Card className="h-100 border">
                <Card.Header className="bg-body-tertiary bg-opacity-50">
                  <h5 className="mb-0">
                    <FontAwesomeIcon icon={faBox} className="me-2 text-primary" />
                    Productos ({order.products.length})
                  </h5>
                </Card.Header>
                <Card.Body className="p-0">
                  <div className="px-3" style={{ maxHeight: 300, overflowY: 'auto' }}>
                    {order.products.map((product) => (
                      <OrderProductItem key={product.id} product={product} />
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-transparent">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">Total del pedido:</span>
                    <span className="fs-4 fw-bold text-primary">
                      {currencyFormat(order.total)}
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>

            {/* Información de envío */}
            <Col xs={12} lg={5}>
              <Card className="h-100 border">
                <Card.Header className="bg-body-tertiary bg-opacity-50">
                  <h5 className="mb-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                    Información de Envío
                  </h5>
                </Card.Header>
                <Card.Body>
                  <div className="mb-4">
                    <small className="text-body-tertiary text-uppercase fw-semibold">
                      Dirección de entrega
                    </small>
                    <p className="mb-0 mt-1">{order.shipping.address}</p>
                  </div>
                  <div className="mb-4">
                    <small className="text-body-tertiary text-uppercase fw-semibold">
                      Teléfono de contacto
                    </small>
                    <p className="mb-0 mt-1">
                      <Link to={`tel:${order.shipping.phone}`} className="text-body-emphasis">
                        {order.shipping.phone}
                      </Link>
                    </p>
                  </div>
                  <div>
                    <small className="text-body-tertiary text-uppercase fw-semibold">
                      Método de envío
                    </small>
                    <p className="mb-0 mt-1 text-capitalize">
                      {order.shipping.method || 'Estándar'}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Acciones */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="py-4">
          <Row className="align-items-center g-3">
            <Col xs={12} md={6}>
              <p className="text-body-secondary mb-0">
                ¿Tienes preguntas sobre tu orden? Estamos aquí para ayudarte.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div className="d-flex flex-wrap justify-content-md-end gap-2">
                <Button variant="phoenix-secondary">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Enviar Consulta
                </Button>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Llamar Soporte
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

// Lista de órdenes del usuario
const OrdersList = ({ orders, userEmail }: { orders: OrderData[]; userEmail?: string }) => {
  if (orders.length === 0) {
    return (
      <Alert variant="info" className="text-center py-5">
        <FontAwesomeIcon icon={faBox} className="fs-1 mb-3 d-block mx-auto text-info" />
        <h5>No se encontraron órdenes</h5>
        <p className="mb-3">No hay órdenes asociadas a este correo electrónico.</p>
        <Button as={Link} to="/products-filter" variant="primary">
          Explorar Productos
          <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
        </Button>
      </Alert>
    );
  }

  return (
    <>
      <h4 className="mb-4">
        Tus Órdenes ({orders.length})
      </h4>
      {orders.map((order, index) => (
        <OrderDetailCard key={order.id} order={order} isNew={index === 0} userEmail={userEmail} />
      ))}
    </>
  );
};

// Componente principal
const OrderTracking = () => {
  const location = useLocation();
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [showNewOrderConfirmation, setShowNewOrderConfirmation] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const breadcrumbItems: PageBreadcrumbItem[] = [
    { label: 'Inicio', url: '/homepage' },
    { label: 'Mi Cuenta', url: '/profile' },
    { label: 'Seguimiento de Orden', active: true }
  ];

  // Verificar si venimos de completar una orden
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromCheckout = params.get('from') === 'checkout';

    if (fromCheckout) {
      setShowNewOrderConfirmation(true);
      // Obtener el email guardado del checkout
      const savedEmail = sessionStorage.getItem('orderEmail');
      if (savedEmail) {
        setUserEmail(savedEmail);
        // Limpiar después de usar
        sessionStorage.removeItem('orderEmail');
        sessionStorage.removeItem('lastOrderId');
      }
      // Cargar la última orden del usuario
      fetchUserOrders();
    }
  }, [location]);

  // Fetch órdenes del usuario autenticado
  const fetchUserOrders = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setOrders([]);
        setLoading(false);
        return;
      }

      const response = await fetch(`${API_URL}/api/orders/my-orders`, {
        headers: { 'x-token': token }
      });

      const data = await response.json();

      if (data.ok && data.orders) {
        // Necesitamos obtener el detalle completo de cada orden
        const ordersWithDetails = await Promise.all(
          data.orders.slice(0, 5).map(async (order: any) => {
            try {
              const detailResponse = await fetch(`${API_URL}/api/orders/detail/${order.id}`, {
                headers: { 'x-token': token }
              });
              const detailData = await detailResponse.json();
              return detailData.ok ? detailData.order : null;
            } catch {
              return null;
            }
          })
        );

        setOrders(ordersWithDetails.filter(Boolean));
        setSearched(true);
      }
    } catch (error) {
      console.error('Error fetching user orders:', error);
      toast.error('Error al cargar tus órdenes');
    } finally {
      setLoading(false);
    }
  }, []);

  // Buscar órdenes por email (para usuarios no autenticados)
  const handleSearchByEmail = async (_email: string) => {
    setLoading(true);
    setSearched(true);

    try {
      // Primero intentamos con el token del usuario
      // TODO: En el futuro, implementar búsqueda por email en el backend
      const token = localStorage.getItem('token');

      const response = await fetch(`${API_URL}/api/orders/my-orders`, {
        headers: { 'x-token': token || '' }
      });

      const data = await response.json();

      if (data.ok && data.orders) {
        const ordersWithDetails = await Promise.all(
          data.orders.slice(0, 5).map(async (order: any) => {
            try {
              const detailResponse = await fetch(`${API_URL}/api/orders/detail/${order.id}`, {
                headers: { 'x-token': token || '' }
              });
              const detailData = await detailResponse.json();
              return detailData.ok ? detailData.order : null;
            } catch {
              return null;
            }
          })
        );

        setOrders(ordersWithDetails.filter(Boolean));

        if (ordersWithDetails.filter(Boolean).length > 0) {
          toast.success(`Se encontraron ${ordersWithDetails.filter(Boolean).length} órdenes`);
        }
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error('Error searching orders:', error);
      toast.error('Error al buscar órdenes');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // Cargar órdenes si el usuario está autenticado
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !showNewOrderConfirmation) {
      fetchUserOrders();
    }
  }, [fetchUserOrders, showNewOrderConfirmation]);

  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={breadcrumbItems} />

        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3">
            Seguimiento de tu Orden
          </h1>
          <p className="text-body-secondary fs-5 mb-0">
            Mantente informado sobre el estado de tu pedido en tiempo real
          </p>
        </div>

        {!searched && !loading && (
          <OrderSearchForm onSearch={handleSearchByEmail} loading={loading} />
        )}

        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" className="mb-3" />
            <p className="text-body-secondary">Buscando tus órdenes...</p>
          </div>
        )}

        {searched && !loading && (
          <OrdersList orders={orders} userEmail={userEmail} />
        )}

        {!searched && !loading && (
          <Row className="g-4 mt-4">
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                  style={{
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                  }}
                >
                  <FontAwesomeIcon icon={faClipboardCheck} className="text-white fs-4" />
                </div>
                <h5>Confirmación Inmediata</h5>
                <p className="text-body-secondary small mb-0">
                  Recibe confirmación instantánea de tu pedido por email
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                  style={{
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                  }}
                >
                  <FontAwesomeIcon icon={faTruck} className="text-white fs-4" />
                </div>
                <h5>Seguimiento en Tiempo Real</h5>
                <p className="text-body-secondary small mb-0">
                  Rastrea tu paquete desde que sale hasta que llega
                </p>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                  style={{
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} className="text-white fs-4" />
                </div>
                <h5>Soporte 24/7</h5>
                <p className="text-body-secondary small mb-0">
                  Nuestro equipo está disponible para ayudarte siempre
                </p>
              </Card>
            </Col>
          </Row>
        )}
      </Section>
    </div>
  );
};

export default OrderTracking;
