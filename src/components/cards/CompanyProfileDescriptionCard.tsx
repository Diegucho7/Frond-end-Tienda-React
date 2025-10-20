import { Col } from 'react-bootstrap';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { CompanyProfileDescriptionItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CompanyProfileDescriptionCardProps {
  companyDetails: CompanyProfileDescriptionItem[];
  stockDetails: CompanyProfileDescriptionItem[];
}

const DetailsItem = ({ item }: { item: CompanyProfileDescriptionItem }) => {
  return (
    <div className={classNames(item.className)}>
      <div className="d-flex align-items-center mb-1">
        <FontAwesomeIcon icon={item.icon} style={{ width: 16 }} />
        <h5 className="my-2 ms-2 line-clamp-1">{item.title}</h5>
      </div>
      <div className="ps-4">
        {item.link ? (
          <Link to={item.link}>{item.content}</Link>
        ) : item.image ? (
          <div className="d-flex align-items-center gap-2">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid d-dark-none"
            />
            {item.darkImage && (
              <img
                src={item.darkImage}
                alt={item.title}
                className="img-fluid d-light-none"
              />
            )}
            <p className="mb-0 text-body-secondary">{item.content}</p>
          </div>
        ) : (
          <p className="mb-0 text-body-secondary">{item.content}</p>
        )}
      </div>
    </div>
  );
};

const CompanyProfileDescriptionCard = ({
  companyDetails,
  stockDetails
}: CompanyProfileDescriptionCardProps) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h4 className="mb-3 text-body">Company Description</h4>
        <p className="mb-2">
          Apple Inc. creates, produces, and sells wearable technology, tablets,
          smartphones, PCs, and accessories all over the world.
        </p>
        <p className="mb-0">
          The company sells wearables, home goods, and accessories like AirPods,
          Apple TV, Apple Watch, Beats devices, and HomePod. It also offers a
          line of cellphones called iPhone, a line of personal computers called
          Mac, and a line of tablets called iPad...
          <Link to="#!">read more</Link>
        </p>

        <hr className="my-4" />
        <Row className="g-0">
          <Col xs={12} md={6} className="pe-md-4 pb-4 pb-md-0">
            <h4 className="text-body mb-3">Company Details</h4>
            <Row className="gx-5 gx-md-3 gx-lg-1 gx-xl-3 gx-xxl-5">
              <Col sm={6} xl={12} xxl={6} className="pe-md-2">
                {companyDetails.slice(0, 6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
              <Col sm={6} xl={12} xxl={6} className="ps-md-2">
                {companyDetails.slice(6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={6}
            className="ps-md-4 pt-4 pt-md-0 border-top border-top-md-0 border-start-md"
          >
            <h4 className="text-body mb-3">Stock Details</h4>
            <Row className="gx-5 gx-md-3 gx-lg-1 gx-xl-3 gx-xxl-5">
              <Col sm={6} xl={12} xxl={6}>
                {stockDetails.slice(0, 6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
              <Col sm={6} xl={12} xxl={6}>
                {stockDetails.slice(6).map(item => (
                  <DetailsItem item={item} key={item.id} />
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompanyProfileDescriptionCard;
