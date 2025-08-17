import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../Pages/Home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import { TicketsPage } from '../Pages/Tickets/ui/TicketsPage';
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
        path: 'tickets',
        element: <TicketsPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
