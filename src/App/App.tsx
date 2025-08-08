import { Outlet } from 'react-router-dom';
import SignInForm from '../Features/auth/ui/SignInForm';
import './App.css';
import { Layout } from './layout/Layout';
import './styles/reset.css';

function App() {
  return (
    <>
      <Layout>
        {/*<Outlet />*/}
        <SignInForm />
      </Layout>
    </>
  );
}

export default App;
