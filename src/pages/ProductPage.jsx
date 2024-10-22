import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../component/contextApi/ProductContext";
const ProductPage = () => {
  const { fetchedData } = useContext(ProductContext);
  const { name } = useParams();

  let selectedProduct = fetchedData.find((item) => item.product.includes(name));
  const [selectedImage, setSelectedImage] = useState(
    selectedProduct?.thumbnail
  );

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center">
        <div className="md:p-4 m-2 overflow-hidden">
          <div className="flex justify-center">
            <img src={selectedImage} className="h-60 md:h-80" alt="main Product" />
          </div>
          <div className="flex my-3 gap-4 overflow-auto border-2 border-gray-400 bg-white rounded-lg">
            {selectedProduct?.images?.map((imageSrc, i) => (
              <img
                onClick={(e) => setSelectedImage(e.target.src)}
                key={i}
                className="h-32"
                src={imageSrc}
                alt="main Product"
              />
            ))}
          </div>
        </div>
        <div className="md:p-4 flex flex-col items-center justify-center md:m-2">
          <h2 className="text-4xl uppercase text-center font-bold">
            {selectedProduct?.product}
          </h2>
          <div className="text-center">
            <span className="">{selectedProduct?.discription}</span>
            <span className="my-1 block"><strong>Category: </strong>{selectedProduct?.category}</span>
            <span className="text-2xl font-semibold">${selectedProduct?.finalprice}</span>
          </div>
          <div className="my-3 flex items-center">
            <button className="border rounded-lg px-3 bg-gray-200 py-1">
              -
            </button>
            <span className="border px-3 py-2">Value</span>
            <button className="border rounded-lg px-3 bg-gray-200 py-1">
              +
            </button>
            <button className="mx-5 rounded-lg bg-[#24333e] py-1 px-3 text-white font-semibold">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
