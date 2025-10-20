import { JSX } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import ChartTabContent from './tab/ChartTabContent';
import DividendsTabContent from './tab/DividendsTabContent';
import FinancialStatementTabContent from './tab/FinancialStatementTabContent';
import ForecastTabContent from './tab/ForecastTabContent';
import NewsTabContent from './tab/NewsTabContent';
import EventsTabContent from './tab/EventsTabContent';
import CompanyProfileTabContent from './tab/CompanyProfileTabContent';
import classNames from 'classnames';
import { dividendContent } from 'data/stock/dividend';
import { forecastDataItems } from 'data/stock/forecast';
import {
  newsItems,
  eventList,
  companyProfileItems
} from 'data/stock/stockDetails';
export interface StockDetailsTabItem {
  id: string;
  name: string;
  className?: string;
  navItemClassName?: string;
  content: JSX.Element | null;
}

const stockDetailsTabItems: StockDetailsTabItem[] = [
  {
    id: 'chart',
    name: 'Chart',
    className: 'ps-0 pe-3',
    content: <ChartTabContent />
  },
  {
    id: 'dividends',
    name: 'Dividends',
    content: <DividendsTabContent dividendContent={dividendContent} />,
    className: 'px-3'
  },
  {
    id: 'financial',
    name: 'Financial Statement',
    content: <FinancialStatementTabContent />,
    className: 'px-3'
  },
  {
    id: 'forecast',
    name: 'Forecast',
    content: <ForecastTabContent forecastDataItems={forecastDataItems} />,
    className: 'px-3'
  },
  {
    id: 'news',
    name: 'News',
    content: <NewsTabContent newsItems={newsItems} />,
    className: 'px-3'
  },
  {
    id: 'events',
    name: 'Events',
    content: <EventsTabContent eventLists={eventList} />,
    className: 'px-3'
  },
  {
    id: 'company-profile',
    name: 'Company Profile',
    content: (
      <CompanyProfileTabContent companyProfileItems={companyProfileItems} />
    ),
    className: 'px-3'
  },
  {
    id: 'empty-1',
    name: '',
    content: null,
    className: 'disabled h-100 px-3',
    navItemClassName: 'flex-1 d-none d-md-inline'
  }
];
const StockDetailsMainContent = () => {
  return (
    <Tab.Container defaultActiveKey="chart">
      <Nav
        variant="underline"
        className="optionChainTableHeader gap-0 flex-nowrap scrollbar mb-4"
      >
        {stockDetailsTabItems.map(item => (
          <Nav.Item key={item.id} className={classNames(item.navItemClassName)}>
            <Nav.Link
              eventKey={item.id}
              className={classNames('pt-0 text-nowrap', item.className)}
            >
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {stockDetailsTabItems.map(item => (
          <Tab.Pane
            key={item.id}
            eventKey={item.id}
            className="h-100 position-relative"
          >
            {item.content}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default StockDetailsMainContent;
