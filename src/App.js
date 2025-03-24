import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Description from './components/Description';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Categories from './components/Categories';
import Electronics from './components/categories/Electronics';
import Jewelery from './components/categories/Jewelery';
import Men from './components/categories/Men';
import Womens from './components/categories/Womens';
import { useEffect, useState } from 'react';
import BuyNow from './components/BuyNow';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() =>{
    const user = localStorage.getItem('email');
    if(user){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  },[isLoggedIn]);
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={ isLoggedIn? <Cart/> : <Login/>}/>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Description />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/mensClothing" element={<Men />} />
        <Route path="/womensClothing" element={<Womens />} />
        <Route path="/placeorder" element={<BuyNow/>} />
      </Routes>
    </div>
  );
}

export default App;
