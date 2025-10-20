import AuthSimpleLayout from 'layouts/AuthSimpleLayout';
import LockScreenForm from 'components/modules/auth/LockScreenForm';

const LockScreen = () => {
  return (
    <AuthSimpleLayout logo={false} className="col-xl-5 col-xxl-3">
      <LockScreenForm />
    </AuthSimpleLayout>
  );
};

export default LockScreen;
