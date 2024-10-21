import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchValue,setSearchValue] = useState('')
  return (
    <>
      <div className="w-1/4">
      <label htmlFor="search">
        <IoIosSearch className="absolute z-50 text-black text-3xl mt-1" />
      </label>
        <input
          id="search"
          type="search"
          onChange={(e)=>{setSearchValue(e.target.value)}}
          className="w-full py-1 rounded-lg focus:outline-none text-black pl-8 focus:bg-white bg-[#fff9] cursor-text duration-300"
        />
        {searchValue.length >= 3 && <ul className="max-h-80 overflow-y-auto w-full left-0 mt-3 md:w-1/2 md:left-80 lg:w-1/4 lg:left-auto shadow-2xl rounded-lg  fixed bg-[#fff]">
          <li className="text-black flex p-2 items-center gap-4 border-2 rounded-lg">
            <div id="profile" className="size-12 rounded-full">
              <img src="" alt="Product" />
            </div>
            <div id="user-info">
              <p>John Doe</p>
              <p className="text-sm font-thin">user@gmail.com</p>
            </div>
          </li>
        </ul>}
      </div>
    </>
  );
};

export default SearchBar;
