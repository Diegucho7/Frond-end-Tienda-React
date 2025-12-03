import { useState, useEffect, useMemo } from 'react';
import { Card, Col, Nav, Pagination, Row, Stack, Tab } from 'react-bootstrap';
import ProductSpecificationTables from './ProductSpecificationTables';
import Rating from 'components/base/Rating';
import Button from 'components/base/Button';
import { productReviews } from 'data/e-commerce';
import ProductReview from 'components/list-items/ProductReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewModal from 'components/modals/ReviewModal';
import UsuallyBoughtTogetherCard, { BoughtTogetherProduct } from 'components/cards/UsuallyBoughtTogetherCard';
import { ProductDescriptionProps } from 'data/e-commerce/products';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;

const ProductDetailsTab = ({ products }: ProductDescriptionProps) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [boughtTogetherProducts, setBoughtTogetherProducts] = useState<BoughtTogetherProduct[]>([]);
  const [loadingBoughtTogether, setLoadingBoughtTogether] = useState(false);

  const currentProduct = products?.[0];

  // Obtener imágenes del producto para el lightbox
  const productImages = useMemo(() => {
    if (currentProduct?.imagenes && currentProduct.imagenes.length > 0) {
      return currentProduct.imagenes.map(img => `${API_URL}/api/uploads/productos/${img}`);
    }
    return [];
  }, [currentProduct?.imagenes]);

  const { lightboxProps, openLightbox } = useLightbox(productImages);

  // Cargar productos "frecuentemente comprados juntos"
  useEffect(() => {
    if (!currentProduct?.category) return;

    const fetchBoughtTogether = async () => {
      setLoadingBoughtTogether(true);
      try {
        // Cargar productos de la misma categoría pero diferente subcategoría
        // o simplemente productos complementarios
        const response = await fetch(`${API_URL}/api/productos`);
        const data = await response.json();

        if (data.products) {
          // Filtrar productos de la misma categoría, excluyendo el actual
          let filtered = data.products.filter((item: any) =>
            item.IdProduct !== currentProduct.IdProduct &&
            item.category === currentProduct.category
          );

          // Si hay subcategoría, preferir productos de OTRA subcategoría (complementarios)
          if (currentProduct.subcategory && filtered.length > 3) {
            const otherSubcategory = filtered.filter((item: any) =>
              item.subcategory !== currentProduct.subcategory
            );
            if (otherSubcategory.length >= 3) {
              filtered = otherSubcategory;
            }
          }

          // Aleatorizar y tomar máximo 4
          filtered = filtered
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);

          const mappedProducts: BoughtTogetherProduct[] = filtered.map((item: any) => ({
            id: item.IdProduct,
            name: item.name,
            price: parseFloat(item.price),
            img: item.imagenes?.[0]
              ? `${API_URL}/api/uploads/productos/${item.imagenes[0]}`
              : '',
            checked: true
          }));

          setBoughtTogetherProducts(mappedProducts);
        }
      } catch (error) {
        console.error('Error loading bought together products:', error);
      } finally {
        setLoadingBoughtTogether(false);
      }
    };

    fetchBoughtTogether();
  }, [currentProduct?.IdProduct, currentProduct?.category, currentProduct?.subcategory]);

  // Manejar agregar al carrito
  const handleAddToCart = (selectedProducts: BoughtTogetherProduct[]) => {
    // Aquí puedes integrar con tu sistema de carrito
    toast.success(`${selectedProducts.length} productos agregados al carrito`);
    console.log('Productos agregados:', selectedProducts);
  };

  return (
    <>
      <Tab.Container defaultActiveKey="description">
        <Nav variant="underline" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="description">Descripción</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="specification">Especificaciones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">Calificaciones y reseñas</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="gx-3 gy-7">
          <Col xs={12} lg={7} xl={8}>
            <Tab.Content>
              <Tab.Pane
                eventKey="description"
                className="text-body-emphasis pe-lg-6 pe-xl-12"
              >
                {/* Descripción del producto */}
                <div className="mb-5"
                  dangerouslySetInnerHTML={{
                    __html:
                      products && products.length > 0 && products[0].description
                        ? products[0].description
                        : '<p class="text-body-tertiary">No hay descripción disponible para este producto.</p>'
                  }}
                />

                {/* Galería de imágenes del producto (si hay más de una) */}
                {productImages.length > 1 && (
                  <>
                    <Lightbox {...lightboxProps} />
                    <div className="row g-3 mb-5">
                      {productImages.slice(0, 4).map((img, index) => (
                        <div key={index} className="col-6 col-md-3">
                          <img
                            src={img}
                            alt={`${currentProduct?.name || 'Producto'} - imagen ${index + 1}`}
                            className="img-fluid rounded-3 cursor-pointer hover-opacity-75"
                            style={{ cursor: 'pointer', aspectRatio: '1', objectFit: 'cover', width: '100%' }}
                            onClick={() => openLightbox(index + 1)}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="specification" className="pe-lg-6 pe-xl-12">
                <ProductSpecificationTables />
              </Tab.Pane>
              <Tab.Pane eventKey="reviews">
                <Card>
                  <Card.Header className="pb-0 border-bottom-0">
                    <Stack
                      gap={3}
                      direction="horizontal"
                      className="flex-wrap justify-content-between"
                    >
                      <div className="d-flex align-items-center flex-wrap">
                        <h2 className="fw-bolder me-3">
                          4.9
                          <span className="fs-8 text-body-quaternary fw-bold">
                            /5
                          </span>
                        </h2>
                        <div className="me-3">
                          <Rating
                            initialValue={4.5}
                            readonly
                            iconClass="fs-6"
                          />
                        </div>
                        <p className="text-body mb-0 fw-semibold fs-7">
                          6548 calificaciones y 567 reseñas
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={() => setOpenReviewModal(true)}
                      >
                        Calificar producto
                      </Button>
                    </Stack>
                  </Card.Header>
                  <Card.Body>
                    {productReviews.map(review => (
                      <ProductReview key={review.id} review={review} />
                    ))}

                    <Pagination className="mb-0 justify-content-center">
                      <Pagination.Prev>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </Pagination.Prev>
                      <Pagination.Item>1</Pagination.Item>
                      <Pagination.Item>2</Pagination.Item>
                      <Pagination.Item>3</Pagination.Item>
                      <Pagination.Item active>4</Pagination.Item>
                      <Pagination.Item>5</Pagination.Item>
                      <Pagination.Next>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Pagination.Next>
                    </Pagination>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col xs={12} lg={5} xl={4}>
            {loadingBoughtTogether ? (
              <Card>
                <Card.Body className="text-center py-5">
                  <div className="spinner-border spinner-border-sm text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <p className="mt-2 mb-0 text-body-tertiary small">Cargando sugerencias...</p>
                </Card.Body>
              </Card>
            ) : boughtTogetherProducts.length > 0 ? (
              <UsuallyBoughtTogetherCard
                products={boughtTogetherProducts}
                currentProductName={currentProduct?.name}
                onAddToCart={handleAddToCart}
              />
            ) : null}
          </Col>
        </Row>
      </Tab.Container>
      <ReviewModal
        show={openReviewModal}
        handleClose={() => setOpenReviewModal(false)}
      />
    </>
  );
};

export default ProductDetailsTab;
