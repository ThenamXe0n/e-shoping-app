import React, { useContext } from "react";
import ProductContext from "../../contextAPI/ProductContext";
import { useSelector } from "react-redux";

const ProductCard = ({ productData }) => {
  return (
    <div className="flex flex-col m-2 items-center justify-center">
      <img className="h-[60%]" src={productData?.thumbnail} alt="" />
      <h2 className="mt-1 text-2xl font-semibold">{productData?.product}</h2>
      <p className="text-gray-600">{productData?.description}</p>
    </div>
  );
};

const ProductDisplaySection = () => {
  const  product = useSelector((state)=>state.product.products);
  const startProduct = Math.floor(Math.random() * product.length - 5);
  const endProduct = startProduct + 5;
  const featuredProducts = product.slice(startProduct, endProduct);

  console.log("products", featuredProducts);
  console.log(startProduct, endProduct);
  return (
    <section>
      <div className=" grid p-5 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 border-2 mx-auto border-gray-400 bg-white rounded-xl w-[80vw] min-h-[50vh]">
        <h1 className="w-fit lg:col-span-5 mx-auto font-semibold bg-orange-400 rounded-tl-xl rounded-br-xl shadow-2xl shadow-gray-600 py-1 px-2 text-white my-4">
          Featured Products
        </h1>
        {product.slice(0,6).map((item) => (
          <ProductCard productData={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductDisplaySection;
