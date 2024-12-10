import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";
import Header from "./components/header";

const App = () => {
  
  const initProducts = [
    { id: 1, name: "Water", price: 17 },
    { id: 2, name: "Juice", price: 25 },
    { id: 3, name: "Soda", price: 20 },
  ];
  const initCart = [];

  const [products] = useState(initProducts);
  const [cart, setCart] = useState(initCart);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container">
      <Header cartCount={cart.length} />
      <main className="main">
        <section className="left-section">
          <ProductList products={products} addToCart={addToCart} />
        </section>
        <section className="right-section">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </section>
      </main>
    </div>
  );
};

export default App;
