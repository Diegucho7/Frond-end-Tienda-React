import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { useMemo } from 'react';
import { ProgressBar } from 'react-bootstrap';

const StepProgressBoard = ({ className }: { className?: string }) => {
  const { totalStep, selectedStep } = useWizardFormContext();
  const value = useMemo(
    () => selectedStep * (100 / totalStep),
    [selectedStep, totalStep]
  );
  return (
    <div className={className}>
      <p className="mb-2 text-body-secondary">
        Step: <span>{selectedStep}</span>
      </p>
      <ProgressBar
        now={value}
        style={{ height: 6 }}
        className="bg-body-tertiary"
      />
    </div>
  );
};

export default StepProgressBoard;
