import './App.css';
import { Layout } from './app/layout/Layout';
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {

  return (
    <>
      {/* Добавить layout в роутинг и настроить получение дочерних компонентов*/}
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
