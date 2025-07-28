import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  console.log();
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
