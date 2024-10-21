import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./component/layout/Layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";
import Modal from "./component/layout/Modal";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="user-profile" element={<ProfilePage/>}/>
        <Route path="test" element={<Modal/>}/>
        <Route path="product" element={<ShopPage />} />
          <Route path="product/:name" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
