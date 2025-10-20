import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { gantt } from 'dhtmlx-gantt';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const GanttDeleteLinkModal = () => {
  const [show, setShow] = useState(false);
  const [currentLinkId, setCurrentLinkId] = useState<string | number>();

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    if (currentLinkId) {
      gantt.deleteLink(currentLinkId);
    }
    handleClose();
  };
  useEffect(() => {
    const linkDeleteHandler = () => {
      gantt.attachEvent('onLinkDblClick', id => {
        setShow(true);
        setCurrentLinkId(id);
        return false; // Prevent default lightbox
      });
    };
    linkDeleteHandler();
  }, []);
  return (
    <>
      <Modal
        id="ganttDeleteLinkModal"
        show={show}
        onHide={handleClose}
        centered
        aria-labelledby="deleteLinkModal"
      >
        <Modal.Header className="p-4 pb-3 align-items-start">
          <h3 className="mb-2 text-body-highlight">Delete Link</h3>
          <button onClick={() => setShow(false)} className="btn p-0 ms-auto">
          <FontAwesomeIcon icon={faTimes} className="btn-close" />
        </button>
        </Modal.Header>

        <Modal.Body className="px-4">
          <p>
            Are you sure you want to delete this link permanently? Once deleted,
            it cannot be recovered or undone.
          </p>
        </Modal.Body>

        <Modal.Footer className="px-4 pb-3">
          <Button
            id="ganttDeleteLinkBtn"
            variant="subtle-danger"
            onClick={handleDelete}
          >
            Delete link
          </Button>
          <Button variant="phoenix-secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GanttDeleteLinkModal;
