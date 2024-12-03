import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./component/layout/Layout";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NewProductPage from "./pages/AdminPages/NewProductPage";
import { useDispatch } from "react-redux";
import { fetchAllProductsAsync } from "./redux/product/productSlice";
import { getFromLocal } from "./redux/auth/authSlice";
import Modal from "./component/uiComponents/Modal";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromLocal());
    dispatch(fetchAllProductsAsync());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/test"
            element={
              <Modal>
                <h1>Hello</h1>
              </Modal>
            }
          />
          <Route path="product" element={<ShopPage />} />
          <Route path="product/:name" element={<ProductPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
