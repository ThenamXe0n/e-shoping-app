import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

// FETCHING DATA FROM API
const ProductContextProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const fetchFromAPI = async () => {
    const request = await axios.get("http://localhost:8080/allproducts");
    const data = request.data;
    console.log(data)
    setFetchedData(data);
  };
  useEffect(() => {
    fetchFromAPI();
  },[]);
console.log(fetchedData)
  return (
    <ProductContext.Provider value={{fetchedData,setFetchedData}}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
