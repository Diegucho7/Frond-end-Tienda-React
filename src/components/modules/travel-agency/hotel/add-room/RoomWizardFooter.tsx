import Button from 'components/base/Button';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const RoomWizardFooter = ({
  nextBtnLabel = 'Continue',
  handleSubmit
}: {
  nextBtnLabel?: string;
  handleSubmit?: () => void;
}) => {
  const { selectedStep, goToStep, getCanNextPage } = useWizardFormContext();

  return (
    <div className="mt-6 d-flex flex-wrap gap-2">
      <Button variant="phoenix-danger">Discard</Button>
      <Button variant="phoenix-primary">Save draft</Button>
      <Button
        variant="primary"
        className="px-6"
        onClick={() => {
          if (getCanNextPage) {
            goToStep(selectedStep + 1);
          } else {
            if (handleSubmit) {
              handleSubmit();
            }
          }
        }}
      >
        {nextBtnLabel}
      </Button>
    </div>
  );
};

export default RoomWizardFooter;
