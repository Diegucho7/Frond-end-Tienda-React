import {
  faCircle,
  faEdit,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge, { BadgeBg } from 'components/base/Badge';
import Button from 'components/base/Button';
import AvatarDropdown from 'components/common/AvatarDropdown';
import {
  KanbanBoardItem,
  KanbanBoardTask,
  kanbanActions,
  kanbanActivities,
  kanbanAttachments
} from 'data/kanban';
import { Col, Modal, Row } from 'react-bootstrap';
import KanbanAttachment from './KanbanAttachment';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';
import CoverUpload from 'components/common/CoverUpload';
import { getPriorityColor } from 'helpers/utils';
import KanbanEditTaskModal from './KanbanEditTaskModal';
import { useState } from 'react';

interface KanbanTaskDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  task: KanbanBoardTask;
  list: KanbanBoardItem;
}

const KanbanTaskDetailsModal = ({
  show,
  handleClose,
  task,
  list
}: KanbanTaskDetailsModalProps) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        fullscreen="md-down"
        centered
        className="modal-md p-0"
        contentClassName="rounded-top-md-4 rounded-bottom-md-4 overflow-hidden h-100"
        scrollable
      >
        <Modal.Header className="position-relative p-0" style={{ height: 200 }}>
          {task.coverImage ? (
            <img
              src={task.coverImage}
              alt=""
              className="w-100 h-100 fit-cover"
            />
          ) : (
            <CoverUpload />
          )}
        </Modal.Header>
        <Modal.Body className="p-0 ">
          <Row className="gy-4 py-0 gx-0 h-100">
            <Col xs={12} lg={8} className="h-100 scrollbar">
              <Row className="mt-0 top-0 gy-4 pb-3 gx-0 px-3">
                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    TITLE
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <h4 className="mb-0 text-body-emphasis lh-sm">
                    {task.title}
                  </h4>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    DESCRIPTION
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <p className="fs-9 mb-0">
                    {task.desctiption
                      ? task.desctiption
                      : 'Reproduced below for those interested" is a phrase used to provide additional content or details for individuals who have expressed interest in a particular topic. It signals that what follows is optional and caters specifically to those who want to delve deeper into the subject matter.'}
                  </p>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    BOARD
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <p className="mb-0 text-body-emphasis fw-semibold">Phoenix</p>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    COLUMN
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <p
                    className={`mb-0 text-body-emphasis fw-semibold d-inline-block kanban-column-underline-${list.borderColor}`}
                  >
                    {list.title}
                  </p>
                </Col>

                {task.members && (
                  <>
                    <Col xs={4} sm={3}>
                      <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                        ASSAIGNED TO
                      </h6>
                    </Col>
                    <Col xs={8} sm={9} className="d-flex gap-1">
                      {task.members?.map(member => (
                        <AvatarDropdown
                          user={member}
                          size="s"
                          key={member.id}
                        />
                      ))}
                    </Col>
                  </>
                )}

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    PRIORITY
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <p className="mb-0 text-body-emphasis fw-semibold">
                    <FontAwesomeIcon
                      icon={faCircle}
                      transform="shrink-6 down-1"
                      className={`text-${getPriorityColor(task.priority)}`}
                    />
                    {task.priority}
                  </p>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    CATEGORY
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <Badge
                    variant="phoenix"
                    bg={task.status.color as BadgeBg}
                    className="fs-10"
                  >
                    {task.status.label}
                    <FontAwesomeIcon
                      icon={task.status.icon}
                      transform="up-2"
                      className="ms-1 d-inline-block"
                      style={{ height: 7.8, width: 7.8 }}
                    />
                  </Badge>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    ATTACHMENTS
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <div className="d-flex flex-column gap-3 mb-2">
                    {kanbanAttachments.map(attachment => (
                      <KanbanAttachment
                        attachment={attachment}
                        key={attachment.name}
                      />
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="p-0"
                    startIcon={<FontAwesomeIcon icon={faPlus} />}
                  >
                    Add an Attachment
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={4}
              className="border-start-lg border-translucent h-100 scrollbar"
            >
              <div>
                <div className="px-3">
                  <div>
                    <h5 className="mb-3 mt-4">Actions</h5>
                    <div className="d-flex flex-wrap flex-column gap-2 flex-sm-row flex-lg-column">
                      {kanbanActions.map(action => (
                        <Button
                          variant="subtle-secondary"
                          startIcon={
                            <FontAwesomeIcon
                              icon={action.icon}
                              className="me-2"
                            />
                          }
                          className="text-start text-nowrap"
                          size="sm"
                          key={action.label}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3 mt-4">Activities</h5>
                    <div className="d-flex flex-column gap-3">
                      {kanbanActivities.map((activity, index) => (
                        <div
                          className={classNames(
                            'd-flex gap-2 pb-3 border-translucent',
                            {
                              'border-bottom':
                                index !== kanbanActivities.length - 1
                            }
                          )}
                          key={activity.id}
                        >
                          <FontAwesomeIcon
                            icon={activity.icon}
                            className={`border border-translucent rounded-pill p-1 text-${activity.iconColor}`}
                            transform="shrink-4"
                          />
                          <div className="activity-item">
                            <p
                              className="mb-1 fs-9"
                              dangerouslySetInnerHTML={{
                                __html: activity.task
                              }}
                            />
                            <div className="d-flex gap-2 justify-content-between fs-9">
                              <p className="mb-0">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className="me-1"
                                />
                                {activity.time}
                              </p>
                              <p className="mb-0">{activity.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button
            startIcon={<FontAwesomeIcon icon={faTimes} />}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            endIcon={<FontAwesomeIcon icon={faEdit} transform="up-1" />}
            variant="phoenix-primary"
            className="px-6"
            onClick={() => {
              setOpenEditModal(true);
              handleClose();
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <KanbanEditTaskModal
        show={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      />
    </>
  );
};

export default KanbanTaskDetailsModal;
