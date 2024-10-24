import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //1) Form Response is first Send here
  async function registerUser(submitData) {
    const res = await axios.get(
      `http://localhost:8080/allUsers?mobile=${submitData.mobile}`
    );
    // Condition to check existing users on the basis of Phone Number obtained from form data
    if (res.data.length) {
      alert("User Already Exists Try to Login");
      const goToLogin = window.confirm(
        "User Already Exists! Do You want to login?"
      );
      if (goToLogin) {
        window.location.pathname = "/login";
      } else reset();
      return;
    } else {
      formValidation(submitData);
      reset();
    }
  }

  //2) Form Validation if user already doesn't exist
  function formValidation(formData) {
    if (formData.password == formData.confirmPassword) {
      delete formData.confirmPassword;
      postUser(formData); //Send data to server if confirm password condition passes
    } else {
      alert("Passwords Doesn't Match");
      return false;
    }
  }

  //3) Posting Data to API/Server/Database
  async function postUser(data) {
    await axios.post("http://localhost:8080/allUsers", data);
    const goToLogin = window.confirm(
      "Registration Successfull! Do You want to login?"
    );
    if (goToLogin) {
      window.location.pathname = "/login";
    } else reset();
  }

  return (
    <div className="flex w-full min-h-[80vh] items-center justify-center">
      <form
        onSubmit={handleSubmit(registerUser)}
        id="main"
        className="m-auto flex h-fit p-5 flex-col items-center w-[95%] lg:max-w-[50%]  justify-center rounded-lg border shadow-xl"
      >
        <div id="heading" className="flex items-center flex-col my-4">
          <h1 className="text-3xl font-bold text-gray-700">Register</h1>
          <p className="text-gray-500">Lets setup your account</p>
        </div>

        {/*------- FORM INPUTS -------*/}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="my-1 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
            <label htmlFor="name" className="cursor-text text-sm text-gray-500">
              Enter Your Full Name
            </label>
            <span className="text-red-500 ml-7">
              <ErrorMessage errors={errors} name="name" />
            </span>
            <input
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              type="text"
              id="name"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="my-1 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
            <label
              htmlFor="mobile"
              className="cursor-text text-sm text-gray-500"
            >
              Enter Your 10 digit Mobile Number
            </label>
            <input
              {...register("mobile", {
                required: { value: true, message: "Phone Number is required" },
                pattern: {
                  value:
                    /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/gim,
                  message: "Incorrect Phone Number",
                },
              })}
              type="number"
              id="mobile"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <span className="text-red-500">
              <ErrorMessage errors={errors} name="mobile" />
            </span>
          </div>
          <div className="my-1 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
            <label
              htmlFor="email"
              className="cursor-text text-sm text-gray-500"
            >
              Enter Your Email Address
            </label>
            <span className="text-red-500 ml-7">
              <ErrorMessage errors={errors} name="email" />
            </span>
            <input
              {...register("email", {
                required: { value: true, message: "Email is required" },
                
              })}
              type="email"
              id="email"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="my-1 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
            <label
              htmlFor="password"
              className="cursor-text text-sm text-gray-500"
            >
              Set a Password
            </label>
            <span className="text-red-500 ml-7">
              <ErrorMessage errors={errors} name="password" />
            </span>
            <input
              {...register("password", {
                required: { value: true, message: "Password is required" },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/gim,
                  message:
                    "At least one lowercase alphabet i.e. [a-z],uppercase alphabet i.e. [A-Z],At least one Numeric digit i.e. [0-9],At least one special character ,Also, the total length must be in the range [8-15]",
                },
              })}
              type="password"
              id="password"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="my-1 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
            <label
              htmlFor="confirmPassword"
              className="cursor-text text-sm text-gray-500"
            >
              Re-enter Password
            </label>
            <span className="text-red-500 ml-7">
              <ErrorMessage errors={errors} name="confirmPassword" />
            </span>
            <input
              {...register("confirmPassword", {
                required: { value: true, message: "Password is required" },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/gim,
                  message:
                    "At least one lowercase alphabet i.e. [a-z],uppercase alphabet i.e. [A-Z],At least one Numeric digit i.e. [0-9],At least one special character ,Also, the total length must be in the range [8-15]",
                },
              })}
              type="password"
              id="confirmPassword"
              className="border-1 rounded-lg w-full border border-gray-300 bg-transparent p-2.5 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          {/*------- FORM INPUTS -------*/}

          <div className="flex w-full justify-center my-2 ">
            <div className="flex items-center">
              <input
                required
                id="tnc"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="tnc" className="ml-2 block text-sm text-gray-900">
                I Agree to the Terms and Conditions
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            className="bg-indigo-100 focus:shadow-outline my-2 flex w-full max-w-xs items-center justify-center rounded-lg py-3 font-bold text-gray-900 shadow-sm transition-all duration-300 ease-in-out focus:shadow-sm focus:outline-none hover:shadow"
            type="register"
          >
            Register
          </button>
        </div>

        <Link to="/login">
          <p className=" my-2 cursor-pointer text-indigo-700 hover:text-pink-700 text-sm">
            Already have an account?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default RegistrationPage;
