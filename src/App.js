import "./App.css";
import Header from "./Header/Header";
import Productlist from "./Product-list/Product-list";
import Navigation from "./Navigation bar/Navigation";
import { useState, createContext } from "react";
import ContactUs from "./ContactUs/Contact";
import Home from "./Screen/Home";
import ProductDetails from "./Screen/ProductDetails";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/About";
import Cart from "./CartPage/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container1">
      <div className="">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="Contact" element={<ContactUs />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="products" element={<Productlist />} />
          <Route path="products/:ProductId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
