import React from "react";

const NavBar = () => {
  return (
    <header className="flex items-center justify-around shadow-xl fixed top-0 z-50">
      <div>LOGO</div>
      <nav>
        <ul className="flex items-center gap-6 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
      <div id="profile-opt">
        <button>login</button>
        <button>Profile</button>
      </div>
    </header>
  );
};

export default NavBar;
