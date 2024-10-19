import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../contextAPI/ProductContext";
const ProductDetailsPage = () => {
  const {product} = useContext(ProductContext)
  const { name } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  const getSeletedProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/allproducts?product=${name}`
      );
      setSelectedProduct(response.data[0]);
      setSelectedImage(response.data[0].thumbnail)
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getSeletedProductDetails();
  }, []);

  // console.log(Products);
  const [selectedImage, setSelectedImage] = useState(selectedProduct?.thumbnail);
  return (
    <>
      <div className="grid-cols-2 grid">
        <div className="p-4 m-2">
          <div>
            <img src={selectedImage} width={"200px"} alt="main Product" />
          </div>
          <div className="flex my-3 gap-4">
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
        <div className="p-4 m-2">
          <h5 className="text-sm ">File Path</h5>
          <h2 className="text-4xl my-2 font-semibold">
            {selectedProduct?.title}
          </h2>
          <h3 className="text-2xl font-semibold">
            $ <span>{selectedProduct?.price}</span>
          </h3>
          <span className="my-1 block">{selectedProduct?.category}</span>
          <ul className="px-8">
            <li className="list-disc text-sm">List item 1</li>
            <li className="list-disc text-sm">List item 2</li>
            <li className="list-disc text-sm">List item 3</li>
          </ul>
          <div className="my-3">
            <button className="border px-3 bg-gray-200 py-1">-</button>
            <span className="border px-3 py-1">Value</span>
            <button className="border px-3 bg-gray-200 py-1">+</button>
            <button className="mx-5 bg-[#24333e] py-1 px-3 text-white font-semibold">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
