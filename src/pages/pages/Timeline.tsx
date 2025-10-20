import PageBreadcrumb, {
  PageBreadcrumbItem
} from 'components/common/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';
import img from 'assets/img/spot-illustrations/timeline.png';
import imgDark from 'assets/img/spot-illustrations/timeline-dark.png';
import { timelineData } from 'data/timelineData';
import BasicTimeline from 'components/timelines/BasicTimeline';

export const timelineBreadcrumb: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Timeline',
    active: true
  }
];

const Timeline = () => {
  return (
    <>
      <PageBreadcrumb
        items={timelineBreadcrumb}
        className="breadcrumb-sticky-top"
      />
      <h2 className="text-bold mb-5 page-title-sticky-top">Timeline</h2>
      <Row className="gx-xl-8 gx-xxl-11">
        <Col xl={5} className="p-xxl-7">
          <div
            className="ms-xxl-3 d-none d-xl-block position-sticky"
            style={{ top: '30%' }}
          >
            <img src={img} alt="" className="d-dark-none img-fluid" />
            <img src={imgDark} alt="" className="d-light-none img-fluid" />
          </div>
        </Col>
        <Col xl={7} className="scrollbar">
          {timelineData.map(timeline => (
            <div key={timeline.id}>
              <h4 className="py-3 border-y mb-5 ms-8">{timeline.date}</h4>
              <BasicTimeline data={timeline.items} />
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Timeline;
