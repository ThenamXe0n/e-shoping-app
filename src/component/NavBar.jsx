import React, { useRef, useState } from "react";
import Logo from "../Assets/logo-eShop.svg";
import { Link } from "react-router-dom";
import { NavList } from "../Data/NavItemData";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navDiv = useRef();
  return (
    <header className="h-fit flex items-center md:justify-around justify-between bg-blue-600 sticky top-0 z-50 text-xl py-5 text-white rounded-b shadow-2xl">
      <div className="pl-5 md:pl-0">
        <img src={Logo} alt="Logo" />
      </div>
      <nav
        ref={navDiv}
        className="absolute bg-[#2563ebcc] rounded-lg shadow-2xl md:bg-inherit min-h-[40vh] md:min-h-fit flex items-center justify-center left-0 top-[8vh] duration-1000 w-full md:w-auto md:static"
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
      <div id="profile-opt" className="flex items-center font-medium ">
        <div className="profile">
          <FaRegUser className="text-2xl hover:text-gray-400 duration-300 hover:cursor-pointer"
            onClick={() => {
              setProfileOpen(!profileOpen);
            }}/>

          {profileOpen && (
            <div className="text-lg m-2 absolute bg-white text-black shadow-2xl right-28 p-2 max-h-fit rounded-lg">
              <div className="flex p-2 items-center gap-4 border-2 rounded-lg">
                <div
                  id="profile"
                  className="size-12 rounded-full bg-blue-200"
                ></div>
                <div id="user-info">
                  <span>John Doe</span><br/>
                  <span className="text-sm font-thin">user@gmail.com</span>
                </div>
              </div>
              {/* <p className="">Username</p>
              <div className="w-6 h-6 rounded-full bg-cyan-400"></div> */}
            </div>
          )}
        </div>
        <svg id="menu"
          onClick={(e) =>
            console.log(navDiv.current.classList.toggle("top-[-80vh]"))
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="hover:text-gray-400 duration-300 hover:cursor-pointer size-10 text-3xl text-white md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
};

export default NavBar;
