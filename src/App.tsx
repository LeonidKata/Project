import './App.css';
import { Layout } from './app/layout/Layout';

const App = () => {

  return (
    <>
      {/* Добавить layout в роутинг и настроить получение дочерних компонентов*/}
      <Layout>
        Content
      </Layout>
    </>
  )
}

export default App
