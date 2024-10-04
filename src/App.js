import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<NavBar/>}/>
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
