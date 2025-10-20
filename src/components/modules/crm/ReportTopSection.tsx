import {
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import ReportFilterModal from 'components/modals/ReportFilterModal';
import { Report } from 'data/crm/reportsData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ReportTopSection = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { setGlobalFilter } = useAdvanceTableContext<Report>();
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };
  return (
    <Row className="g-3 justify-content-between mb-4">
      <Col xs="auto">
        <Button
          variant="primary"
          className="me-4"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
        >
          Create Report
        </Button>
        <Button
          variant="link"
          className="text-body px-0"
          startIcon={
            <FontAwesomeIcon icon={faFileExport} className="fs-9 me-2" />
          }
        >
          Export
        </Button>
      </Col>
      <Col xs="auto">
        <div className="d-flex">
          <SearchBox
            placeholder="Search by name"
            className="me-2"
            onChange={handleSearchInputChange}
          />
          <Button
            variant="phoenix-secondary"
            className="px-3"
            onClick={() => setOpenFilterModal(true)}
          >
            <FontAwesomeIcon
              icon={faFilter}
              transform="down-3"
              className="text-primary"
            />
          </Button>
        </div>
        <ReportFilterModal
          show={openFilterModal}
          handleClose={() => setOpenFilterModal(false)}
        />
      </Col>
    </Row>
  );
};

export default ReportTopSection;
