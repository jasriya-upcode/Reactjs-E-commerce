
import React from 'react';
import style from './Cart.module.css'; 

const CartItem = ({ product, onAddToCart }) => {
  return (
    <div className={style.cartItem}>
      <img src={product.image} alt={product.title} className={style.cartItemImage} />
      <div className={style.cartItemDetails}>
        <h3>{product.title}</h3>
        <button onClick={() => onAddToCart(product)} className={style.button2}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
