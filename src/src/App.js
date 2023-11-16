import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main';

function App() {

  return (
    <div>
      <Routes>
        <Route element={ <Main /> } path='/pedidos' />
        <Route element={ <Main /> } path='/productos' />
      </Routes>
    </div>
  );
}

export default App;
