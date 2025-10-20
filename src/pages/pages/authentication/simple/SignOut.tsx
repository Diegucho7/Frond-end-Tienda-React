import AuthSimpleLayout from 'layouts/AuthSimpleLayout';
import SignOutForm from 'components/modules/auth/SignOutForm';

const SignOut = () => {
  return (
    <AuthSimpleLayout logo={false}>
      <SignOutForm layout="simple" />
    </AuthSimpleLayout>
  );
};

export default SignOut;
