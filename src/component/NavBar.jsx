import React, { useState, useEffect, useContext } from "react";
import Logo from "../Assets/logo-eShop.svg";
import { Link } from "react-router-dom";
import { NavList } from "../Data/NavItemData";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import ProductContext from "../contextAPI/ProductContext";

const NavBar = () => {
  let isLoggedIn = localStorage.getItem("logginStatus")
  const {product} = useContext(ProductContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [productList, setProductList] = useState([]);

  

  const filterProduct = () => {
    const filteredProducts = product.filter((item) =>
      item.product.includes(searchedProduct) || item.category.includes(searchedProduct) || String(item.finalprice).includes(searchedProduct)
    );
    console.log("filtered", filterProduct);
    setProductList(filteredProducts);
  };

  useEffect(() => {
    filterProduct();
  }, [searchedProduct]);


console.log(product)

  return (
    <header className=" w-screen bg-white h-16 flex items-center justify-evenly shadow-xl fixed top-0 z-50 ">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className="flex items-center gap-10 cursor-pointer font-medium ">
          {NavList.map((item, index) => (
            <Link key={index} to={item.url}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="w-1/6 flex px-2 items-center bg-slate-400 rounded h-8">
        <span>
          <IoSearch color="white" size={20} />
        </span>
        <input
          onChange={(e) => {
            setSearchedProduct(e.target.value);
          }}
          className="pl-1 focus:outline-none bg-transparent text-white"
          type="search"
          placeholder="enter product name"
        />
        {searchedProduct?.length >=2 && (
          <div
            id="searched-product-container"
            className="min-h-[40vh] p-2  min-w-[40vw] border-2 top-12 bg-slate-600 right-56 relative self-start"
          >
            {productList.map((item) => (
             <Link to={`/product/${item.product}`} onClick={()=>{setSearchedProduct(null)}}> <div
                id="product-list"
                className="flex items-center gap-x-4 border-2 rounded-md my-2 border-white shadow-md px-2"
              >
                <div
                  id="thumbnail"
                  className="rounded-2xl bg-white p-1 m-1 size-12 "
                >
                  <img src={item?.thumbnail} alt="thumnail" />
                </div>
                <h3 className="capitalize font-medium ">{item.product}</h3>
                <p>${item.finalprice}</p>
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div id="profile-opt" className="flex items-center font-medium">
       {!isLoggedIn ?(<Link to={"/login"}> <button className="py-1 px-4 rounded-xl">Login</button></Link>):(
       <Link to={"/login"} onClick={()=>{let ask = window.confirm("are you sure?");ask && localStorage.clear()}}> <button className="py-1 px-4 rounded-xl">Logout</button></Link>
       )} <div>
          <button
            className="py-1 px-4 rounded-xl "
            onClick={() => {
              setProfileOpen(!profileOpen);
            }}
          >
            Profile
          </button>
          {profileOpen && (
            <div className="text-lg my-4 absolute shadow-xl backdrop-blur-sm bg-[#5ae7e74f] right-24 px-5 py-5 w-60 h-60 flex gap-20">
              <div className="flex h-fit p-2 items-center gap-4 border-2 font-light">
                <div
                  id="profile"
                  className="size-11 rounded-full bg-cyan-400"
                ></div>
                <div id="user-info " className="font-bold text-black">
                  <h3>user name</h3>
                  <p>user@gmail.com</p>{" "}
                </div>
              </div>
              {/* <p className="">Username</p>
              <div className="w-6 h-6 rounded-full bg-cyan-400"></div> */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
