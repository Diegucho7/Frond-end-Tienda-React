import { Col, Row } from 'react-bootstrap';
import boardIcon from 'assets/img/kanban/board.png';
import boardIllustration from 'assets/img/kanban/board-light.png';
import boardIllustrationDark from 'assets/img/kanban/board-dark.png';
import CreateBoardWizardForm from 'components/modules/kanban/create-board/CreateBoardWizardForm';

const CreateBoard = () => {
  return (
    <div className="mb-9">
      <div className="mb-xl-8">
        <div className="d-flex align-items-center mb-3">
          <img src={boardIcon} alt="" className="me-3" />
          <h1 className="mb-0 text-body-emphasis fw-semibold">
            Phoenix Kanban
          </h1>
        </div>
        <p className="mb-0">
          Create a Kanban board by following the steps below
        </p>
      </div>
      <Row className="kanban-create-board">
        <Col
          xs={12}
          xl={6}
          xxl={7}
          className="text-center kanban-board-bg order-xl-1"
        >
          <img
            src={boardIllustration}
            alt=""
            className="d-dark-none mt-5 mb-6 mb-xl-0 position-sticky"
          />
          <img
            src={boardIllustrationDark}
            alt=""
            className="d-light-none mt-5 mb-6 mb-xl-0 position-sticky"
          />
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <CreateBoardWizardForm />
        </Col>
      </Row>
    </div>
  );
};

export default CreateBoard;
