import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Header from "./Header/Navebar";
import Products from "./Content/Products";
import Contact from "./Content/Contact";
import About from "./Content/About";
import React from "react";
import Home from "./Content/Home";
import Search from "./Content/Search";
import Singlepage from "./Content/SinglePage";
import Userid from "./Content/Userid";
import { CartProvider } from "./Content/CartContext";
import Cart from "./Content/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header projectName="shope 67"></Header>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<Singlepage />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/Userid/" element={<Userid />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
