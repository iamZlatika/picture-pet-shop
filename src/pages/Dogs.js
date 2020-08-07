import React, { useContext } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/header/Header';
import Cards from '../components/cards/Cards';
import ShopContext from '../context/shop/ShopContext';

const Dogs = () => {
   
  const shopContext = useContext(ShopContext);
  const {loading, imgs} = shopContext;
  
  return (
    <div>
      <Header />
      <h1>Dogs</h1>
      <Cards />
      <Footer />
    </div>
  )
}

export default Dogs
