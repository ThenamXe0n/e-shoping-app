import React from "react";
import Logo from "./logo-eShop.svg";
import { FooterCompany, FooterQuick } from "../../Data/NavItemData";

const Footer = () => {
  return (
    <footer className="p-2 border-t-2 rounded-t-lg flex flex-col md:flex-row md:justify-around items-center bg-blue-400">
      <div className="flex items-center flex-col p-2">
        <img className="my-5 " src={Logo} width={150} height={150} alt="Company-Logo" />
        <p className="text-sm">
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit.
        </p>
      </div>

      {/* COMPANY */}
      <div className="flex flex-col p-2" id="company">
        <h1 className="font-bold text-2xl my-2">Company</h1>
        <ul className="flex flex-col">
          {FooterCompany.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>

      {/* QUICK LINKS */}
      <div className="flex flex-col p-2" id="quick-links">
        <h1 className="font-bold text-2xl my-2">Quick Links</h1>
        <ul className="flex flex-col">
          {FooterQuick.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
