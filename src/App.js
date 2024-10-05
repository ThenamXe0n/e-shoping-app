import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import Categories from "./component/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<NavBar />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/categories" element={<Categories/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
