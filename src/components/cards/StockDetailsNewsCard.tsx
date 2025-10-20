import { UilCalendarAlt } from '@iconscout/react-unicons';
import { NewsItem } from 'data/stock/stockDetails';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const NewsCardBody = ({ news }: { news: NewsItem }) => {
  return (
    <Card.Body>
      <h4 className="mb-2 line-clamp-1">{news.title}</h4>
      <p className="fs-9 text-body-secondary line-clamp-2">
        {news.description}
      </p>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
        <div className="d-flex">
          <UilCalendarAlt
            fill="currentColor"
            style={{
              width: 10.25,
              height: 15.23,
              transform: 'translateY(-1px)'
            }}
          />
          <p className="mb-0 fs-10 ms-1">{news.postTime}</p>
        </div>
        <ul className="fs-10 ps-3 mb-0">
          <li>{news.type}</li>
        </ul>
      </div>
      {news.tags && (
        <div className="d-flex align-items-center gap-2">
          {news.tags.map(tag => (
            <Link
              key={tag.id}
              to={tag.link}
              className="px-2 py-1 bg-primary-subtle rounded fs-10 fw-bold text-body-highlight mb-0 text-uppercase lh-sm"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      )}
    </Card.Body>
  );
};

const StockDetailsNewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <>
      {newsItem.newsState === 'featured' && (
        <Card
          className="overflow-hidden h-xxl-100"
          style={{ maxHeight: '390px' }}
        >
          <img src={newsItem.image} alt="" className="card-img-top h-xxl-100" />
          <Card.ImgOverlay className="d-flex align-items-end stock-news-tab backdrop-faded">
            <div className="text-white">
              <h4 className="text-white mb-2 line-clamp-1">{newsItem.title}</h4>
              <p className="fs-9 text-white line-clamp-4">
                {newsItem.description}
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <div className="d-flex">
                  <UilCalendarAlt
                    fill="currentColor"
                    style={{
                      width: 10.25,
                      height: 15.23,
                      transform: 'translateY(-1px)'
                    }}
                  />
                  <p className="mb-0 fs-10 ms-1">{newsItem.postTime}</p>
                </div>
                <ul className="fs-10 ps-3 mb-0">
                  <li>{newsItem.type}</li>
                </ul>
              </div>
              {newsItem.tags && (
                <div className="d-flex align-items-center gap-2">
                  {newsItem.tags.map(tag => (
                    <Link
                      key={tag.id}
                      to={tag.link}
                      className="px-2 py-1 bg-primary-subtle rounded fs-10 fw-bold text-body-highlight mb-0 text-uppercase lh-sm"
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </Card.ImgOverlay>
        </Card>
      )}
      {newsItem.newsState === 'highlight' && (
        <Row className="g-0">
          <Col xs={12} sm={4}>
            <img
              src={newsItem.image}
              alt=""
              className="h-100 w-100 rounded-top rounded-top-sm-0 rounded-start-sm"
            />
          </Col>
          <Col xs={12} sm={8}>
            <Card className="rounded-0 rounded-end-sm h-100">
              <NewsCardBody news={newsItem} />
            </Card>
          </Col>
        </Row>
      )}
      {newsItem.newsState === 'regular' && (
        <Card className="h-100">
          <img src={newsItem.image} alt="" className="card-img-top" />
          <NewsCardBody news={newsItem} />
        </Card>
      )}
    </>
  );
};

export default StockDetailsNewsCard;
