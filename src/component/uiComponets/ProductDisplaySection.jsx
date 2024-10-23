import { useContext } from "react";
import ProductContext from "../contextApi/ProductContext";

const ProductCard = ({ product }) => {
  const { fetchedData } = useContext(ProductContext);
  return (
    <div className="flex flex-col m-2 items-center justify-center">
      <img className="h-[60%]" src={product?.thumbnail} alt="Product" />
      <h2 className="mt-1 uppercase text-center text-xl font-semibold">
        {product?.product}
      </h2>
      <p className="text-gray-600 text-xl">${product?.finalprice}</p>
    </div>
  );
};

const ProductDisplaySection = () => {
  const { fetchedData } = useContext(ProductContext);
  const startProduct = Math.floor(Math.random() * (fetchedData.length - 5));
  const endProduct = startProduct + 5;
  console.log(`Starting ${startProduct} Ending ${endProduct}`)
  const featuredProducts = fetchedData.slice(startProduct, endProduct);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 p-5 border-2 mx-auto border-gray-400 bg-white rounded-lg my-4 w-[80vw] min-h-[50vh]">
      {featuredProducts.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
};

export default ProductDisplaySection;
