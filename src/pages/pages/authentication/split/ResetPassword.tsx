import ResetPasswordForm from 'components/modules/auth/ResetPasswordForm';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bg from 'assets/img/bg/35.png';

const ResetPassword = () => {
  return (
    <AuthSplitLayout bg={bg}>
      <ResetPasswordForm />
    </AuthSplitLayout>
  );
};

export default ResetPassword;
