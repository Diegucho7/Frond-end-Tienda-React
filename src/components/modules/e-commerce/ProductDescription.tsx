import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import { productColorVariants } from 'data/e-commerce';
import { currencyFormat } from 'helpers/utils';
import ProductGallery from 'components/modules/e-commerce/ProductGallery';
import { useMemo, useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import QuantityButtons from 'components/common/QuantityButtons';
import { faShareAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductDescriptionProps } from 'data/e-commerce/products';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;



const ProductDescription = ({ products }: ProductDescriptionProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const hoy = new Date();
  const diaSemana = hoy.getDay();
  const diasHastaSabado = 6 - diaSemana;

  const sabado = new Date(hoy);
  sabado.setDate(hoy.getDate() + diasHastaSabado);
  const [selectedVariantKey] = useState('blue');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const fechaSabado = sabado.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const enviarCarritoCompras = async () => {
    // Verificar si el usuario está logueado
    const token = localStorage.getItem('token');

    if (!token || !user) {
      toast.warning(
        <div>
          <p className="mb-2">Debes iniciar sesión para agregar productos al carrito</p>
          <Button
            size="sm"
            variant="primary"
            onClick={() => navigate('/authentication/sign-in')}
          >
            Iniciar sesión
          </Button>
        </div>,
        {
          autoClose: 5000,
          closeOnClick: false,
        }
      );
      return;
    }

    setIsAdding(true);
    try {
      const response = await fetch(`${API_URL}/api/shoppingcart/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token
        },
        body: JSON.stringify({
          productId: products[0].IdProduct,
          quantity: quantity,
          activo: 1,
          createdAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('¡Producto agregado al carrito!');
      } else {
        // Verificar si el error es porque el producto ya está en el carrito
        if (data.msg?.includes('ya') || response.status === 400) {
          toast.info('Este producto ya está en tu carrito. Puedes modificar la cantidad desde el carrito.');
        } else if (response.status === 401) {
          toast.error('Tu sesión ha expirado. Por favor inicia sesión nuevamente.');
          navigate('/authentication/sign-in');
        } else {
          toast.error(data.msg || 'Error al agregar el producto');
        }
      }
    } catch (error) {
      console.error('Error de red:', error);
      toast.error('Error de conexión. Intenta de nuevo.');
    } finally {
      setIsAdding(false);
    }
  }

  const selectedVariant = useMemo(() => {
    return productColorVariants.find(
      variant => variant.id === selectedVariantKey
    );
  }, [selectedVariantKey]);
  if (!products || products.length === 0) {
    return <p>Cargando producto...</p>;
  }
  return (
    <Row className="g-5 mb-5 mb-lg-8">
      <Col xs={12} lg={6}>
        {selectedVariant && products?.length ? (
          <ProductGallery
            images={products[0].imagenes.map(
              img => `${API_URL}/api/uploads/productos/${img}`
            )}
          />
        ) : (
          <p>No hay imágenes disponibles</p>
        )}
        <div className="d-flex">
          {/* <Button
            variant="outline-warning"
            size="lg"
            className="rounded-pill w-100 me-3 px-2 px-sm-4 fs--1 fs-sm-0"
          >
            <FontAwesomeIcon icon={faHeart} className="me-2" />
            Add to wishlist
          </Button> */}
          {/* <Button
            variant="warning"
            size="lg"
            className="rounded-pill w-100 px-2 px-sm-4 fs--1 fs-sm-0"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            Agregar al carrito de Compras
          </Button> */}
          <Button
            variant="warning"
            size="lg"
            className="rounded-pill w-100 px-2 px-sm-4 fs--1 fs-sm-0"
            onClick={enviarCarritoCompras}
            disabled={isAdding || products[0]?.stock < 1}
          >
            {isAdding ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" />
                Agregando...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                {products[0]?.stock < 1 ? 'Sin stock' : 'Agregar al carrito'}
              </>
            )}
          </Button>
          <ToastContainer />

        </div>
      </Col>
      <Col xs={12} lg={6}>
        {/* <Stack className="justify-content-between h-100"> */}
        <Stack className="justify-content-between h-50">
          <div className="mb-3">
            <div className="d-flex flex-wrap">
              <div className="me-2">
                <Rating readonly initialValue={5} />
              </div>
              <p className="text-primary fw-semibold mb-2">
                Producto recomendado
              </p>
            </div>
            <h3 className="mb-3 lh-sm">
              {products[0].name || 'Product Name Not Available'}
            </h3>
            <div className="d-flex flex-wrap align-items-start mb-3">
              {/*<span className="badge bg-success fs-9 rounded-pill me-2 fw-semibold">*/}
              {/*  #1 Best seller*/}
              {/*</span>*/}

            </div>
            <div className="d-flex flex-wrap align-items-center">
              <h1 className="me-3">{currencyFormat(Number(products[0].price) || 0)}</h1>
              <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                {currencyFormat((Number(products[0].price) * 1.10) || 0)}
              </p>
              <p className="text-warning-dark fw-bolder fs-6 mb-0">10% off</p>
            </div>
            {products[0].stock > 1
              ? <p className="text-success fw-semibold fs-7 mb-2">En stock</p>
              : <p className="text-danger fw-semibold fs-7 mb-2">Sin stock</p>
            }
            <p>
              <strong className="text-body-highlight">
                ¿Lo quieres para el {fechaSabado}?
              </strong>{" "}
              Elige{" "}
              <strong className="text-body-highlight">Entrega en Sábado.</strong>{" "}
              {/*al finalizar la compra si quieres que tu pedido llegue dentro de 12 horas*/}
              {/*43 minutos.{" "}*/}
              {/*<Link className="fw-bold" to="#!">*/}
              {/*  Detalles*/}
              {/*</Link>{" "}*/}
              <strong className="text-body-highlight">
                El envoltorio para regalo está disponible.
              </strong>
            </p>
            {/*<p className="text-danger-dark fw-bold mb-5 mb-lg-0">*/}
            {/*  Special offer ends in 23:00:45 hours*/}
            {/*</p>*/}
          </div>

          <div>
            {/* <div className="mb-3">
              <p className="fw-semibold mb-2 text-body">
                Color :{' '}
                <span className="text-body-emphasis">
                  {selectedVariant?.name}
                </span>
              </p>
              <ProductColorNav
                selectedVariantKey={selectedVariantKey}
                setSelectedVariantKey={setSelectedVariantKey}
              />
            </div> */}
            <div className="row g-3 g-sm-5 align-items-end">
              {/* <div className="col-12 col-sm-auto">
                <p className="fw-semibold mb-2 text-body">Size : </p>
                <div className="d-flex align-items-center">
                  <select className="form-select w-auto">
                    <option value="44">44</option>
                    <option value="22">22</option>
                    <option value="18">18</option>
                  </select>
                  <a className="ms-2 fs-9 fw-semibold" href="#!">
                    Size chart
                  </a>
                </div>
              </div> */}
              <div className="col-12 col-sm">
                <p className="fw-semibold mb-2 text-body">Cantidad : </p>
                <div className="d-flex justify-content-between align-items-end">
                  <QuantityButtons
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  <Button variant="phoenix-primary" className="px-3 border-0">
                    <FontAwesomeIcon icon={faShareAlt} className="fs-7" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Col>
    </Row>
  );
};

export default ProductDescription;
