import {
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import LeadsFilterModal from 'components/modals/LeadsFilterModal';
import LeadsTable, { leadsTableColumns } from 'components/tables/LeadsTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { leadsTableData } from 'data/crm/leadsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { useState, ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';

const Leads = () => {
  const table = useAdvanceTable({
    data: leadsTableData,
    columns: leadsTableColumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true,
    initialState: {
      columnVisibility: {
        status: false,
        designation: false
      }
    }
  });
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-6">
        <AdvanceTableProvider {...table}>
          <h2 className="mb-4">{leadsTableData.length} Leads</h2>
          <Row className="g-3 justify-content-between mb-4">
            <Col xs="auto">
              <Button
                variant="primary"
                className="me-4"
                startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
              >
                Create Lead
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
                <DatePicker defaultValue="Mar 1, 2022" />
                <Button
                  variant="phoenix-secondary"
                  className="px-3 ms-2"
                  onClick={() => setOpenFilterModal(true)}
                >
                  <FontAwesomeIcon
                    icon={faFilter}
                    transform="down-3"
                    className="text-primary"
                  />
                </Button>
              </div>
              <LeadsFilterModal
                show={openFilterModal}
                handleClose={() => setOpenFilterModal(false)}
              />
            </Col>
          </Row>
          <LeadsTable />
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Leads;
