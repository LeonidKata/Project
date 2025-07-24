import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "../Pages/Home/Home";
import { NotFound } from "../Pages/NotFound/NotFound";


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
        element: <NotFound />
      },
    ],
  },
]);

