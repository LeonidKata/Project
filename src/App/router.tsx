import { createBrowserRouter } from 'react-router-dom';

import { DestinationPage } from '../Pages/Destination/ui/DestinationPage';
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
        path: 'destination',
        element: <DestinationPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
