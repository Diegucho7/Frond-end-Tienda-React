import TwoFAForm from 'components/modules/auth/TwoFAForm';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bg from 'assets/img/bg/40.png';

const TwoFA = () => {
  return (
    <AuthSplitLayout bg={bg}>
      <TwoFAForm layout="split" />
    </AuthSplitLayout>
  );
};

export default TwoFA;
