import { createBrowserRouter } from 'react-router-dom';

import SignInForm from '../Features/auth/ui/SignInForm';
import { Home } from '../Pages/Home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signin',
        element: <SignInForm />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
