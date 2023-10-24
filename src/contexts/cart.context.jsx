import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const addQuantityToCrtItem = (cartItems, itemIdToUpdate, numberToAdd) => {
  const updatedCart = cartItems.map((item) => {
    if (item.id === itemIdToUpdate) {
      return { ...item, quantity: item.quantity + numberToAdd };
    } else {
      return item;
    }
  });
  return updatedCart.filter((item) => item.quantity > 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  increasItemQuantity: () => {},
  decreasItemQuantity: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalCount, item) => totalCount + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (totalSum, item) => totalSum + item.quantity * item.price,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const increasItemQuantity = (cartItem) => {
    setCartItems(addQuantityToCrtItem(cartItems, cartItem.id, 1));
  };

  const decreasItemQuantity = (cartItem) => {
    setCartItems(addQuantityToCrtItem(cartItems, cartItem.id, -1));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItemToRemove.id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    increasItemQuantity,
    decreasItemQuantity,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
