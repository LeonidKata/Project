// import { Outlet } from 'react-router-dom';
import { SeatingArrangementsPage } from '../Pages/SeatingArrangements/ui/SeatingArrangementsPage';
import '../app/styles/reset.css';
import './App.css';
import { Layout } from './layout/Layout';

function App() {
  return (
    <>
      <Layout>
        {/* <Outlet /> */}
        <SeatingArrangementsPage />
      </Layout>
    </>
  );
}

export default App;
