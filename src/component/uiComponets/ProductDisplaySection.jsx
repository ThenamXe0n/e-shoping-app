// import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function discountCalculator(mrp, sale) {
  const disPercent = Math.round(((mrp - sale) / mrp) * 100);
  return disPercent;
}

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col m-2 items-center justify-center">
      <img
        className="h-60 aspect-square object-contain "
        src={product?.thumbnail}
        alt="Product"
      />
      <span className="bg-red-600 p-1 rounded-sm text-sm items-start mt-5 text-white">
        {discountCalculator(product.price, product.finalprice)}% off!
      </span>
      <h2 className="mt-1 uppercase text-center text-xl font-semibold">
        {product?.product}
      </h2>
      <p className="text-gray-800 text-lg">
        <span className="text-sm text-gray-500">
          M.R.P <span className="line-through"> ₹{product?.price}</span>{" "}
        </span>
        ₹ {product?.finalprice}
      </p>
    </div>
  );
};

const ProductDisplaySection = () => {
  const fetchedData = useSelector((state) => state.product.product);
  // console.log("redux:", fetchedData);
  const startProduct = Math.floor(Math.random() * (fetchedData?.length - 5));
  const endProduct = startProduct + 5;
  const featuredProducts = fetchedData?.slice(startProduct, endProduct);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 p-5 border-2 mx-auto border-gray-400 bg-white rounded-lg my-4 w-[80vw] min-h-fit">
      <h1 className="text-center font-[cursive] h-fit lg:h-9 text-3xl font-semibold col-span-full">
        Featured Products!
      </h1>
      {featuredProducts?.map((item, index) => (
        <Link
          key={index}
          className="flex justify-center items-center"
          to={`/product/${item?.product}`}
        >
          <ProductCard product={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductDisplaySection;
