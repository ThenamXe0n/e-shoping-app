import React, {useState}from "react";
import Logo from "../Assets/logo-eShop.svg";
import { Link } from "react-router-dom";
import { NavList } from "../Data/NavItemData";

const NavBar = () => {
  const [profileOpen,setProfileOpen] = useState(false)
  return (
    <header className=" w-screen bg-white h-16 flex items-center justify-evenly shadow-xl fixed top-0 z-50 ">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className="flex items-center gap-10 cursor-pointer font-medium ">
          {NavList.map((item, index) => (
            <Link key={index} to={item.url}>
              <li >{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div id="profile-opt" className="flex items-center font-medium">
        <button className="py-1 px-4 rounded-xl">Login</button>
        <div>
          <button className="py-1 px-4 rounded-xl " onClick={()=>{setProfileOpen(!profileOpen)}}>Profile</button>
            {profileOpen && <div className="text-lg my-4 absolute shadow-xl right-24 px-5 py-5 w-60 h-60 flex gap-20" >
              <div className="flex h-fit p-2 items-center gap-4 border-2 font-light" >
                <div id="profile" className="size-11 rounded-full bg-cyan-400"></div>
                <div id="user-info"><h3>user name</h3><p>user@gmail.com</p> </div>
              </div>
              {/* <p className="">Username</p>
              <div className="w-6 h-6 rounded-full bg-cyan-400"></div> */}
            </div>}
            
        </div>
      </div>
    </header>
  );
};

export default NavBar;
