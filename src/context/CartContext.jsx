import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
      );
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  useEffect(() => {
    const amount = cart.reduce((acc, currentItem) => {
      return acc + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce(
      (acc, currentItem) => acc + currentItem.price * currentItem.amount,
      0
    );
    setTotal(total);
  });

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        itemAmount,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
