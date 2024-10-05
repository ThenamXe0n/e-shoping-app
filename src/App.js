import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./component/layout/Layout";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
