import React, { useRef, useState } from "react";
import logo from "../Assets/logo-eShop.svg";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link ,Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync } from "../redux/user/userSlice";


const RegisterPage = () => {
  const dispatch = useDispatch();
  const isRegister = useSelector((state)=>state.user.isRegistered)
  console.log("register status",isRegister)
  const [showPassword, setShowPassword] = useState(true);
  const passwordRef = useRef();
  const { register, handleSubmit, reset } = useForm();
  const registerUser = async (data) => {
    console.log(data);
    dispatch(registerUserAsync(data));
  };

  return (
    <>{isRegister ?(<Navigate to={"/login"}  />):(<div>
      <form
        onSubmit={handleSubmit(registerUser)}
        className="mx-auto flex w-96 flex-col items-center space-y-5 rounded-lg border px-5 py-10 shadow-xl"
      >
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-3xl font-bold text-gray-700 mx-auto">
            Register Form
          </h1>
          {/* <p className="text-gray-500">Login to access your account</p> */}
        </div>
        <div className="w-full">
          <div className="relative mt-2 w-full">
            <input
              type="text"
              {...register("name")}
              id="name"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter your full name
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="relative mt-2 w-full">
            <input
              type="text"
              {...register("contact")}
              id="contact"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="contact"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter your 10-digit mobile no
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="email"
              {...register("email")}
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter Your Email
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="relative mt-2 w-full">
            <input
              ref={passwordRef}
              type="password"
              {...register("password")}
              id="password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter Your Password
            </label>
            {!showPassword ? (
              <div
                onClick={() => {
                  setShowPassword(true);
                  passwordRef.current.type = "text";
                }}
                className="absolute bottom-3 left-[19rem]"
              >
                <IoEye size={25} color="gray" />
              </div>
            ) : (
              <div
                onClick={() => {
                  setShowPassword(false);
                  passwordRef.current.type = "password";
                }}
                className="absolute bottom-3 left-[19rem]"
              >
                <IoEyeOff size={25} color="gray" />
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="confirm-password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="confirm-password"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              confirm password
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <button className="bg-indigo-100 focus:shadow-outline mt-5 flex w-full max-w-xs items-center justify-center rounded-lg py-3 font-bold text-gray-900 shadow-sm transition-all duration-300 ease-in-out focus:shadow-sm focus:outline-none hover:shadow">
          <span className="ml-4"> Login </span>
        </button>
        {/* <button className="focus:shadow-outline flex w-full max-w-xs items-center justify-center rounded-lg bg-indigo-100 py-3 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out focus:shadow-sm focus:outline-none hover:shadow">
          <div className="rounded-full bg-white p-2">
            <svg className="w-3" viewBox="0 0 533.5 544.3">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
          </div>
          <span className="ml-4"> Sign in with Google </span>
        </button> */}
        <div className="mt-8">
          <p className="text-indigo-700 hover:text-pink-700 text-sm">
            Already have an account{" "}
            <Link to={"/login"}>
              <ins>click here</ins>
            </Link>
          </p>
        </div>
      </form>
    </div>)}
    </>
  );
};

export default RegisterPage;
