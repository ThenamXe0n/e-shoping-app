import React, { useState,useEffect } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/allproducts`);
      setProduct(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(product)
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
