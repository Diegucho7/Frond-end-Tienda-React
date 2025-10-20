import bg from 'assets/img/bg/bg-40.png';
import bgDark from 'assets/img/bg/bg-dark-40.png';
import { Link } from 'react-router';
import SearchBox from 'components/common/SearchBox';
import { Col, Row, Tab } from 'react-bootstrap';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import CategoryTab from 'components/modules/faq/CategoryTab';
import SubCategoryTab from 'components/modules/faq/SubCategoryTab';
import SubCategoryContent from 'components/modules/faq/SubCategoryContent';
import FaqTabProvider, { useFaqTabContext } from 'providers/FaqTabProvider';
import CategoryOffcanvas from 'components/modules/faq/CategoryOffcanvas';

const index = () => {
  return (
    <FaqTabProvider>
      <FaqTab />
    </FaqTabProvider>
  );
};

const FaqTab = () => {
  const { breakpoints } = useBreakpoints();

  const {
    activeKey,
    setActiveKey,
    subCategoryActiveKey,
    setSubCategoryActiveKey
  } = useFaqTabContext();

  return (
    <div className="mb-9">
      <div
        className="mx-n4 mx-lg-n6 mt-n5 position-relative mb-md-9"
        style={{ height: '208px' }}
      >
        <div
          className="bg-holder d-dark-none"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          className="bg-holder d-light-none"
          style={{
            backgroundImage: `url(${bgDark})`,
            backgroundSize: 'cover'
          }}
        />
        <div className="faq-title-box position-relative bg-body-emphasis border border-translucent p-6 rounded-3 text-center mx-auto">
          <h1>How can we help?</h1>
          <p className="my-3">
            Search for the topic you need help with or
            <Link to="mailto:support@themewagon.com"> contact our support</Link>
          </p>
          <SearchBox className="w-100" placeholder="" />
        </div>
      </div>
      <Tab.Container
        defaultActiveKey={activeKey}
        onSelect={(key: string | null) => setActiveKey(key || '')}
        activeKey={activeKey}
      >
        <Row className="gx-xl-8 gx-xxl-11">
          {breakpoints.up('md') && <CategoryTab />}
          <Col
            md={6}
            xl={7}
            xxl={8}
            className="empty-header d-none d-md-block"
          />
          <Col xs={12} className="m-0">
            <Tab.Container
              defaultActiveKey={subCategoryActiveKey}
              onSelect={(key: string | null) =>
                setSubCategoryActiveKey(key || '')
              }
              id="sub-category"
              activeKey={subCategoryActiveKey}
            >
              <Row className="gx-xl-8 gx-xxl-11 gy-6">
                {breakpoints.up('md') && <SubCategoryTab />}
                <Col md={6} xl={7} xxl={8} className="mt-0">
                  <SubCategoryContent />
                </Col>
              </Row>
            </Tab.Container>
            {breakpoints.down('md') && <CategoryOffcanvas />}
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default index;
