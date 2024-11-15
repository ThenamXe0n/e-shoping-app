import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginLocal } from "../redux/auth/authSlice";

const LoginPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  async function loginRequest(formRequest) {
    const response = await axios.get(
      `http://localhost:8080/allUsers?mobile=${formRequest.number}`
    );

    if (response.data.length) {
      if (response.data[0].password === formRequest.password) {
        delete response.data[0].password;
        dispatch(loginLocal(response.data[0]));
        window.location.pathname = "/";
        reset();
      } else {
        alert("Invalid Credentials");
      }
    } else {
      const goToRegister = window.confirm("User Doesn't exist! Register Now?");
      if (goToRegister) {
        window.location.pathname = "/register";
      }
    }
  }

  return (
    <div className="flex w-full min-h-[80vh] items-center justify-center">
      {isLoggedIn ? (
        <Navigate to={"/"} />
      ) : (
        <form
          onSubmit={handleSubmit(loginRequest)}
          id="login"
          className="m-auto flex h-fit px-5 py-10 flex-col items-center w-[95%] lg:max-w-[50%]  justify-center rounded-lg border shadow-xl text-center"
        >
          <div id="heading" className="flex items-center flex-col my-4">
            <h1 className="text-3xl font-bold text-gray-700">Sign In</h1>
            <p className="text-gray-500">Login to access your account</p>
          </div>
          <div className="w-full">
            <div className="relative my-4 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
              <input
                {...register("number", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  pattern: {
                    value:
                      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/gim,
                    message: "Incorrect Phone Number",
                  },
                })}
                type="number"
                id="user-number"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="user-number"
                className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                Enter Your 10 digit Mobile Number
              </label>
            </div>
            <div className="relative my-4 w-full md:w-3/4 lg:w-1/2 md:mx-auto">
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: { value: true, message: "Enter Password" },
                })}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                Enter Your Password
              </label>
            </div>
            <div className="flex w-full items-center my-2 justify-center gap-10">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">Forgot your password?</div>
            </div>
          </div>

          {/* Login Button */}
          <span className="text-red-500">
            <ErrorMessage errors={errors} name="number" />
            <ErrorMessage errors={errors} name="password" />
          </span>
          <button className="bg-indigo-100 focus:shadow-outline my-2 flex w-full max-w-xs items-center justify-center rounded-lg py-3 font-bold text-gray-900 shadow-sm transition-all duration-300 ease-in-out focus:shadow-sm focus:outline-none hover:shadow">
            <span className="ml-4"> Login </span>
          </button>

          <div className="my-2">
            <Link to="/register">
              <p className="text-indigo-700 hover:text-pink-700 text-sm">
                Don't have an account?
              </p>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
