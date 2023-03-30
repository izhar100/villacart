import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import Menu from './components/Menu/Menu';
import Stores from './components/home/Stores';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/stores' element={<Stores/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
    </Routes>
    <Footer />
  </>
  );
}

export default App;
