import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { JSX } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';

export const RoleGuard = ({
  children,
  allowedRoles
}: {
  children: JSX.Element;
  allowedRoles: ('ADMIN' | 'USER')[];
}) => {
  const { user, loading } = useAuth();

  // Mientras se verifica la autenticación, mostrar loader
  if (loading) {
    return <PhoenixLoader />;
  }

  // Si no hay usuario logueado, redirigir al login
  if (!user) return <Navigate to="/authentication/sign-in" replace />;

  // Si el usuario no tiene el rol permitido, redirigir al homepage
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/homepage" replace />;
  }

  return children;
};
