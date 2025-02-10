import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard/Dashboard';
import Team from './pages/Team/Team';
import Profile from './pages/Profile/Profile';
import ContactInfo from './pages/ContactInfo/ContactInfo';

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
        path: '/information',
        element: <ContactInfo />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
