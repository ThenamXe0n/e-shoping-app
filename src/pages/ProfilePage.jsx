import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "../component/uiComponets/Avatar";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);


 

  return (
    <>
      <article>
        {/* Profile header */}
        <div>
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt=""
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            {/* -------------profile pic component---------------- */}
            <Avatar/>
              {/* <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt=""
                />
              </div> */}
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {userData?.name}
                  </h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Message</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/phone"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {userData?.name}
              </h1>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-6 sm:mt-2 2xl:mt-5">
          <div className="border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a
                  href="#"
                  className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  //   x-state-description='undefined: "border-pink-500 text-gray-900", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"'
                >
                  Calendar
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  //   x-state-description='undefined: "border-pink-500 text-gray-900", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"'
                >
                  Recognition
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Description list */}
        <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900">{userData?.mobile}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">user Id</dt>
              <dd className="mt-1 text-sm text-gray-900">{userData?.userId}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  class="size-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <div className="size-4 relative bottom-10 left-6 bg-black flex rounded-full items-center justify-center text-white">
                  {userData?.cartItem?.length}
                </div>
              </dt>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <div className="size-4 relative bottom-10 left-6 bg-red-400 flex rounded-full items-center justify-center text-black">
                  {userData?.wishlist?.length}
                </div>
              </dt>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {userData?.address}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Sits</dt>
              <dd className="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="mt-1 text-sm text-gray-900">$145,000</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Birthday</dt>
              <dd className="mt-1 text-sm text-gray-900">June 8, 1990</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                <p>
                  Tincidunt quam neque in cursus viverra orci, dapibus nec
                  tristique. Nullam ut sit dolor consectetur urna, dui cras nec
                  sed. Cursus risus congue arcu aenean posuere aliquam.
                </p>
                <p>
                  Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
                  rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
                  senectus vitae. Scelerisque fermentum, cursus felis dui
                  suspendisse velit pharetra. Augue et duis cursus maecenas eget
                  quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
                  dictum risus suspendisse.
                </p>
              </dd>
            </div>
          </dl>
        </div>
        {/* Team member list */}
        <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-gray-500">User Cart Items</h2>
          <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
           {userData?.cartItem.map((item)=>( <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item?.thumbnail}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {item?.product}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {item?.category}<br/>
                    ${item?.finalprice}
                  </p>
                </a>
              </div>
            </div>
        ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProfilePage;
