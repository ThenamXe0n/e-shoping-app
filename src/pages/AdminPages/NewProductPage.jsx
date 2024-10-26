import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import ProductContext from "../../component/contextApi/ProductContext";

const NewProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { fetchedData } = useContext(ProductContext);
  const filterCategory = [...new Set(fetchedData.map((item) => item.category))];

  //1) Form Response is first Send here
  function registerProduct(submitData) {
    formValidation(submitData);
  }

  //2) Form Validation if user already doesn't exist
  function formValidation(formData) {
    const price = parseInt(formData.price);
    let finalprice = parseInt(formData.finalprice);

    while (price < finalprice) {
      finalprice = parseInt(
        prompt(`Sale price Can not be more than MRP ${price}`)
      );
    }

    // ADDING DISCOUNT VALUES
    const discountAmount = price - finalprice
    const discountPercent = (discountAmount/price)*100
    const productCreationMeta = {
      creationDate: new Date(),
      images: [],
      price: price,
      finalprice: finalprice,
      discountAmount: discountAmount,
      discountPercent: discountPercent,
    };
    const finalProduct = { ...formData, ...productCreationMeta };
    // console.log(finalProduct);
    postProduct(finalProduct);
  }

  //3) Posting Data to API/Server/Database
  async function postProduct(data) {
    await axios.post("http://localhost:8080/allproducts", data);
    console.log(data);
    const registerMore = window.confirm(
      "Registration Successfull! Do You want to Register More?"
    );
    registerMore
      ? reset()
      : (window.location.pathname = `/product/${data.product}`);
  }

  return (
    <div className="w-full min-h-[80vh] flex items-center">
      <form
        onSubmit={handleSubmit(registerProduct)}
        id="product-form"
        className="m-auto flex h-fit p-5 flex-col items-center w-[95%] lg:max-w-[50%] lg:my-5  justify-center rounded-lg border shadow-xl"
      >
        <div id="heading" className="flex items-center flex-col my-4">
          <h1 className="text-3xl font-bold text-gray-700">Add Product</h1>
          <p className="">Fill these basic details and upload your product</p>
        </div>

        {/*------- FORM INPUTS -------*/}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="my-1 w-full md:w-3/4 lg:w-4/6 text-gray-800 md:mx-auto">
            <label htmlFor="product" className="cursor-text text-sm ">
              Enter Product Title
            </label>
            <span className="text-red-500 ml-7 inline-block ">
              <ErrorMessage errors={errors} name="product" />
            </span>
            <input
              {...register("product", {
                required: { value: true, message: "Product name is required" },
              })}
              type="text"
              id="product"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="my-1 w-full md:w-3/4 lg:w-4/6 text-gray-800 md:mx-auto">
            <label htmlFor="thumbnail" className="cursor-text text-sm ">
              Enter Product Image Url
            </label>
            <span className="text-red-500 ml-7 inline-block ">
              <ErrorMessage errors={errors} name="thumbnail" />
            </span>
            <input
              {...register("thumbnail", {
                required: { value: true, message: "Product Image is required" },
              })}
              type="url"
              id="product"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            {/* FUNTIONALITY TO BE ADDED */}
            <span onClick={console.warn("Add Functionality For more Images")}>
              Add more Images?
            </span>
          </div>
          <div className="my-1 w-full md:w-3/4 lg:w-4/6 text-gray-800 md:mx-auto">
            <label htmlFor="discription" className="cursor-text text-sm ">
              Give a description
            </label>
            <span className="text-red-500 ml-7">
              <ErrorMessage errors={errors} name="discription" />
            </span>
            <input
              {...register("discription")}
              id="discription"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="grid grid-cols-2 my-1 w-full md:w-3/4 lg:w-4/6 text-gray-800 gap-4 md:mx-auto items-center">
            <div id="categoryD">
              <label htmlFor="category" className="cursor-text text-sm ">
                Enter a category
              </label>
              <span className="text-red-500 ml-7">
                <ErrorMessage errors={errors} name="category" />
              </span>
              <select
                className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
                name="category"
                id="category"
                {...register("category", {
                  required: { value: true, message: "category is required" },
                })}
              >
                <option value={null} />
                {filterCategory.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div id="brandD">
              <label htmlFor="SubCat" className="cursor-text text-sm ">
                Enter Sub Category
              </label>
              <input
                {...register("sub_category")}
                id="SubCat"
                className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
              />
            </div>
            <div id="brandD">
              <label htmlFor="brand" className="cursor-text text-sm ">
                Enter Brand
              </label>
              <input
                {...register("brand")}
                id="brand"
                className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
              />
            </div>
            <div id="ratingD">
              <label htmlFor="rating" className="cursor-text text-sm ">
                Give a rating
              </label>
              <input
                {...register("rating")}
                id="rating"
                type="number"
                min={0}
                max={5}
                className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
              />
            </div>
            <div id="initial-Price">
              <label htmlFor="initialPrice" className="cursor-text text-sm ">
                Enter MRP
              </label>
              <input
                {...register("price", {
                  required: { value: true, message: "MRP is required" },
                })}
                type="number"
                min={0}
                id="initialPrice"
                className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
              />
            </div>
            <div id="final-Price">
              <label htmlFor="finalprice" className="cursor-text text-sm ">
                Enter Selling Price
              </label>
              <span className="text-red-500 ml-7">
                <ErrorMessage errors={errors} name="finalprice" />
              </span>
              <input
                {...register("finalprice", {
                  required: { value: true, message: "Final Price is required" },
                })}
                min={0}
                type="number"
                id="finalprice"
                className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/*------- FORM INPUTS -------*/}

          {/* Login Button */}
          <button
            className="bg-blue-300 hover:bg-blue-600 hover:text-white focus:shadow-outline my-2 flex w-full max-w-xs items-center justify-center rounded-lg py-3 font-bold text-gray-900 shadow-sm transition-all duration-300 ease-in-out focus:shadow-sm focus:outline-none hover:shadow"
            type="register"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductPage;
