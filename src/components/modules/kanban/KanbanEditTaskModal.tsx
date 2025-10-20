import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import { Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import imageIcon from 'assets/img/icons/image-icon.png';

interface KanbanTaskDetailsModalProps {
  show: boolean;
  handleClose: () => void;
}

const KanbanEditTaskModal = ({
  show,
  handleClose
}: KanbanTaskDetailsModalProps) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      fullscreen="md-down"
      centered
      className="modal-xl"
      contentClassName="rounded-3"
      scrollable
    >
      <Modal.Body>
        <Row className="gx-3 g-4">
          <Col sm={6} md={12}>
            <FloatingLabel controlId="kanbanTaskTitle" label="Title">
              <Form.Control type="text" placeholder="title" />
            </FloatingLabel>
          </Col>
          <Col xs={12}>
            <FloatingLabel
              controlId="floatingProjectDescription"
              label="ADD A DESCRIPTION"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '128px' }}
              />
            </FloatingLabel>
          </Col>

          <Col xs={12}>
            <Dropzone
              size="sm"
              accept={{
                'image/*': ['.png', '.gif', '.jpeg', '.jpg']
              }}
            >
              <div className="text-body-secondary">
                <img className="mb-2" src={imageIcon} width={24} alt="" />
                <br />
                Add cover image
              </div>
            </Dropzone>
          </Col>

          <Col sm={4}>
            <FloatingLabel controlId="TaskType" label="BORAD TYPE">
              <Form.Select>
                <option>Phoenix</option>
                <option value="2">Boreas</option>
                <option value="3">Erebus</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={4} className="gx-2">
            <FloatingLabel controlId="KanbanColumnType" label="COLUMN">
              <Form.Select>
                <option>Unassigned</option>
                <option value="2">To do</option>
                <option value="3">Doing</option>
                <option value="4">Review</option>
                <option value="5">Release</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={4}>
            <FloatingLabel controlId="KanbanPlaceNumber" label="PLACE">
              <Form.Select>
                <option>01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs={12}>
            <FloatingLabel controlId="KanbanAssignedMember" label="ASSIGNED TO">
              <Form.Select>
                <option value="1">Unassigned (Default)</option>
                <option value="2">Richard Dawkins</option>
                <option value="3">Ashley Garrett</option>
                <option value="4">Barbara Lucas</option>
                <option value="5">Woodrow Burton</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs={12}>
            <FloatingLabel controlId="KanbanPriorityLavel" label="PRIORITY">
              <Form.Select>
                <option>Low (Default)</option>
                <option value="2">High</option>
                <option value="3">Medium</option>
                <option value="4">Urgent</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs={12}>
            <FloatingLabel controlId="KanbanCategoryType" label="CATEGORY">
              <Form.Select>
                <option>UNASSIGNED (Default)</option>
                <option value="2">Feature</option>
                <option value="3">Bug</option>
                <option value="4">Issue</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          startIcon={<FontAwesomeIcon icon={faTimes} />}
          onClick={handleClose}
          className="p-0"
        >
          Close
        </Button>
        <Button
          variant="primary"
          className="px-6"
          onClick={() => {
            handleClose();
          }}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KanbanEditTaskModal;
