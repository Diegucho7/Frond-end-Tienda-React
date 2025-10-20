import Button from 'components/base/Button';
import AvatarUpload from 'components/common/AvatarUpload';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import avatar from 'assets/img/team/150x150/58.webp';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import LeadInformationForm from 'components/forms/LeadInformationForm';
import AddressInformation from 'components/forms/AddressInformation';

const AddContact = () => {
  return (
    <div className="mb-9">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="border-bottom border-translucent mb-7 mx-n3 px-2 mx-lg-n6 px-lg-6">
        <Row>
          <Col xl={9}>
            <div className="d-sm-flex justify-content-between">
              <h2 className="mb-4">Create a new lead</h2>
              <div className="d-flex mb-3">
                <Button variant="phoenix-primary" className="me-2 px-6">
                  Cancel
                </Button>
                <Button variant="primary">Create lead</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xl={9}>
          <div className="d-flex align-items-end position-relative mb-7">
            <AvatarUpload src={avatar} size="5xl" />
          </div>
          <Form>
            <LeadInformationForm className="mb-6" />
            <AddressInformation className="mb-6" />
            <h4 className="mb-3">Description</h4>
            <FloatingLabel
              controlId="lead-description"
              label="Lead description"
            >
              <Form.Control
                as="textarea"
                style={{ height: '128px' }}
                type="text"
                placeholder="Lead description"
              />
            </FloatingLabel>
            <div className="text-end">
              <Button variant="primary" className="mt-6">
                Create lead
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddContact;
