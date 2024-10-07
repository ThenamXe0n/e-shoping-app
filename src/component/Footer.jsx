import React from "react";
import Logo from "../Assets/logo-eShop.svg";
import { FooterCompany, FooterQuick } from "../Data/NavItemData";

const Footer = () => {
  return (
    <div className="w-screen h-80 border-t-2 shadow-xl flex items-center justify-evenly gap-40 bg-[#FFD43D]">
      <div>
        <img className="my-5 " src={Logo} width={150} height={150} alt="" />
        <p className="font-light">Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit.</p>
      </div>

      <div className="flex flex-col gap-5" id="company">
        <div>
          <h1 className="font-semibold text-xl">Company</h1>
        </div>
        <div className="flex flex-col gap-2">
        {FooterCompany.map((item, index)=>(
            <h3 key={index}>{item.title}</h3>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5" id="quick-links">
        <div>
          <h1 className="font-semibold text-xl">Quick Links</h1>
        </div>
        <div className="flex flex-col gap-2">
          {FooterQuick.map((item, index)=>(
            <h3 key={index}>{item.title}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
