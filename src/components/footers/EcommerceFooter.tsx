import {
  faFacebookSquare,
   faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/common/Logo';
import { PropsWithChildren } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router';

const LinkItem = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <Link to={to} className="text-body-tertiary fw-semibold fs-9 mb-1">
      {children}
    </Link>
  );
};

const EcommerceFooter = () => {
  return (
    <section className="bg-body-highlight dark__bg-gray-1100 py-9">
      <div className="container-small">
        <Row className="justify-content-between gy-4">
          <Col xs={12} lg={4}>
            <Logo className="mb-3" />
            <p className="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">
              En ViviShop.info queremos hacer tu día más fácil. Realiza tus pedidos desde donde estés y nosotros nos encargamos del resto. Te entregamos tus productos de manera rápida y segura, para que disfrutes la comodidad de comprar sin complicaciones.
            </p>
          </Col>
          {/*<Col xs={6} md="auto">*/}
          {/*  <h5 className="fw-bolder mb-3">About Phoenix</h5>*/}
          {/*  <Stack>*/}
          {/*    <LinkItem to="#!">Careers</LinkItem>*/}
          {/*    <LinkItem to="#!">Affiliate Program</LinkItem>*/}
          {/*    <LinkItem to="#!">Privacy Policy</LinkItem>*/}
          {/*    <LinkItem to="#!">Terms & Conditions</LinkItem>*/}
          {/*  </Stack>*/}
          {/*</Col>*/}
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Próximamente</h5>
            <Stack>
              <LinkItem to="#!">Blogs</LinkItem>
              <Link to="#!" className="mb-1 fw-semibold fs-9">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-primary me-2 fs-8"
                />
                <span className="text-body-secondary">Facebook</span>
              </Link>
              <Link to="#!" className="mb-1 fw-semibold fs-9">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-info me-2 fs-8"
                />
                <span className="text-body-secondary">X</span>
              </Link>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Servicio al Cliente</h5>
            <Stack>
              <LinkItem to="#!">Atención al cliente</LinkItem>
              <LinkItem to="#!">Soporte, 24/7</LinkItem>
              {/*<LinkItem to="#!">Community of Phoenix</LinkItem>*/}
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="fw-bolder mb-3">Metodos de pago</h5>
            <Stack>
              <LinkItem to="#!">Próximamente</LinkItem>
              {/*<LinkItem to="#!">Online Payment</LinkItem>*/}
              {/*<LinkItem to="#!">PayPal</LinkItem>*/}
              {/*<LinkItem to="#!">Installment</LinkItem>*/}
            </Stack>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EcommerceFooter;
