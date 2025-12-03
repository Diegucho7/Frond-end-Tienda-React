import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CheckoutSummaryCard from 'components/modules/e-commerce/checkout/CheckoutSummaryCard';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { CartItemType } from 'data/e-commerce/products';
import { TAX_RATE, calculateOrderSummary } from 'components/common/OrderSummaryDetails';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = import.meta.env.VITE_API_URL;

const ShippingInfo = () => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion1, setDireccion1] = useState('');
  const [direccion2, setDireccion2] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('Debes iniciar sesión');
          navigate('/authentication/sign-in');
          return;
        }

        // Cargar carrito
        const response = await fetch(`${API_URL}/api/shoppingcart`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token,
          },
        });

        const json = await response.json();

        const mappedProducts: CartItemType[] = (json.shoppingCart || json.products || []).map((item: any) => {
          const price = parseFloat(item.price);
          const quantity = item.quantity;
          const total = price * quantity;

          return {
            IdCart: item.IdCart,
            id: item.IdProduct,
            name: item.name,
            image: `${API_URL}/api/uploads/productos/${item.imagen ?? 'no-image.png'}`,
            color: 'white',
            size: 'small',
            price,
            quantity,
            total,
          };
        });

        if (mappedProducts.length === 0) {
          toast.warning('Tu carrito está vacío');
          navigate('/cart');
          return;
        }

        setProductsData(mappedProducts);

        // Cargar datos del usuario
        const userResp = await fetch(`${API_URL}/api/auth/renew/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token,
          },
        });
        const userData = await userResp.json();
        if (userData.usuario) {
          setNombre(userData.usuario.name || '');
          setEmail(userData.usuario.email || '');
        }
      } catch (err) {
        console.error('Error al obtener datos:', err);
        toast.error('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [navigate]);

  // Validar formulario
  const validarFormulario = () => {
    if (!nombre.trim()) {
      toast.error('Ingresa tu nombre completo');
      return false;
    }
    if (!email.trim() || !email.includes('@')) {
      toast.error('Ingresa un email válido');
      return false;
    }
    if (!telefono.trim()) {
      toast.error('Ingresa tu número de teléfono');
      return false;
    }
    if (!direccion1.trim()) {
      toast.error('Ingresa tu dirección');
      return false;
    }
    if (!ciudad.trim()) {
      toast.error('Selecciona una ciudad');
      return false;
    }
    if (!provincia.trim()) {
      toast.error('Selecciona una provincia');
      return false;
    }
    return true;
  };

  const enviarPedido = async () => {
    if (!validarFormulario()) return;

    setSubmitting(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Debes iniciar sesión para continuar.");
        navigate('/authentication/sign-in');
        return;
      }

      // Calcular resumen usando la función centralizada
      const summary = calculateOrderSummary(productsData);

      // Convertir carrito → formato backend
      const productos = productsData.map(p => {
        const precio = Number(p.price);
        const quantity = p.quantity;
        const subtotal = precio * quantity;
        const iva = subtotal * TAX_RATE;
        const total = subtotal + iva;

        return {
          factura: "N/A",
          IdProduct: p.id,
          precio,
          quantity,
          subtotal,
          iva,
          desc: 0,
          total,
          status: 1,
          method: 1
        };
      });

      // Crear objeto final con el total calculado correctamente
      const body = {
        nombre: nombre,
        direccion: `${direccion1}${direccion2 ? `, Referencia: ${direccion2}` : ''}, ${ciudad}, ${provincia}${codigoPostal ? ` - ${codigoPostal}` : ''}`,
        telefono: telefono,
        metodo: "efectivo",
        subtotal: summary.subtotal,
        impuestos: summary.taxes,
        envio: summary.shipping,
        descuento: summary.discount,
        total: summary.total,
        productos: productos,
        email: email
      };

      const resp = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(body),
      });

      const json = await resp.json();

      if (json.ok) {
        // Mostrar mensaje de éxito con confirmación de email
        if (json.emailEnviado) {
          toast.success(
            <div>
              <strong>¡Orden realizada correctamente!</strong>
              <br />
              <small>📧 Se ha enviado un correo de confirmación a {email}</small>
            </div>,
            { autoClose: 4000 }
          );
        } else {
          toast.success("¡Orden realizada correctamente!");
        }

        // Guardar email para la página de tracking
        sessionStorage.setItem('orderEmail', email);
        sessionStorage.setItem('lastOrderId', json.orden?.IdOrder || '');

        // Redirigir a página de confirmación o tracking
        setTimeout(() => {
          navigate('/order-tracking?from=checkout');
        }, 2000);
      } else {
        toast.error(json.msg || "Error creando la orden");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error enviando pedido");
    } finally {
      setSubmitting(false);
    }
  };
  // Breadcrumb personalizado
  const checkoutBreadcrumb = [
    { label: 'Inicio', url: '/' },
    { label: 'Carrito', url: '/cart' },
    { label: 'Checkout', active: true }
  ];

  if (loading) {
    return (
      <div className="pt-5 mb-9">
        <Section small className="py-0">
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-body-tertiary">Cargando información...</p>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={checkoutBreadcrumb} />
        <h2 className="mb-5">Finalizar Compra</h2>
        <Row className="justify-content-between gy-6 gx-5">
          <Col lg={7}>
            <h3 className="mb-4">Información de Envío</h3>
            <Row className="g-4">
              {/* Nombre */}
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Nombre Completo <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              {/* Email y Teléfono */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Teléfono <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+593 999999999"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              {/* Dirección */}
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Dirección <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Calle principal, número, sector"
                    value={direccion1}
                    onChange={(e) => setDireccion1(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              {/* Referencia */}
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Referencia (opcional)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cerca de..., frente a..., etc."
                    value={direccion2}
                    onChange={(e) => setDireccion2(e.target.value)}
                  />
                </Form.Group>
              </Col>

              {/* Ciudad, Provincia y Código Postal */}
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Ciudad <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    required
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Quito">Quito</option>
                    <option value="Guayaquil">Guayaquil</option>
                    <option value="Cuenca">Cuenca</option>
                    <option value="Ambato">Ambato</option>
                    <option value="Manta">Manta</option>
                    <option value="Machala">Machala</option>
                    <option value="Loja">Loja</option>
                    <option value="Riobamba">Riobamba</option>
                    <option value="Ibarra">Ibarra</option>
                    <option value="Esmeraldas">Esmeraldas</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Provincia <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    value={provincia}
                    onChange={(e) => setProvincia(e.target.value)}
                    required
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Pichincha">Pichincha</option>
                    <option value="Guayas">Guayas</option>
                    <option value="Azuay">Azuay</option>
                    <option value="Tungurahua">Tungurahua</option>
                    <option value="Manabí">Manabí</option>
                    <option value="El Oro">El Oro</option>
                    <option value="Loja">Loja</option>
                    <option value="Chimborazo">Chimborazo</option>
                    <option value="Imbabura">Imbabura</option>
                    <option value="Esmeraldas">Esmeraldas</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="text-body-highlight fw-semibold">
                    Código postal
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: 170150"
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                  />
                </Form.Group>
              </Col>

              {/* Botones */}
              <Col xs={12} className="mt-4">
                <Button
                  className="px-5 me-2"
                  type="button"
                  onClick={enviarPedido}
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />
                      Procesando...
                    </>
                  ) : (
                    '🛒 Confirmar Pedido'
                  )}
                </Button>
                <Button
                  as={Link}
                  to="/cart"
                  variant="phoenix-secondary"
                  className="text-nowrap"
                >
                  ← Volver al carrito
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={5} xl={{ span: 4, offset: 1 }}>
            <div className="position-sticky" style={{ top: '1rem' }}>
              <CheckoutSummaryCard products={productsData} />
            </div>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ShippingInfo;
