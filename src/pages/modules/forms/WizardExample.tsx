import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import WizardFormProvider from 'providers/WizardFormProvider';
import useWizardForm from 'hooks/useWizardForm';
import { Card, Col, Row, Tab } from 'react-bootstrap';
import WizardNav from 'components/wizard/WizardNav';
import WizardForm from 'components/wizard/WizardForm';
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';
import WizardBillingForm from 'components/forms/WizardBillingForm';
import WizardSuccessStep from 'components/wizard/WizardSuccessStep';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import classNames from 'classnames';

export interface WizardFormData {
  name: string;
  accept_terms: boolean;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  phone: string;
  dob: string;
  address: string;
  card: number;
  country: string;
  zip: number;
  date_of_expire: string;
  cvv: number;
}

const progressTabExampleCode = `
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardBillingForm from 'components/forms/WizardBillingForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import WizardForm from 'components/wizard/WizardForm';
import WizardNav from 'components/wizard/WizardNav';
import WizardSuccessStep from 'components/wizard/WizardSuccessStep';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import { Card, Tab } from 'react-bootstrap';

interface WizardFormData {
  name: string;
  accept_terms: boolean;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  phone: string;
  dob: string;
  address: string;
  card: number;
  country: string;
  zip: number;
  date_of_expire: string;
  cvv: number;
}

const ProgressTabExample = () => {
  const form = useWizardForm<WizardFormData>({
    totalStep: 4
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-body-highlight pt-3 pb-2 border-bottom-0">
          <WizardNav />
        </Card.Header>
        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={1}>
              <WizardForm step={1}>
                <WizardAccountForm id='progress'/>
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <WizardForm step={2}>
                <WizardPersonalForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <WizardForm step={3}>
                <WizardBillingForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={4}>
              <WizardSuccessStep />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
        <Card.Footer className="border-top-0">
          <WizardFormFooter 
            className={classNames({ 'd-none': !form.getCanNextPage })}
          />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};
`;

const withValidationExampleCode = `
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardBillingForm from 'components/forms/WizardBillingForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import WizardForm from 'components/wizard/WizardForm';
import WizardNav from 'components/wizard/WizardNav';
import WizardSuccessStep from 'components/wizard/WizardSuccessStep';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import { Card, Tab } from 'react-bootstrap';

interface WizardFormData {
  name: string;
  accept_terms: boolean;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  phone: string;
  dob: string;
  address: string;
  card: number;
  country: string;
  zip: number;
  date_of_expire: string;
  cvv: number;
}

const WithValidationExample = () => {
  const form = useWizardForm<WizardFormData>({
    totalStep: 4,
    validation: true
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-body-highlight pt-3 pb-2 border-bottom-0">
          <WizardNav />
        </Card.Header>
        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={1}>
              <WizardForm step={1}>
                <WizardAccountForm  id='validation'/>
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <WizardForm step={2}>
                <WizardPersonalForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <WizardForm step={3}>
                <WizardBillingForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={4}>
              <WizardSuccessStep />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
        <Card.Footer className="border-top-0">
          <WizardFormFooter 
            className={classNames({ 'd-none': !form.getCanNextPage })}
          />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};
`;

const WizardExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Wizard form"
        description="A form UI to enable users to achieve a goal through a series of
        steps."
      />
      <Row>
        <Col xs={12} xxl={6}>
          <PhoenixDocCard className="mb-4">
            <PhoenixDocCard.Header title="Progress Tab" />
            <PhoenixDocCard.Body hidePreview code={progressTabExampleCode}>
              <ProgressTabExample />
            </PhoenixDocCard.Body>
          </PhoenixDocCard>
        </Col>
        <Col xs={12} xxl={6}>
          <PhoenixDocCard className="mb-4">
            <PhoenixDocCard.Header title="With Validation" />
            <PhoenixDocCard.Body hidePreview code={withValidationExampleCode}>
              <WithValidationExample />
            </PhoenixDocCard.Body>
          </PhoenixDocCard>
        </Col>
      </Row>
    </div>
  );
};

const ProgressTabExample = () => {
  const form = useWizardForm({
    totalStep: 4
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-body-highlight pt-3 pb-2 border-bottom-0">
          <WizardNav />
        </Card.Header>
        <Card.Body className="pb-0">
          <Tab.Content>
            <Tab.Pane eventKey={1}>
              <WizardForm step={1}>
                <WizardAccountForm id="progress" />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <WizardForm step={2}>
                <WizardPersonalForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <WizardForm step={3}>
                <WizardBillingForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={4}>
              <WizardSuccessStep />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
        <Card.Footer className="border-top-0">
          <WizardFormFooter
            className={classNames({ 'd-none': !form.getCanNextPage })}
          />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};

const WithValidationExample = () => {
  const form = useWizardForm({
    totalStep: 4,
    validation: true
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-body-highlight pt-3 pb-2 border-bottom-0">
          <WizardNav />
        </Card.Header>
        <Card.Body className="pb-0">
          <Tab.Content>
            <Tab.Pane eventKey={1}>
              <WizardForm step={1}>
                <WizardAccountForm id="validation" />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <WizardForm step={2}>
                <WizardPersonalForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <WizardForm step={3}>
                <WizardBillingForm />
              </WizardForm>
            </Tab.Pane>
            <Tab.Pane eventKey={4}>
              <WizardSuccessStep />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
        <Card.Footer className="border-top-0">
          <WizardFormFooter
            className={classNames({ 'd-none': !form.getCanNextPage })}
          />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};

export default WizardExample;
