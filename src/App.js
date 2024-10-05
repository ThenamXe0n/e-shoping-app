import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import ProductPage from "./component/ProductPage";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
