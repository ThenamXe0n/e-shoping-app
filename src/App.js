import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./component/layout/Layout";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="product" element={<ShopPage />} />
          <Route path="product/:name" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
