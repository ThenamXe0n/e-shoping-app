import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="flex w-full min-h-[80vh] items-center justify-center">
      <div
        id="main"
        className="m-auto flex h-fit p-5 flex-col items-center w-[95%] lg:max-w-[50%]  justify-center rounded-lg border shadow-xl text-center"
      >
        <div id="heading" className="flex items-center flex-col my-4">
          <h1 className="text-3xl font-bold text-gray-700">Register</h1>
          <p className="text-gray-500">Lets setup your account</p>
        </div>
        <form className="w-full ">
          <div className="relative my-3 w-full md:w-1/2 md:mx-auto">
            <input
              type="text"
              id="name"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter Your Full Name
            </label>
          </div>
          <div className="relative my-3 w-full md:w-1/2 md:mx-auto">
            <input
              type="email"
              id="email"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter Your email address
            </label>
          </div>
          <div className="relative my-3 w-full md:w-1/2 md:mx-auto">
            <input
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
          <div className="relative my-3 w-full md:w-1/2 md:mx-auto">
            <input
              type="password"
              id="password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Enter Your password
            </label>
          </div>
          <div className="relative my-3 w-full md:w-1/2 md:mx-auto">
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
              Confirm Your Password
            </label>
          </div>
        </form>

        <div className="flex w-full justify-center my-2 ">
          <div className="flex items-center">
            <input
              id="tnc"
              type="checkbox"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="tnc"
              className="ml-2 block text-sm text-gray-900"
            >
              I Agree to the Terms and Conditions
            </label>
          </div>
        </div>

        {/* Login Button */}
        <button className="bg-indigo-100 focus:shadow-outline my-2 flex w-full max-w-xs items-center justify-center rounded-lg py-3 font-bold text-gray-900 shadow-sm transition-all duration-300 ease-in-out focus:shadow-sm focus:outline-none hover:shadow">
          Register
        </button>

        <div className="my-2">
          <Link to="/login">
            <p className="cursor-pointer text-indigo-700 hover:text-pink-700 text-sm">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
