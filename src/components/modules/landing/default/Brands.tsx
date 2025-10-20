import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import netflix from 'assets/img/brands/netflix.png';
import blender from 'assets/img/brands/blender.png';
import upwork from 'assets/img/brands/upwork.png';
import facebook from 'assets/img/brands/facebook.png';
import pocket from 'assets/img/brands/pocket.png';
import mailBluster from 'assets/img/brands/mail-bluster.png';
import discord from 'assets/img/brands/discord.png';
import google from 'assets/img/brands/google.png';

const Brand = ({ image, className }: { image: string; className?: string }) => {
  return (
    <div
      className={classNames(
        className,
        'p-2 p-lg-5 d-flex flex-center h-100 border-dashed border-translucent'
      )}
    >
      <img src={image} alt="" className="w-100" />
    </div>
  );
};

const Brands = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="container-small px-lg-7 px-xxl-3">
        <Row className="g-0">
          <Col xs={6} md={3}>
            <Brand
              image={netflix}
              className="border-bottom border-end border-translucent"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={blender}
              className="border-bottom border-end-md border-translucent"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={upwork}
              className="border-bottom border-end border-end-md border-translucent"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={facebook}
              className="border-bottom border-end-lg-0 border-translucent"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={pocket}
              className="border-end border-bottom border-bottom-md-0 border-translucent"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={mailBluster}
              className="border-end-md border-bottom border-bottom-md-0 border-translucent"
            />
          </Col>
          <Col xs={6} md={3}>
            <Brand image={discord} className="border-end border-translucent" />
          </Col>
          <Col xs={6} md={3}>
            <Brand
              image={google}
              className="border-end-lg-0 border-translucent"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Brands;
