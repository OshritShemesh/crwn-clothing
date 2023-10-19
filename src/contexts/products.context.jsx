import { useState, createContext, useEffect } from "react";

import SHOP_DATA from "../shop-data.json"

export const ProductsContext = createContext({
  products: null,
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
