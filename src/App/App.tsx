import { Outlet } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/Layout';
import './styles/reset.css';

const App = () => {

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
