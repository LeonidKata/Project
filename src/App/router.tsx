import { createBrowserRouter } from 'react-router-dom';

import { BookingPage } from '../Pages/Booking/BookingPage.tsx';
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
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'booking',
        element: <BookingPage />,
      },
    ],
  },
]);
