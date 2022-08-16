import React from "react";
import BasicMedicalCot from "./Assets/basic-medical-cot-for-home-use.jpg";
import DeluxeCotWithoutWheels from "./Assets/Deluxe-Hospital-Cot-for-Home-use-without-Wheels.jpg";
import DeluxeSemiFowlersCot from "./Assets/deluxe-semi-fowlers-cot.jpg";
import HeadAndFootAdjustableCot from "./Assets/head-and-foot-adjustable.jpg";

function HospistalCots() {
  return (
    <div className="bg-sky-200">
      <div className="container mx-auto">
        <div className="container mx-auto pt-10">
          <h1 className=" flex justify-center text-2xl font-semibold text-sky-800 ">
            Hospital Cots
          </h1>
        </div>
        <div class=" bg-gradient-to-tr  flex justify-center items-center py-10">
          <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              {/* <h3 class="mb-3 text-xl font-semibold   text-sky-800">
                Beginner Friendly
              </h3> */}
              <div class="relative">
                <img
                  class="w-full rounded-xl"
                  src={BasicMedicalCot}
                  alt="Colors"
                />
                <p class="absolute top-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800 text-whit font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>
              </div>
              <h1 class="mt-4 text-gray-800 opacity-90  md:text-xl font-semibold cursor-pointer">
                Basic Medical Cot
              </h1>
              <div class="my-4">
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p>1:34:23 Minutes</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p>3 Parts</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p>Vanilla JS</p>
                </div> */}
                <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                  Enquiry
                </button>
              </div>
            </div>
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              {/* <h3 class="mb-3 text-xl font-semibold   text-sky-800">
                Beginner Friendly
              </h3> */}
              <div class="relative">
                <img
                  class="w-full rounded-xl"
                  src={DeluxeCotWithoutWheels}
                  alt="Colors"
                />
                <p class="absolute top-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800 text-whit font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>
              </div>
              <h1 class="mt-4 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90 ">
                Deluxe Cot Without Wheels
              </h1>
              <div class="my-4">
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p>1:34:23 Minutes</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p>3 Parts</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p>Vanilla JS</p>
                </div> */}
                <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                  Enquiry
                </button>
              </div>
            </div>
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              {/* <h3 class="mb-3 text-xl font-semibold   text-sky-800">
                Beginner Friendly
              </h3> */}
              <div class="relative">
                <img
                  class="w-full rounded-xl"
                  src={DeluxeSemiFowlersCot}
                  alt="Colors"
                />
                <p class="absolute top-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800 text-whit font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>
              </div>
              <h1 class="mt-4 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90 ">
                Deluxe Semi Fowlers Cot
              </h1>
              <div class="my-4">
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p>1:34:23 Minutes</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p>3 Parts</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p>Vanilla JS</p>
                </div> */}
                <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                  Enquiry
                </button>
              </div>
            </div>
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              {/* <h3 class="mb-3 text-xl font-semibold   text-sky-800">
                Beginner Friendly
              </h3> */}
              <div class="relative">
                <img
                  class="w-full rounded-xl"
                  src={HeadAndFootAdjustableCot}
                  alt="Colors"
                />
                <p class="absolute top-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800 text-whit font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>
              </div>
              <h1 class="mt-4 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90 ">
                Head & Foot Adjustable Cot
              </h1>
              <div class="my-4">
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p>1:34:23 Minutes</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p>3 Parts</p>
                </div> */}
                {/* <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p>Vanilla JS</p>
                </div> */}
                <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                  Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospistalCots;
