import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux"
import ProductContextProvider from "./contextAPI/ProductContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <ProductContextProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        
      />
    </ProductContextProvider>
    </Provider>
  </React.StrictMode>
);
