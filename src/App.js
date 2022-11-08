import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/chekout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
