import { Outlet } from 'react-router-dom';

import './App.css';
import { Layout } from './layout/Layout';
import './styles/reset.css';

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
