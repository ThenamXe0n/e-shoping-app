import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const fetchedData = useSelector((state) => state.product.product);
  // console.log(fetchedData)

  // SORTING FILTERED DATA FROM API AND USING SEARCH VALUE AS A DEPENDENCY TO AVOID INFINITE RE-RENDER
  const [filteredData, setFilteredData] = useState([]);
  function filterProducts() {
    setFilteredData(
      fetchedData?.filter(
        (item) =>
          item.product.includes(searchValue) ||
          item.category.includes(searchValue)
      )
    );
    // console.log(filteredData)
  }
  useEffect(() => {
    filterProducts();
  }, [searchValue]);

  return (
    <>
      <div className="w-1/4">
        <label htmlFor="search">
          <IoIosSearch className="absolute z-50 text-black text-3xl mt-1" />
        </label>
        <input
          id="search"
          type="search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="w-full py-1 rounded-lg focus:outline-none text-black pl-8 focus:bg-white bg-[#fff9] cursor-text duration-300"
        />
        {/* SEARCHED PRODUCT BOX WITH A CONDITION OF ENTERING AT LEAST 3 CHAR AT SEARCH */}
        {searchValue.length >= 3 && (
          <ul className="max-h-80 overflow-y-auto w-full left-0 mt-3 md:w-1/2 md:left-80 lg:w-1/4 lg:left-auto shadow-2xl shadow-black rounded-lg  fixed bg-[#fff]">
            {/* MAPPING OF FILTERED DATA */}
            {filteredData &&
              filteredData?.map((item) => (
                <Link to={`/product/${item.product}`}>
                  <li className="text-black hover:bg-gray-400 duration-300 cursor-pointer flex p-2 items-center gap-4 border-2 rounded-lg">
                    <div id="profile" className="size-12 rounded-full overflow-hidden">
                      <img src={item?.thumbnail} alt="Product" />
                    </div>
                    <div id="user-info">
                      <p>{item?.product}</p>
                      <p className="text-sm font-thin">₹{item?.finalprice}</p>
                    </div>
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
