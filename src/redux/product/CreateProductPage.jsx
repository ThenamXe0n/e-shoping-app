import React, { useEffect, useState } from "react";
import {
  changeState,
  fetchProductAsync,
  addProductAsync,
} from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../pages/ProductCard";
import { addProductAPI, fetchProductAPI } from "./productAPI";

const CreateProductPage = () => {
  const [formField, setFormField] = useState({
    product: "",
    thumbnail: "",
    price: "",
  });
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.status);
  console.log(product);

  useEffect(() => {
    dispatch(fetchProductAsync());
  }, []);

  console.log(formField);

  return (
    <section className="w-screen flex items-center justify-center h-screen">
      <div className="w-full h-1/2 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addProductAPI(formField);
            dispatch(fetchProductAsync())
          }}
          className="border-2 rounded-xl p-4 w-fit"
        >
          <h3 className="text-xl font-bold text-center">Add Product</h3>
          <div>
            <div className="p-2 flex flex-col">
              <label className="text-xl capitalize">product name</label>
              <input
                type="text"
                className="outline-0"
                placeholder="enter product name"
                name="product"
                onChange={(e) => {
                  setFormField({
                    ...formField,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="p-2 flex flex-col">
              <label className="text-xl capitalize">Image</label>
              <input
                type="text"
                className="outline-0"
                placeholder="enter Image url "
                name="thumbnail"
                onChange={(e) => {
                  setFormField({
                    ...formField,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="p-2 flex flex-col">
              <label className="text-xl capitalize">Price</label>
              <input
                type="text"
                className="outline-0"
                placeholder="enter product name"
                name="price"
                onChange={(e) => {
                  setFormField({
                    ...formField,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <button className="bg-black rounded-xl p-2 text-white">
            Add Product
          </button>
        </form>
      </div>
      <div className="border-2 rounded-xl w-full h-full overflow-y-scroll">
        {isLoading === "loading" ? (
          <div className="text-4xl font-bold">Loading....</div>
        ) : (
          <>
            {product.map((item) => (
              <ProductCard
                img={item.thumbnail}
                title={item.product}
                price={item.price}
              />
            ))}
          </>
        )}
      </div>
      <button className="bg-black text-white"> change</button>
    </section>
  );
};

export default CreateProductPage;
