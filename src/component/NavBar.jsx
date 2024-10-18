import React, { useRef, useState } from "react";
import Logo from "../Assets/logo-eShop.svg";
import { Link } from "react-router-dom";
import { NavList } from "../Data/NavItemData";

const NavBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navDiv = useRef()
  return (
    <header className="w-screen text-xl py-6 md:h-fit text-white rounded-b flex items-center justify-around bg-blue-700 shadow-xl fixed top-0 z-50">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul ref={navDiv} className="flex flex-col items-center gap-12 justify-center absolute md:static md:min-h-fit md:w-fit md:flex-row  w-screen min-h-[50vh] left-0 top-[95%] bg-white text-black md:bg-transparent md:text-white">
          {NavList.map((item, index) => (
            <Link key={index} to={item.url}>
              <li className="hover:text-gray-400 hover:cursor-pointer">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div id="profile-opt" className="flex items-center font-medium">
        <button className="py-1 px-4 rounded-xl">Login</button>
        <div className="profile">
          <button
            className="py-1 px-4 rounded-xl "
            onClick={() => {
              setProfileOpen(!profileOpen);
            }}
          >
            Profile
          </button>
          {profileOpen && (
            <div className="text-lg my-4 absolute shadow-xl right-24 px-5 py-5 w-60 h-60 flex gap-20">
              <div className="flex h-fit p-2 items-center gap-4 border-2 font-light">
                <div
                  id="profile"
                  className="size-11 rounded-full bg-cyan-400"
                ></div>
                <div id="user-info">
                  <h3>user name</h3>
                  <p>user@gmail.com</p>{" "}
                </div>
              </div>
              {/* <p className="">Username</p>
              <div className="w-6 h-6 rounded-full bg-cyan-400"></div> */}
            </div>
          )}
        </div>
        <svg onClick={(e)=>console.log(navDiv.current.classList.toggle("top[-1000%]"))}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-10 text-3xl text-white md:hidden"
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
