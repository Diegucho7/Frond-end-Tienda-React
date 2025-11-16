import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CheckoutSummaryCard from 'components/modules/e-commerce/checkout/CheckoutSummaryCard';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { CartItemType } from 'data/e-commerce/products';
import product from 'assets/img/e-commerce/5.png';

const ShippingInfo = () => {

  const [productsData, setProductsData] = useState<CartItemType[]>([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion1, setDireccion1] = useState('');
  const [direccion2, setDireccion2] = useState('');
  useEffect(() => {
    const tablaDatos = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.warn('No hay token en localStorage');
          return;
        }

        const response = await fetch('http://localhost:3000/api/shoppingcart', {
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
            image: `http://localhost:3000/api/uploads/productos/${item.imagen ?? 'no-image.png'}`,
            color: 'white',
            size: 'small',
            price,
            quantity,
            total,
          };
        });

        setProductsData(mappedProducts);
      } catch (err) {
        console.error('Error al obtener productos:', err);
      }
    };

    tablaDatos();
  }, []);

  const enviarPedido = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return alert("Debes iniciar sesión para continuar.");

      // Obtener datos del usuario
      const respUser = await fetch("http://localhost:3000/api/auth/renew/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
      });

      const userData = await respUser.json();

      // Convertir carrito → formato backend
      const productos = productsData.map(p => {
        const precio = Number(p.price);
        const quantity = p.quantity;
        const subtotal = precio * quantity;
        const iva = subtotal * 0.12;
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

      // Calcular total general
      const totalGeneral = productos.reduce((sum, p) => sum + p.total, 0);

      // Crear objeto final
      const body = {
        direccion: `${direccion1} Referencia: ${direccion2}`,
        telefono: telefono,      // También del formulario
        metodo: "efectivo",
        total: totalGeneral,
        productos: productos,
        email: email
      };

      const resp = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(body),
      });

      const json = await resp.json();

      if (json.ok) {
        alert("Pedido realizado con éxito");
        window.location.reload();
      } else {
        alert("Error creando la orden");
      }
    } catch (error) {
      console.error("Error enviando pedido:", error);
    }
  };
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-5">Check out</h2>
        <Row className="justify-content-between gy-6 gx-5">
          <Col lg={7}>
            <h3 className="mb-5">Información de Envío</h3>
            <Row className="g-4">
              <Col xs={12}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Nombre Completo
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Email
                  </label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Telefono
                  </label>
                  <Form.Control
                    type="tel"
                    placeholder="+593 999999999"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Dirección Línea 1
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="Dirección Línea 1"
                    value={direccion1}
                    onChange={(e) => setDireccion1(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Referencia
                  </label>
                  <Form.Control
                    type="text"
                    placeholder="Referencia"
                    value={direccion2}
                    onChange={(e) => setDireccion2(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Ciudad
                  </label>
                  <Form.Select defaultValue="van-nuys">
                    <option value="van-nuys">Van Nuys</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Provincia
                  </label>
                  <Form.Select defaultValue="california">
                    <option value="california">California</option>
                    <option value="Alaska">Alaska</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Código postal
                  </label>
                  <Form.Control type="text" placeholder="Zip code" />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                {/* <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Country
                  </label>
                  <Form.Select defaultValue="usa">
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="aus">AUS</option>
                    <option value="nz">NZ</option>
                  </Form.Select>
                </Form.Group> */}
              </Col>
              <Col xs={12}>
                <Button className="px-8 px-sm-11 me-2" type="button" onClick={enviarPedido}>
                  Pedir
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="text-nowrap"
                  type="button"
                >
                  Salir sin guardar
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={5} xl={{ span: 4, offset: 1 }}>
            <CheckoutSummaryCard products={productsData} />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ShippingInfo;
