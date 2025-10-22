import ProductDescription from 'components/modules/e-commerce/ProductDescription';
import ProductDetailsTab from 'components/modules/e-commerce/ProductDetailsTab';
import { ProductoType, topElectronicProducts } from 'data/e-commerce/products';
import SimilarProducts from 'components/sliders/SimilarProducts';
import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { ecomBreadcrumbItems } from 'data/commonData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const pathname = window.location.pathname;
  const id = pathname.split('/').pop();
  const [productDetalle, setProductDetail] = useState<ProductoType | null>(null);
  useEffect(() => {
    if (!id) return;
    const producto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/productos/${id}`);
        const data = await response.json();
        setProductDetail(data);
        console.log(data);

      } catch (error) {
        console.log('Error fetching product data:', error);
      }
    }; producto();
  }, []);
  if (!productDetalle || !productDetalle.products || productDetalle.products.length === 0) {
    return <p className="text-center py-5">Cargando producto...</p>;
  }
  return (

    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={ecomBreadcrumbItems} className="mb-3" />
        <ProductDescription products={productDetalle?.products || []} />
      </Section>

      <Section small className="py-0">
        <div className="mb-9">
          <ProductDetailsTab products={productDetalle?.products || []} />
        </div>
      </Section>

      <Section className="py-0">
        <SimilarProducts products={topElectronicProducts} />
      </Section>
    </div>
  );
};

export default ProductDetails;
