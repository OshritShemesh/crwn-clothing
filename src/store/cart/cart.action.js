import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const increasItemQuantity = (cartItems, cartItem) => {
  const newCartItems = addQuantityToCrtItem(cartItems, cartItem.id, 1);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreasItemQuantity = (cartItems, cartItem) => {
  const newCartItems = addQuantityToCrtItem(cartItems, cartItem.id, -1);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = cartItems.filter(
    (item) => item.id !== cartItemToRemove.id
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

//helper funcs
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
