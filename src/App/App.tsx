import { Outlet } from 'react-router-dom';

import '../app/styles/reset.css';
import './App.css';
import { Layout } from './layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
