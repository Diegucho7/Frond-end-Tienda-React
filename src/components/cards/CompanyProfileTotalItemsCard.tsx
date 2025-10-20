import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { CompanyProfileTotalItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { numberFormat } from 'helpers/utils';
import Badge from 'components/base/Badge';

const CompanyProfileTotalItemsCard = ({
  cardItems
}: {
  cardItems: CompanyProfileTotalItem[];
}) => {
  return (
    <Card className="mb-5">
      <Card.Body>
        <Row className="g-0">
          {cardItems.map(item => (
            <Col
              key={item.id}
              xs={6}
              lg={12}
              xxl={6}
              className={item.className}
            >
              <Row className="g-2 flex-between-center">
                <Col md={6}>
                  <div className="d-md-flex align-items-center gap-2">
                    <div
                      className={classNames(
                        'border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0',
                        item.icon.iconClassName
                      )}
                      style={{ width: '2rem', height: '2rem' }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon.name}
                        className={item.icon.iconColor}
                      />
                    </div>
                    <h5 className="text-body-highlight mb-0 line-clamp-1">
                      {item.title}
                    </h5>
                  </div>
                </Col>
                <Col xs={1} className="d-none d-md-block">
                  <h5 className="text-body-secondary mb-0">:</h5>
                </Col>
                <Col md={5}>
                  <div className="d-flex justify-content-md-between align-items-center gap-2">
                    <p className="mb-0 text-body-secondary">{item.growth}</p>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id={`total-items-${item.id}`}>
                            From{' '}
                            {numberFormat(item.tooltipContent, 'standard', {
                              minimumFractionDigits: 2,
                              notation: 'compact',
                              compactDisplay: 'short'
                            }).toLowerCase()}
                          </Tooltip>
                        }
                      >
                        <span>
                          <Badge
                            variant="phoenix"
                            bg={item.badge.badgeBg}
                            className="fs-10"
                          >
                            {item.badge.title}%
                          </Badge>
                        </span>
                      </OverlayTrigger>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompanyProfileTotalItemsCard;
