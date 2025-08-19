import { createBrowserRouter } from 'react-router-dom';

import { AirCraftPage } from '../Pages/Aircraft/AirCraftPage.tsx';
import { BookingPage } from '../Pages/Booking/BookingPage.tsx';
import { Home } from '../Pages/Home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import { TimeZones } from '../Pages/TimeZones/TimeZones';
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
        path: 'admin/time_zones',
        element: <TimeZones />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'aircraft',
        element: <AirCraftPage />,
      },
      {
        path: 'booking',
        element: <BookingPage />,
      },
    ],
  },
]);
