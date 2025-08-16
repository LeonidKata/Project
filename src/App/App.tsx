// import { Outlet } from 'react-router-dom';
import { DestinationPage } from '../Pages/Destination/ui/DestinationPage';
import './App.css';
import { Layout } from './layout/Layout';
import './styles/reset.css';

function App() {
  return (
    <>
      <Layout>
        <DestinationPage />
      </Layout>
    </>
  );
}

export default App;
