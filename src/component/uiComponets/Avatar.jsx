import React, { useRef, useState } from "react";
import { RiContrastDropLine } from "react-icons/ri";

const Avatar = () => {
    const profileRef = useRef("")
  const [preview, setPreview] = useState("https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png");
  const handleFile = (e) => {
    const file = e.target.files[0];
    let url = URL.createObjectURL(file)
    let apiImgUrl = "https://websiteurl/imageFolder/MobileNav.jsx"
    console.log("file",file)
    console.log("file url : ",url)
    setPreview(url)
  };
  return (
    <div>
      <img onClick={()=>{profileRef.current.click()}} src={preview} className="min-w-28 min-h-28 max-w-28 max-h-28  rounded-full border-2 object-cover" alt="ImagePreview" />
      <input
      ref={profileRef}
      className="hidden"
        type="file"
        onChange={(e) => {
         handleFile(e);
        }}
        placeholder="enter image url"
      />
    </div>
  );
};

export default Avatar;
