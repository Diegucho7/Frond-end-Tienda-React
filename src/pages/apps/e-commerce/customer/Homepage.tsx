import EcomCategoryNavs from 'components/navs/EcomCategoryNavs';
import { Col, Container, Row } from 'react-bootstrap';
import EcomWhopingBanner from 'components/banners/EcomWhopingBanner';
import EcomGiftItemsBanner from 'components/banners/EcomGiftItemsBanner';
import EcomBestInMarketBanner from 'components/banners/EcomBestInMarketBanner';
import {
  bestOfferProducts,
  Product,
  ProductsTableProductType,
  topDealsProducts,
  topElectronicProducts
} from 'data/e-commerce/products';
import ecom4 from 'assets/img/e-commerce/4.png';
import EcomTopDeals from 'components/sliders/EcomTopDeals';
import EcomTopElectronics from 'components/sliders/EcomTopElectronics';
import EcomBestOffers from 'components/sliders/EcomBestOffers';
import EcomBecomeMember from 'components/cta/EcomBecomeMember';
import { useEffect, useState } from 'react';

const Homepage = () => {



  const [productsData, setProductsData] = useState<Product[]>([]);


  useEffect(() => {

    const tablaDatos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos', {
          method: 'GET',

        });

        const json = await response.json();
        const mappedProducts: Product[] = json.products.map((item: any) => ({
          id: item.IdProduct,
          name: item.name,
          image: `http://localhost:3000/api/uploads/productos/${item.imagenes[0]}`, // ajusta si tienes otra ruta
          price: parseFloat(item.price) + 10,
          salePrice: parseFloat(item.price),
          // category: item.marca, // puedes reemplazar con el nombre si tienes un mapa de categorías
          // tags: [item.marca], // podrías agregar tags desde item.description si quieres
          starred: true, // valor predeterminado
          extra: item.category,
          publishedOn: new Date().toLocaleString(), // o usa fecha real si la tienes
          verified: true
        }));

        setProductsData(mappedProducts);
      } catch (err) {
        console.error('Error al obtener productos:', err);
      }
    };
    tablaDatos();
  }, []);
  const electronic = productsData.filter(p => p.extra === '9cadc34c-bdd8-11f0-b33c-88c237c94b1c');
  const technology = productsData.filter(p => p.extra === 'f383ff28-bdc8-11f0-b33c-88c237c94b1c');
  const beauty = productsData.filter(p => p.extra === 'f31f54c1-ddf9-11ef-93cc-9c81b2f8c3e7');
  const toys = productsData.filter(p => p.extra === '87dd7e16-dc5b-11ef-93cc-9c81b2f8c3e7');
  const home = productsData.filter(p => p.extra === 'f739d381-ddf9-11ef-93cc-9c81b2f8c3e7');
  const accesories = productsData.filter(p => p.extra === 'ee884bdd-ddf9-11ef-93cc-9c81b2f8c3e7');


  return (
    <div className="ecommerce-homepage pt-5 mb-9">
      <section className="py-0">
        <div className="container-small">
          <div className="scrollbar">
            <EcomCategoryNavs />
          </div>
        </div>
      </section>
      <section className="py-0 px-xl-3">
        <Container className="px-xl-0 px-xxl-3">
          <Row className="g-3 mb-9">
            <Col xs={12}>
              <EcomWhopingBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomGiftItemsBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomBestInMarketBanner />
            </Col>
          </Row>
          <Row className="g-4 mb-6">
            <Col xs={12} lg={9} xxl={10}>
              <EcomTopDeals products={productsData} />
            </Col>
            <Col lg={3} xxl={2} className="d-none d-lg-block">
              <div className="h-100 position-relative rounded-3 overflow-hidden">
                <div
                  className="bg-holder product-bg"
                  style={{
                    backgroundImage: `url(${ecom4})`
                  }}
                />
              </div>
            </Col>
          </Row>
          <div className="mb-6">
            <EcomTopElectronics products={electronic} title="Electrodomesticos" />
          </div>
          <div className="mb-6">
            <EcomTopElectronics products={beauty} title="Belleza" />
          </div>
          <div className="mb-6">
            <EcomTopElectronics products={technology} title="Tecnología" />
          </div>
          <div className="mb-6">
            <EcomTopElectronics products={toys} title="Juguetes" />
          </div>
          <div className="mb-6">
            <EcomTopElectronics products={home} title="Hogar" />
          </div>
          <div className="mb-6">
            <EcomTopElectronics products={accesories} title="Accesorios" />
          </div>
          <div className="mb-6">
            <EcomBestOffers products={bestOfferProducts} />
          </div>
          <EcomBecomeMember />
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
