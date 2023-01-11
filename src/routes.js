import { AuthTabs, ForgotPassword, ResetPassword } from './pages/auth';
import Error from './pages/error/Error';
import { useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import StreamsSkeleton from './pages/social/streams/streamSkelaton';

const Social = lazy(() => import('./pages/social/Social'));
const Chat = lazy(() => import('./pages/social/chat/Chat'));
const Followers = lazy(() => import('./pages/social/followers/followers'));
const Following = lazy(() => import('./pages/social/following/following'));
const Notification = lazy(() => import('./pages/social/notificatiions/notifications'));
const People = lazy(() => import('./pages/social/peaple/Peaple'));
const Photos = lazy(() => import('./pages/social/photos/Photos'));
const Profile = lazy(() => import('./pages/social/profile/Profile'));
const Streams = lazy(() => import('./pages/social/streams/streams'));

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
      path: '/app/social',
      element: <Social />,
      children: [
        {
          path: 'streams',
          element: (
            <Suspense fallback={<StreamsSkeleton />}>
              <Streams />
            </Suspense>
          )
        },
        {
          path: 'chat/messages',
          element: (
            <Suspense>
              <Chat />
            </Suspense>
          )
        },
        {
          path: 'people',
          element: (
            <Suspense>
              <People />
            </Suspense>
          )
        },
        {
          path: 'followers',
          element: (
            <Suspense>
              <Followers />
            </Suspense>
          )
        },
        {
          path: 'following',
          element: (
            <Suspense>
              <Following />
            </Suspense>
          )
        },
        {
          path: 'photos',
          element: (
            <Suspense>
              <Photos />
            </Suspense>
          )
        },
        {
          path: 'notifications',
          element: (
            <Suspense>
              <Notification />
            </Suspense>
          )
        },
        {
          path: 'profile/:username',
          element: (
            <Suspense>
              <Profile />
            </Suspense>
          )
        }
      ]
    },
    {
      path: '*',
      element: <Error />
    }
  ]);

  return elements;
};
