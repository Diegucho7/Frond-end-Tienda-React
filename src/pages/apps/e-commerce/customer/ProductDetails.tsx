import ProductDescription from 'components/modules/e-commerce/ProductDescription';
import ProductDetailsTab from 'components/modules/e-commerce/ProductDetailsTab';
import { Product, ProductoType } from 'data/e-commerce/products';
import SimilarProducts from 'components/sliders/SimilarProducts';
import Section from 'components/base/Section';
import PageBreadcrumb, { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const API_URL = import.meta.env.VITE_API_URL;

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [productDetalle, setProductDetail] = useState<ProductoType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loadingRelated, setLoadingRelated] = useState(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState<PageBreadcrumbItem[]>([
    { label: 'Inicio', url: '/' }
  ]);

  // Cargar producto
  useEffect(() => {
    if (!id) return;

    const fetchProducto = async () => {
      try {
        const response = await fetch(`${API_URL}/api/productos/${id}`);
        const data = await response.json();
        setProductDetail(data);

        // Una vez que tenemos el producto, cargar breadcrumbs y productos relacionados
        if (data.ok && data.products?.[0]) {
          const producto = data.products[0];
          await fetchBreadcrumb(producto.category, producto.subcategory, producto.name);
          await fetchRelatedProducts(producto.category, producto.subcategory, producto.IdProduct);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducto();
  }, [id]);

  // Cargar breadcrumbs dinámicos
  const fetchBreadcrumb = async (categoryId: string, subcategoryId: string, productName: string) => {
    try {
      const items: PageBreadcrumbItem[] = [
        { label: 'Inicio', url: '/' },
        { label: 'Productos', url: '/products-filter' }
      ];

      if (categoryId) {
        const url = subcategoryId
          ? `${API_URL}/api/categorias/breadcrumb/${categoryId}/${subcategoryId}`
          : `${API_URL}/api/categorias/breadcrumb/${categoryId}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.ok && data.breadcrumb) {
          data.breadcrumb.forEach((item: { name: string; url: string }) => {
            items.push({
              label: item.name,
              url: item.url
            });
          });
        }
      }

      if (productName) {
        items.push({
          label: productName.length > 40 ? productName.substring(0, 40) + '...' : productName,
          active: true
        });
      }

      setBreadcrumbItems(items);
    } catch (error) {
      console.error('Error fetching breadcrumb:', error);
    }
  };

  // Cargar productos relacionados (misma categoría o subcategoría)
  const fetchRelatedProducts = async (categoryId: string, subcategoryId: string, currentProductId: string) => {
    try {
      setLoadingRelated(true);

      // Intentar primero con subcategoría, si no hay resultados usar categoría
      let url = `${API_URL}/api/productos/relacionados/${categoryId}`;
      if (subcategoryId) {
        url += `/${subcategoryId}`;
      }
      url += `?exclude=${currentProductId}&limit=12`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.ok && data.products) {
        const mappedProducts: Product[] = data.products.map((item: any) => ({
          id: item.IdProduct,
          name: item.name,
          image: item.imagenes?.[0]
            ? `${API_URL}/api/uploads/productos/${item.imagenes[0]}`
            : undefined,
          price: parseFloat(item.price) + 10,
          salePrice: parseFloat(item.price),
          category: item.categoria,
          extra: item.categoria,
          brand: item.marca,
          starred: true,
          verified: true
        }));

        setRelatedProducts(mappedProducts);
      } else {
        // Fallback: cargar todos los productos y filtrar
        await fetchAllProductsAsRelated(categoryId, subcategoryId, currentProductId);
      }
    } catch (error) {
      console.error('Error fetching related products:', error);
      // Fallback
      await fetchAllProductsAsRelated(categoryId, subcategoryId, currentProductId);
    } finally {
      setLoadingRelated(false);
    }
  };

  // Fallback: cargar todos y filtrar por categoría
  const fetchAllProductsAsRelated = async (categoryId: string, subcategoryId: string, currentProductId: string) => {
    try {
      const response = await fetch(`${API_URL}/api/productos`);
      const data = await response.json();

      if (data.products) {
        let filtered = data.products.filter((item: any) => item.IdProduct !== currentProductId);

        // Primero intentar filtrar por subcategoría
        if (subcategoryId) {
          const bySubcategory = filtered.filter((item: any) => item.subcategory === subcategoryId);
          if (bySubcategory.length >= 4) {
            filtered = bySubcategory;
          }
        }

        // Si no hay suficientes por subcategoría, filtrar por categoría
        if (filtered.length < 4 && categoryId) {
          filtered = data.products.filter((item: any) =>
            item.IdProduct !== currentProductId && item.category === categoryId
          );
        }

        // Limitar a 12 productos
        filtered = filtered.slice(0, 12);

        const mappedProducts: Product[] = filtered.map((item: any) => ({
          id: item.IdProduct,
          name: item.name,
          image: item.imagenes?.[0]
            ? `${API_URL}/api/uploads/productos/${item.imagenes[0]}`
            : undefined,
          price: parseFloat(item.price) + 10,
          salePrice: parseFloat(item.price),
          category: item.categoria,
          extra: item.categoria,
          brand: item.marca,
          starred: true,
          verified: true
        }));

        setRelatedProducts(mappedProducts);
      }
    } catch (error) {
      console.error('Error in fallback:', error);
    }
  };

  if (!productDetalle || !productDetalle.products || productDetalle.products.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3 text-body-tertiary">Cargando producto...</p>
      </div>
    );
  }

  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={breadcrumbItems} className="mb-3" />
        <ProductDescription products={productDetalle?.products || []} />
      </Section>

      <Section small className="py-0">
        <div className="mb-9">
          <ProductDetailsTab products={productDetalle?.products || []} />
        </div>
      </Section>

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <Section className="py-0">
          <SimilarProducts products={relatedProducts} />
        </Section>
      )}

      {/* Loading de productos relacionados */}
      {loadingRelated && (
        <Section className="py-0">
          <div className="text-center py-4">
            <div className="spinner-border spinner-border-sm text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2 text-body-tertiary small">Cargando productos relacionados...</p>
          </div>
        </Section>
      )}
    </div>
  );
};

export default ProductDetails;
