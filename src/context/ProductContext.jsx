import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({children}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://63f768f8e8a73b486af749f0.mockapi.io/api/products"
      );
      const data = await res.json();
      setProducts(data)
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
