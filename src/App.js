import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./component/layout/Layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";
import Modal from "./component/layout/Modal";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch } from "react-redux";
import { getProduct } from "./redux/productSlice";


const App = () => {
  const [product, setProduct] = useState();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage product={product} />} />
          <Route path="/user-profile" element={<ProfilePage />} />
          <Route path="/test" element={<Modal />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="product" element={<ShopPage />} />
          <Route path="product/:name" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
