import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '../app/styles/reset.css';
import './index.css';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
