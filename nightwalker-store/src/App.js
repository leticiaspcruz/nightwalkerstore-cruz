import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Home, 
  Category, 
  Categories, 
  Products, 
  ProductDetail, 
  Cart, 
  NotFound, 
  Checkout 
} from './pages';
import { CartProvider } from "./context/CartProvider";

function App() {  
  return (
    <BrowserRouter>
     <CartProvider>
      <Routes>
          <Route exact path={'/'} element={<Home />}/>
          <Route exact path={'/category'} element={<Categories />}/>
          <Route exact path={'/products'} element={<Products />}/>
          <Route 
            exact 
            path={'/category/:categoryName'} 
            element={<Category />}/>
          <Route  
            exact path={'/product/:productId'} 
            element={<ProductDetail />}/>
          <Route exact path={'/cart'} element={<Cart />}/>
          <Route exact path={'/checkout'} element={<Checkout />}/>
          <Route exact path={'/*'} element={<NotFound />}/>
        </Routes>
     </CartProvider>
    </BrowserRouter>
  );
}

export default App;
