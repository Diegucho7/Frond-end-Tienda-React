import TwoFAForm from 'components/modules/auth/TwoFAForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const TwoFA = () => {
  return (
    <AuthSimpleLayout className="col-xxl-4">
      <TwoFAForm />
    </AuthSimpleLayout>
  );
};

export default TwoFA;
