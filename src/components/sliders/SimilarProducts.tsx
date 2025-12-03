import { Product } from 'data/e-commerce/products';
import ProductCard from 'components/common/ProductCard';
import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';
import Button from 'components/base/Button';
import { Link } from 'react-router';

interface SimilarProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const SimilarProducts = ({
  products,
  title = 'Productos Relacionados',
  subtitle = 'También te podría interesar'
}: SimilarProductsProps) => {
  if (products.length === 0) return null;

  return (
    <>
      <div className="d-flex flex-between-center mb-3">
        <div>
          <h3>{title}</h3>
          <p className="mb-0 text-body-tertiary fw-semibold">
            {subtitle}
          </p>
        </div>
        <Link to="/products-filter">
          <Button variant="phoenix-primary" size="sm">
            Ver todos
          </Button>
        </Link>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigationPosition={{ top: '25%' }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 16
          }
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SimilarProducts;
