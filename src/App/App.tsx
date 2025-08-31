import { Outlet } from 'react-router-dom';

import { Layout } from '../App/layout/Layout';
import '../app/styles/reset.css';
import './App.css';

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
