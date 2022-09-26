import './App.css';
import {Fragment, useState} from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler =() => {
    setcartIsShown(true);
  }
  
  const hideCartHandler =() => {
    setcartIsShown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>       
    </CartProvider>
  );
}

export default App;
