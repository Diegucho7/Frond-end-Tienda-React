import { useState } from 'react';
import { Row, Col, Nav, Tab, Card } from 'react-bootstrap';
import SearchBox from 'components/common/SearchBox';
import { topStockItems } from 'data/stock/dashboardTopStocks';
import TopStocksSidebarCard from 'components/cards/TopStocksSidebarCard';
import TopStockMainContent from './TopStockMainContent';

const TopStocks = () => {
  const [activeKey, setActiveKey] = useState('aapl');

  const handleSelect = (key: string | null) => {
    if (key) {
      setActiveKey(key);
    }
  };

  return (
    <>
      <h3 className="mb-4 text-body-emphasis">Top Stock</h3>
      <Tab.Container
        activeKey={activeKey}
        onSelect={handleSelect}
        mountOnEnter={false}
      >
        <Row className="gx-5">
          <Col xl={5} xxl={4} className="mb-4 mb-xl-0 top-stock-card-container">
            <SearchBox
              placeholder="Enter Company or Symbol name"
              className="w-100 mb-3 pe-xl-3"
            />
            <div className="">
              <Nav className="text-nowrap gap-3 gap-xl-2 flex-nowrap flex-xl-column top-stock-tab w-100 pe-xl-3 scrollbar">
                {topStockItems.map(item => (
                  <Nav.Link
                    key={item.id}
                    as={Card}
                    eventKey={item.abbr.toLowerCase()}
                    className="company-card"
                  >
                    <TopStocksSidebarCard topStocksItem={item} />
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </Col>
          <Col xl={7} xxl={8} className="flex-1 ps-xl-0">
            <Tab.Content>
              {topStockItems.map(item => (
                <Tab.Pane key={item.id} eventKey={item.abbr.toLowerCase()}>
                  <TopStockMainContent topStockItem={item} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default TopStocks;
