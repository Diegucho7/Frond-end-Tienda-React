import { faImage, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import kanban1 from 'assets/img/kanban/bg1.jpg';
import kanban2 from 'assets/img/kanban/bg2.jpg';
import kanban3 from 'assets/img/kanban/bg3.jpg';
import kanban4 from 'assets/img/kanban/bg4.jpg';
import kanban5 from 'assets/img/kanban/bg5.jpg';
import kanban6 from 'assets/img/kanban/bg6.jpg';
import Dropzone from 'components/base/Dropzone';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { CustomColorButton, RandomColorButton } from './ColorCheckButton';
import imageIcon from 'assets/img/icons/image-icon.png';

export const colors = [
  '#ffffff',
  '#F5F8FF',
  '#EFF2F6',
  '#E3E6ED',
  '#CBD0DD',
  '#85A9FF',
  '#60C6FF',
  '#90D67F',
  '#F48270',
  '#FFCC85',
  '#3874FF',
  '#0097EB',
  '#25B003',
  '#EC1F00',
  '#E5780B',
  '#004DFF',
  '#0080C7',
  '#23890B',
  '#CC1B00',
  '#D6700A',
  '#000000',
  '#222834'
];
const ColorCheckbox = ({ color }: { color: string }) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        backgroundImage: undefined,
        backgroundColor: color
      });
    }
  };

  return (
    <FormCheckInput
      className="kanban-form-check kanban-form-check-color"
      type="radio"
      name="backgroundColor"
      style={{ backgroundColor: color }}
      value={formData.backgroundColor}
      checked={formData.backgroundColor === color}
      onChange={handleChange}
    />
  );
};

const ImageCheckbox = ({ img, id }: { img: string; id: string }) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        backgroundColor: undefined,
        backgroundImage: img
      });
    }
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        name="backgroundImage"
        className="d-none kanban-form-check"
        value={formData.backgroundImage}
        checked={formData.backgroundImage === img}
        onChange={handleChange}
      />
      <label htmlFor={id} className="rounded-3 w-100">
        <img
          className="me-2 cursor-pointer rounded-3 fit-cover w-100"
          src={img}
          style={{ height: 100 }}
        />
      </label>
    </>
  );
};

const BackgroundColorForm = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const [customBgImage, setCustomBgImage] = useState('');

  return (
    <div>
      <p className="mb-4">
        Select a <b>Background</b> Colour or Image. This will also be thumbnail
        for your Kanban board.{' '}
      </p>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav
          variant="underline"
          className="border-bottom border-translucent mb-10"
        >
          <Nav.Item>
            <Nav.Link eventKey="first">
              <FontAwesomeIcon icon={faPalette} className="me-1" /> Solid Color
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">
              <FontAwesomeIcon icon={faImage} className="me-1" /> Image
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="d-flex flex-wrap gap-x-3 gap-y-4">
              {colors.map(color => (
                <ColorCheckbox color={color} key={color} />
              ))}

              <CustomColorButton />
              <RandomColorButton />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Row className="g-3 mb-4">
              <Col xs={6}>
                <ImageCheckbox img={kanban1} id="img1" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban2} id="img2" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban3} id="img3" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban4} id="img4" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban5} id="img5" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban6} id="img6" />
              </Col>
              {customBgImage && (
                <Col xs={12}>
                  <ImageCheckbox img={customBgImage} id="customImg" />
                </Col>
              )}
              <Col xs={12}>
                <Dropzone
                  size="sm"
                  noPreview
                  accept={{
                    'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                  }}
                  onDrop={(acceptedFiles: File[]) => {
                    const image = URL.createObjectURL(acceptedFiles[0]);
                    setCustomBgImage(image);
                    setFormData({
                      ...formData,
                      backgroundImage: image
                    });
                  }}
                >
                  <div className="text-body-tertiary text-opacity-85">
                    or, Add a custom background
                    <br />
                    <img className="mt-3" src={imageIcon} width={30} alt="" />
                  </div>
                </Dropzone>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default BackgroundColorForm;
