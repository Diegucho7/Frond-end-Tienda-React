import { Dispatch, SetStateAction } from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { currencyFormat, numberFormat } from 'helpers/utils';
import StockDetailsBuyAndSellForm from './StockDetailsBuyAndSellForm';
import { Link } from 'react-router';
import StockDetailsOptionChain from './StockDetailsOptionChain';

interface StockDetailsSideBarContentProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const StockDetailsSideBarContent = ({
  setOpen
}: StockDetailsSideBarContentProps) => {
  return (
    <Card className="border-0 border-xl border-gray-300">
      <Card.Body>
        <Row className="g-0 flex-between-center mb-4">
          <Col xs="auto">
            <h4 className="text-body-highlight font-bold mb-0 text-center">
              Stock Details
            </h4>
          </Col>
          <Col xs="auto" className="d-xl-none">
            <Button
              variant="link"
              size="sm"
              className="fs-8 text-body"
              onClick={() => setOpen && setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </Col>
        </Row>
        <Card className="border text-center bg-body mb-3">
          <Card.Body className="p-3">
            <h3 className="mb-2 lh-sm text-body d-flex align-items-center gap-2 justify-content-center">
              {currencyFormat(226.51, {
                minimumFractionDigits: 2
              })}
              <Badge variant="phoenix" bg="success" className="fs-10">
                +
                {numberFormat(0.62, 'standard', {
                  minimumFractionDigits: 2
                })}{' '}
                (
                {numberFormat(0.27, 'standard', {
                  minimumFractionDigits: 2
                })}
                %)
              </Badge>
            </h3>
            <h6 className="lh-sm text-body mb-2">
              Real time quote: Sep 24, 2024,{' '}
              <span className="text-nowrap">1:34 PM</span>
            </h6>
            <Row className="py-3">
              <Col xs={6} className="border-end">
                <h6 className="lh-sm text-body">Bid x Size</h6>
                <h5 className="fw-semibold text-body mb-0">
                  {numberFormat(226.51, 'standard', {
                    minimumFractionDigits: 2
                  })}
                  <span className="fs-9">x 100</span>
                </h5>
              </Col>
              <Col xs={6}>
                <h6 className="lh-sm text-body">Ask x Size</h6>
                <h5 className="fw-semibold text-body mb-0">
                  {numberFormat(226.51, 'standard', {
                    minimumFractionDigits: 2
                  })}
                  <span className="fs-9">x 100</span>
                </h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Tab.Container defaultActiveKey="buy">
          <Nav variant="underline text-center gap-0 optionChainTableHeader mb-3">
            <Nav.Item className="w-50">
              <Nav.Link eventKey="buy">Buy</Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-50">
              <Nav.Link eventKey="sell">Sell</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="mb-3">
            <Tab.Pane eventKey="buy">
              <StockDetailsBuyAndSellForm title="buy" />
            </Tab.Pane>
            <Tab.Pane eventKey="sell">
              <StockDetailsBuyAndSellForm title="sell" />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="d-flex flex-between-center border-y py-3 mb-4">
          <h5 className="text-body mb-0">Stock available</h5>
          <Link
            to="#!"
            className="d-flex align-items-center gap-2 link-primary fw-bold"
          >
            {numberFormat(32432234, 'standard')}
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </Link>
        </div>
        <h5 className="lh-sm text-center fw-bolder">Options Chain</h5>
        <StockDetailsOptionChain />
      </Card.Body>
    </Card>
  );
};

export default StockDetailsSideBarContent;
