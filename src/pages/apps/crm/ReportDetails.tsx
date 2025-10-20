import ReportDetailsChart from 'components/charts/e-charts/ReportDetailsChart';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ReportDetailsHeader from 'components/modules/crm/report-details/ReportDetailsHeader';
import DealsReportTable, {
  dealsReportColumns
} from 'components/tables/DealsReportTable';
import ReportDetailsTable from 'components/tables/ReportDetailsTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { dealsReportData } from 'data/crm/reportsData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Card, Col, Row } from 'react-bootstrap';

const ReportDetails = () => {
  const table = useAdvanceTable({
    data: dealsReportData,
    columns: dealsReportColumns,
    pageSize: 10,
    selection: true,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <AdvanceTableProvider {...table}>
        <div className="pb-9">
          <h2 className="mb-4">Purchasers and sellers</h2>
          <ReportDetailsHeader />
          <Row className="gy-5">
            <Col xl={5} xxl={4}>
              <Card>
                <Card.Body>
                  <div className="mb-5">
                    <ReportDetailsChart
                      style={{ height: '358px', width: '100%' }}
                    />
                  </div>
                  <ReportDetailsTable />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={7} xxl={8}>
              <DealsReportTable />
            </Col>
          </Row>
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default ReportDetails;
