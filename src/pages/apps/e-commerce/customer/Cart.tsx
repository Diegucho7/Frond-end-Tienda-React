import Section from 'components/base/Section';
import EcomCartSummaryCard from 'components/cards/EcomCartSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EcomCartTable from 'components/tables/EcomCartTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { cartItems, CartItemType, Product } from 'data/e-commerce/products';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const [productsData, setProductsData] = useState<CartItemType[]>([]);

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
        console.log(json);

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
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-6">Carrito de Compras</h2>
        <Row className="g-5">
          <Col xs={12} lg={8}>
            <EcomCartTable products={productsData} />
          </Col>
          <Col xs={12} lg={4}>
            <EcomCartSummaryCard products={productsData} />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Cart;
