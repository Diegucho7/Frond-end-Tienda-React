import LockScreenForm from 'components/modules/auth/LockScreenForm';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bg from 'assets/img/bg/33.png';

const LockScreen = () => {
  return (
    <AuthSplitLayout bg={bg} logo={false}>
      <LockScreenForm />
    </AuthSplitLayout>
  );
};

export default LockScreen;
