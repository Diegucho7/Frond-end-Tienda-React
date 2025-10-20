import DatePicker from 'components/base/DatePicker';
import EarlyBirdCard from 'components/cards/EarlyBirdCard';
import ZeroRoadMap from 'components/modules/project-management/dashboard/ZeroRoadMap';
import IssuesDiscovered from 'components/modules/project-management/dashboard/IssuesDiscovered';
import { Col, Row } from 'react-bootstrap';
import TodoList from 'components/modules/project-management/todo-list/TodoList';
import { stats } from 'data/project-management/stats';
import Stat from 'components/modules/project-management/dashboard/Stat';
import ProjectElevenProgress from 'components/modules/project-management/dashboard/ProjectElevenProgress';
import ProjectDashboard from 'components/modules/project-management/dashboard/ProjectDashboard';
import ProjectActivityCard from 'components/cards/ProjectActivityCard';

const ProjectManagement = () => {
  return (
    <>
      <Row className="gy-3 mb-6 justify-content-between">
        <Col md={9} xs="auto">
          <h2 className="mb-2 text-body-emphasis">Projects Dashboard</h2>
          <h5 className="text-body-tertiary fw-semibold">
            Here’s what’s going on at your business right now
          </h5>
        </Col>
        <Col md={3} xs="auto">
          <DatePicker
            options={{
              defaultDate: 'May 1, 2023'
            }}
          />
        </Col>
      </Row>
      <Row className="mb-3 gy-6">
        <Col xs={12} xxl={2}>
          <Row className="align-items-center g-3 g-xxl-0 h-100 align-content-between">
            {stats.map(stat => (
              <Col
                xs={12}
                sm={6}
                md={3}
                lg={6}
                xl={3}
                xxl={12}
                key={stat.title}
              >
                <Stat stat={stat} key={stat.title} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <ZeroRoadMap />
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <EarlyBirdCard />
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 pb-3 border-y mb-3">
        <Row>
          <Col xs={12} xl={7} xxl={6}>
            <IssuesDiscovered />
          </Col>
          <Col xs={12} xl={5} xxl={6}>
            <ProjectElevenProgress />
          </Col>
        </Row>
      </div>
      <div className="mx-lg-n4 mb-3">
        <Row className="g-3">
          <Col xs={12} xl={6} xxl={7}>
            <TodoList />
          </Col>
          <Col xs={12} xl={6} xxl={5}>
            <ProjectActivityCard />
          </Col>
        </Row>
      </div>

      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 border-top">
        <ProjectDashboard />
      </div>
    </>
  );
};

export default ProjectManagement;
