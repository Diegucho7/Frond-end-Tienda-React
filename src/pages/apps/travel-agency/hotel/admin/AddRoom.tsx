import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import React, { useEffect, useState } from 'react';
import { Row, Col, Tab } from 'react-bootstrap';
import useWizardForm from 'hooks/useWizardForm';
import WizardForm from 'components/wizard/WizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import RoomDetailsForm from 'components/modules/travel-agency/hotel/add-room/RoomDetailsForm';
import { addRoomWizardNav } from 'data/wizard/wizard';
import RoomWizardFooter from 'components/modules/travel-agency/hotel/add-room/RoomWizardFooter';
import Pricing from 'components/modules/travel-agency/hotel/add-room/Pricing';
import Amenities from 'components/modules/travel-agency/hotel/add-room/Amenities';
import AddPhotos from 'components/modules/travel-agency/hotel/add-proterty/AddPhotos';
import Preview from 'components/modules/travel-agency/hotel/add-room/Preview';
import WizardSideNav from 'components/wizard/WizardSideNav';
import { urlToFile } from 'helpers/utils';
import { pictures } from 'data/travel-agency/addProperty';
import { addRoomDefaultFormData } from 'data/travel-agency/addRoom';

const AddRoom = () => {
  const [images, setImages] = useState<File[]>([]);

  const form = useWizardForm({
    totalStep: 5
  });

  useEffect(() => {
    const loadImages = async () => {
      const imageFiles = await Promise.all(
        pictures.map(async picUrl => {
          return await urlToFile(picUrl);
        })
      );
      setImages(imageFiles);
    };

    loadImages();
  }, []);

  useEffect(() => {
    form.setFormData({ ...addRoomDefaultFormData, pictures: images });
  }, [images]);

  return (
    <div className="mb-9">
      <PageBreadcrumb className="mb-3" items={defaultBreadcrumbItems} />
      <h2 className="fs-5 mb-4 mb-xl-5">Add New Room</h2>
      <WizardFormProvider {...form}>
        <Row className="gx-0 gx-xl-5 theme-wizard">
          <Col xl={{ order: 1, span: 4 }}>
            <WizardSideNav navItems={addRoomWizardNav} />
          </Col>
          <Col xl={8} className="flex-1">
            <Row className="mt-4 mt-xl-0">
              <Col xxl={8}>
                <Tab.Content>
                  <Tab.Pane eventKey={1}>
                    <WizardForm step={1}>
                      <RoomDetailsForm />
                    </WizardForm>
                  </Tab.Pane>
                  <Tab.Pane eventKey={2}>
                    <WizardForm step={2}>
                      <Pricing />
                    </WizardForm>
                  </Tab.Pane>
                  <Tab.Pane eventKey={3}>
                    <WizardForm step={3}>
                      <Amenities />
                    </WizardForm>
                  </Tab.Pane>
                  <Tab.Pane eventKey={4}>
                    <WizardForm step={4}>
                      <AddPhotos title="Add room picture" images={images} />
                    </WizardForm>
                  </Tab.Pane>
                  <Tab.Pane eventKey={5}>
                    <WizardForm step={5}>
                      <Preview />
                    </WizardForm>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Col>
        </Row>
        <RoomWizardFooter />
      </WizardFormProvider>
    </div>
  );
};

export default AddRoom;
