import ForgotPasswordForm from 'components/modules/auth/ForgotPasswordForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const ForgotPassword = () => {
  return (
    <AuthSimpleLayout className="col-xxl-4">
      <ForgotPasswordForm />
    </AuthSimpleLayout>
  );
};

export default ForgotPassword;
