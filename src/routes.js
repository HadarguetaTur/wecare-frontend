import { useRoutes } from 'react-router-dom';
import { AuthTabs, ForgotPassword, ResetPassword } from './pages/auth';
import Streams from './pages/social/streams/streams';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    },
    {
      path: '/app/social/streams',
      element: <Streams />
    }
  ]);

  return elements;
};
