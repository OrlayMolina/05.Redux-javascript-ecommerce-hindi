import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import CartDetails from './components/CartDetails';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
