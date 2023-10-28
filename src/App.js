import './App.css';
import Navbar from './Components/Navbar';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import {Routes, Route,BrowserRouter } from 'react-router-dom';
import banner_mens from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png'
import Footer from './Components/Footer';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/men' element={<ShopCategory banner={banner_mens} category="men"/>}/>
      <Route path='/women' element={<ShopCategory banner={banner_women} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={banner_kids} category=  "kids"/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>

      </Routes>
      </BrowserRouter>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
