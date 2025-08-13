/* eslint-disable prettier/prettier */
// import { Outlet } from 'react-router-dom';
import { Passengers } from '../Pages/Passengers/ui/Passengers';
import './App.css';
import { Layout } from './layout/Layout';
import './styles/reset.css';

function App() {
  return (
    <>
      <Layout>
        {/* <Outlet /> */}
        <Passengers />
      </Layout>
    </>
  );
}

export default App;
