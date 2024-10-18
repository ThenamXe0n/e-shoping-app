import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [priceFilter,setPriceFilter] = useState(10000000000)
  const [productData, setProuductData] = useState([]);

  async function loadProducts() {
    try {
      const res = await axios.get("http://localhost:8080/allproducts");
      const data = res.data;
      setProuductData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleFilter(){
    let filteredProducts = productData.filter((item)=>item.finalprice<=priceFilter)
    console.log("filtered",filteredProducts)
    return filteredProducts
  }


  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="flex w-screen">
      <section className=" lg:px-12 w-screen lg:w-[79vw] md:w-[79vw] ">
        <h1 className="text-3xl px-4 font-bold">Shop Page</h1>
        <div className="flex px-4 justify-between items-center">
          <div>showing 1-12 of 19 results</div>
          <div>
            <select>
              <option>Default Sorting</option>
              <option>low to high</option>
              <option>high to Low</option>
              <option>Popularity</option>
              <option>new</option>
            </select>
          </div>
        </div>
        {/* ----------------------product section--------------- */}
        <div className="my-5 border-2  py-4 px-2 min-h-[60vh]   rounded-3xl ">
          {productData.length ? (
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {handleFilter().map((product) => (
               <Link to={`/product/${product.product}`}> <ProductCard
                  img={product?.thumbnail}
                  title={product?.product}
                  price={product.price}
                  finalPrice={product.finalprice}
                  rating={product.rating}
                />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-5xl font-extrabold   flex items-center justify-center h-full ">
              {" "}
              No Product Found!{" "}
            </div>
          )}
        </div>
      </section>
      {/* ------------------sidebar------------------ */}
      <section className="w-[15%] hidden lg:block md:block sm:hidden">
        <div id="filter-section" className="mt-24">
          <h3 className="text-center text-2xl font-bold">Filter By Price</h3>
          <input
            className="w-full"
            type="range"
           onChange={(e)=>setPriceFilter(e.target.value)}
            max={1000}
            min={299}
          />
          <div className="flex justify-between items-center">
            <span>$299</span>
            <span>$1000</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
