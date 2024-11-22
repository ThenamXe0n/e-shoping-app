import React, { useRef, useState } from "react";
import Logo from "./logo-eShop.svg";
import { Link } from "react-router-dom";
import { NavList } from "../../data/NavItemData";
import { FaRegUser } from "react-icons/fa";
import SearchBar from "../uiComponets/SearchBar";
import { IoIosMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutLocal } from "../../redux/auth/authSlice";

const NavBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navDiv = useRef();
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.loggedInUserData);

  // console.log(`LoginStatus: ${isLoggedIn}`);
  const dispatch = useDispatch();

  return (
    <header className="h-fit flex items-center md:justify-around justify-between bg-blue-600 sticky top-0 z-10 text-xl py-3 text-white rounded-b shadow-2xl">
      {/* COMPANY LOGO */}
      <div className="pl-5 md:pl-0">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* MOBILE RESPONSIVE MENU WITH LIST ITEMS */}
      <nav
        ref={navDiv}
        className="absolute bg-[#2563ebcc] rounded-lg shadow-2xl shadow-gray-700 md:bg-inherit min-h-[40vh] md:min-h-fit flex items-center justify-center left-0 top-[-80vh] duration-1000 w-full md:w-auto md:static"
      >
        <ul className="flex flex-col md:flex-row items-center gap-4">
          {NavList.map((item, index) => (
            <Link key={index} to={item.url}>
              <li className="hover:text-gray-400 duration-300 hover:cursor-pointer">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* SEARCH BAR */}
      <SearchBar />

      {!isLoggedIn && (
        <Link to={"/login"}>
          <span className="hidden md:block">Login</span>
        </Link>
      )}

      {/* PROFILE OPTIONS */}
      <div id="profile-opt" className="flex items-center font-medium ">
        <div className="profile">
          <FaRegUser
            className="text-2xl hover:text-gray-400 hover:cursor-pointer"
            onClick={() => {
              setProfileOpen(!profileOpen);
            }}
          />
          {/* USER PROFILE MENU */}
          {profileOpen && (
            <div className="text-lg absolute bg-white text-black shadow-2xl shadow-black right-0 lg:right-24 p-2 min-w-52 max-h-fit rounded-lg">
              {isLoggedIn ? (
                <div>
                  <div className="flex p-2 items-center gap-4 border-2 rounded-lg">
                    <div
                      id="profile"
                      className="size-16 flex items-center justify-center rounded-full bg-blue-200"
                    >
                      <FaRegUser className="text-gray-800 size-10" />
                    </div>
                    <div id="user-info">
                      <span>{userInfo?.name}</span>
                      <br />
                      <span className="text-sm font-thin">
                        {userInfo?.email}
                      </span>
                      <span
                        className="block text-end cursor-pointer text-sm hover:text-gray-600"
                        onClick={() => {
                          dispatch(logoutLocal());
                        }}
                      >
                        <Link to="">Logout</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col my-5 mx-2.5 items-stretch  gap-2">
                  <Link to={"/login"}>
                    <div className="cursor-pointer text-center hover:text-gray-400 bg-blue-600 text-white p-2 border border-black rounded-lg">
                      Login
                    </div>
                  </Link>
                  <Link to={"/register"}>
                    <div className="cursor-pointer text-center hover:text-gray-400 bg-blue-600 text-white p-2 border border-black rounded-lg">
                      Register
                    </div>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu bar */}
        <IoIosMenu
          onClick={(e) => {
            navDiv.current.classList.toggle("top-[-80vh]");
            navDiv.current.classList.toggle("top-[8vh]");
          }}
          className="hover:text-gray-400 duration-300 hover:cursor-pointer size-10 text-3xl text-white md:hidden"
        />
      </div>
    </header>
  );
};

export default NavBar;
