import whoopingBannerProduct from 'assets/img/e-commerce/aretes-removebg-preview.png';
import whoopingBannerShape2 from 'assets/img/e-commerce/whooping_banner_shape_2.png';
import { Link } from 'react-router';

const EcomWhopingBanner = () => {
  return (
    <div className="whooping-banner w-1000 rounded-3 overflow-hidden">
      <div
        className="bg-holder product-bg"
        style={{
          backgroundImage: `url(${whoopingBannerProduct})`,
          backgroundPosition: 'bottom right'
        }}
      />
      <div
        className="bg-holder shape-bg"
        style={{
          backgroundImage: `url(${whoopingBannerShape2})`,
          backgroundPosition: 'bottom left'
        }}
      />

      <div className="position-relative">
        <div className="banner-text" data-bs-theme="light">
          <h2 className="text-warning-light fw-bolder fs-lg-3 fs-xxl-2">
            ViviShop.info
          </h2>
          <h3 className="fw-bolder fs-lg-5 fs-xxl-3 text-white">
            Busca lo que tanto necesitas
          </h3>
          <h2>
            <br/>
            <span className="gradient-text">Pide en línea</span>

          </h2>

        </div>
        <Link
          to="/apps/e-commerce/customer/products-filter"
          className="btn btn-lg btn-primary rounded-pill banner-button"
        >
          Compra ahora        </Link>
      </div>
    </div>
  );
};

export default EcomWhopingBanner;
