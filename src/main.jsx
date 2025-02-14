import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Calendar from './pages/Calendar/Calendar';
import FAQ from './pages/FAQ/FAQ';
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Team = lazy(() => import('./pages/Team/Team'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const ContactInfo = lazy(() => import('./pages/ContactInfo/ContactInfo'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/information',
        element: <ContactInfo />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
