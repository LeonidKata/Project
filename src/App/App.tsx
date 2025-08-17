// import { Outlet } from 'react-router-dom';
import { TicketsPage } from '../Pages/Tickets/ui/TicketsPage';
import './App.css';
import { Layout } from './layout/Layout';
import './styles/reset.css';

function App() {
  return (
    <>
      <Layout>
        {/* <Outlet /> */}
        <TicketsPage />
      </Layout>
    </>
  );
}

export default App;
