import ResetPasswordForm from 'components/modules/auth/ResetPasswordForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const ResetPassword = () => {
  return (
    <AuthSimpleLayout>
      <ResetPasswordForm />
    </AuthSimpleLayout>
  );
};

export default ResetPassword;
