import { Nav, Tab } from 'react-bootstrap';
import { watchlistItems } from 'data/stock/watchlist';
import WatchlistSummaryTable from 'components/tables/WatchlistSummaryTable';
import CashTransactionTabContent from './CashTransactionTabContent';

const WatchlistTab = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="summary">
        <Nav variant="underline" className="optionChainTableHeader fs-9 gap-0">
          <Nav.Item>
            <Nav.Link className="pe-3" eventKey="summary">
              Summary
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cashTransaction" className="px-3">
              Cash Transaction
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-1">
            <Nav.Link eventKey="emptyTab" className="h-100" disabled></Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="mt-2">
          <Tab.Pane eventKey="summary">
            <WatchlistSummaryTable data={watchlistItems.summaryTableDataRow} />
          </Tab.Pane>
          <Tab.Pane eventKey="cashTransaction">
            <CashTransactionTabContent />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default WatchlistTab;
