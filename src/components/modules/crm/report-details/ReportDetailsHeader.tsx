import {
  faEnvelope,
  faFileExport,
  faFilter,
  faPencil,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import ReportsFilterModal from 'components/modals/ReportsFilterModal';
import { DealsReport } from 'data/crm/reportsData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ReportDetailsHeader = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const { setGlobalFilter } = useAdvanceTableContext<DealsReport>();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };
  return (
    <>
      <Row className="g-3 justify-content-between mb-4">
        <Col xs="auto">
          <div className="d-flex flex-wrap gap-2">
            <Button
              variant="primary"
              startIcon={<FontAwesomeIcon icon={faEnvelope} className="me-2" />}
            >
              Send mail
            </Button>
            <Button
              variant="phoenix-primary"
              startIcon={<FontAwesomeIcon icon={faPencil} className="me-2" />}
            >
              Edit
            </Button>
            <Button
              variant="phoenix-secondary"
              className="text-body"
              startIcon={
                <FontAwesomeIcon icon={faFileExport} className="fs-9 me-2" />
              }
            >
              Export
            </Button>
          </div>
        </Col>
        <Col xs="auto">
          <div className="d-flex gap-2">
            <SearchBox
              placeholder="Search by name"
              className="d-none d-xl-block"
              onChange={handleSearchInputChange}
            />
            <Button variant="phoenix-secondary" className="px-3 me-2 d-xl-none">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
            <Button
              variant="phoenix-primary"
              className="px-3"
              onClick={() => setOpenFilterModal(true)}
            >
              <FontAwesomeIcon icon={faFilter} transform="down-3" />
            </Button>
          </div>
        </Col>
      </Row>
      <ReportsFilterModal
        show={openFilterModal}
        onHide={() => setOpenFilterModal(false)}
      />
    </>
  );
};

export default ReportDetailsHeader;
