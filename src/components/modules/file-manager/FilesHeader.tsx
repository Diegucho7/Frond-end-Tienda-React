import {
  faAdd,
  faArrowsRotate,
  faBars,
  faCloudArrowUp,
  faFilter,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import Sidebar from './sidebar/Sidebar';
import SearchBox from 'components/common/SearchBox';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { File } from 'data/file-manager';
interface FileHeaderProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  openOffcanvas: boolean;
  setOpenOffcanvas: Dispatch<SetStateAction<boolean>>;
}

const FilesHeader = ({
  showSidebar,
  setShowSidebar,
  openOffcanvas,
  setOpenOffcanvas
}: FileHeaderProps) => {
  const { breakpoints } = useBreakpoints();
  const [addFolderModal, setAddFolderModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const { setGlobalFilter } = useAdvanceTableContext<File>();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <>
      <Row className="g-3 flex-between-center">
        <Col xs="auto" className="d-flex gap-2">
          <Button
            variant="phoenix-secondary"
            className="btn-square d-xl-none"
            onClick={() => {
              setOpenOffcanvas(true), setShowSidebar(!showSidebar);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <input type="file" id="fileUpload" className="d-none" />
          <label htmlFor="fileUpload">
            <Button as="span" variant="primary" className="px-sm-6">
              <FontAwesomeIcon icon={faCloudArrowUp} className="me-2" />
              Upload
            </Button>
          </label>

          <Button
            variant="link"
            className="text-body-secondary px-2"
            onClick={() => setAddFolderModal(true)}
          >
            <FontAwesomeIcon icon={faAdd} className="me-2" />
            Add New Folder
          </Button>
        </Col>
        <Col xs="auto" className="d-flex gap-2">
          <SearchBox
            onChange={handleSearchInputChange}
            placeholder="Search by name"
          />
          <Form.Select className="w-auto">
            <option value="1">Last 7 days</option>
            <option value="1">Last 15 days</option>
            <option value="1">Last 30 days</option>
          </Form.Select>
          <Button
            variant="phoenix-primary"
            onClick={() => setFilterModal(true)}
            className="btn-square"
          >
            <FontAwesomeIcon icon={faFilter} />
          </Button>
        </Col>
      </Row>
      {breakpoints.down('lg') && (
        <PhoenixOffcanvas
          open={openOffcanvas}
          onHide={() => setOpenOffcanvas(false)}
          className="phoenix-offcanvas treeview-offcanvas phoenix-offcanvas-content scrollbar bg-body overflow-x-hidden"
          placement="start"
          fixed
        >
          <Sidebar setOpenOffcanvas={setOpenOffcanvas} />
        </PhoenixOffcanvas>
      )}
      <Modal
        show={addFolderModal}
        onHide={() => setAddFolderModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0">
          <Modal.Title id="contained-modal-title-vcenter">
            Add new folder
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-2">
          <Form>
            <Form.Control type="search" placeholder="Folder Name" />
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            variant="link"
            className="text-danger me-0"
            onClick={() => setAddFolderModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" size="sm" className="px-5 ms-0">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={filterModal}
        onHide={() => setFilterModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0">
          <h5 className="modal-title">Filter</h5>
          <Button
            variant="link"
            className="ms-auto"
            onClick={() => setFilterModal(false)}
            size="sm"
          >
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          </Button>
        </Modal.Header>
        <Modal.Body className="py-2">
          <Form>
            <Form.Group controlId="selectType" className="mb-3">
              <Form.Label className="form-label-header mb-1">Type</Form.Label>
              <Form.Select name="selectType">
                <option>Select</option>
                <option value="1">Documents</option>
                <option value="2">Images</option>
                <option value="3">Videos</option>
                <option value="4">Audios</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="selectPeople" className="mb-3">
              <Form.Label className="form-label-header mb-1">People</Form.Label>
              <Form.Select name="selectPeople">
                <option>Select</option>
                <option value="1">Robert Allan</option>
                <option value="2">Charles</option>
                <option value="3">Adrian</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="lastModified" className="mb-3">
              <Form.Label className="form-label-header mb-1">
                Modified
              </Form.Label>
              <Form.Select name="lastModified">
                <option>Select</option>
                <option value="today">Today</option>
                <option value="last7Days">Last 7 Days</option>
                <option value="last15Days">Last 15 Days</option>
                <option value="last30Days">Last 30 Days</option>
                <option value="chooseATimePeriod">Choose a time period</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="location" className="mb-3">
              <Form.Label className="form-label-header mb-1">
                Location
              </Form.Label>
              <Form.Select name="location">
                <option>Select</option>
                <option value="1">Anywhere is drive</option>
                <option value="2">Shared with me</option>
                <option value="3">Starred</option>
                <option value="4">Trashed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button
            variant="link"
            className="text-body-secondary px-3 mx-0"
            onClick={() => setFilterModal(false)}
          >
            <FontAwesomeIcon icon={faArrowsRotate} className="me-2" />
            Reset
          </Button>
          <Button variant="primary" size="sm" className="px-5 ms-0">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FilesHeader;
