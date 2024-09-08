import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Cart.module.css";
import CartItem from "./Cartitem";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(existingItemIndex, 1);
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }

    console.log("Updated cart:", cartItems);
  };

  return (
    <div className={style.cartContainer}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className={style.emptyCart}>
          Your cart is currently empty. Add some products to get started!
        </div>
      ) : (
        <div className={style.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
      <h2 className={style.h2}>Recommended products</h2>
      <div className={style.productList}>
        {products.map((product) => (
          <div key={product.id} className={style.product}>
            <img
              src={product.image}
              alt={product.title}
              className={style.productImage}
            />
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <button
              onClick={() => handleAddToCart(product)}
              className={style.button}
            >
              {cartItems.some((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
