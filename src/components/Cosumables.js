import React from "react";
import Hapus from "./Assets/1.jpg";
import UpHealthyExtraLarge from "./Assets/2.jpg";
import Underpads from "./Assets/underpads.jpg";
import PoroductsPioneer from "./Assets/poroducts_pioneer.jpg";

function Cosumables() {
  return (
    <div>
      <div className="bg-sky-100">
        <div className="container mx-auto">
          <div className="container mx-auto pt-10">
            <h1 className=" flex justify-center text-2xl font-semibold text-sky-800 ">
              Consumables
            </h1>
          </div>
          <div class=" bg-gradient-to-tr  flex justify-center items-center py-10">
            <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
              <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
                <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800  font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>
                <div class="">
                  <img class="w-full rounded-xl" src={Hapus} alt="Colors" />
                </div>
                <h1 class="mt-8 text-gray-800 opacity-90  md:text-xl font-semibold cursor-pointer text-center">
                  Hapus
                </h1>
                <div class="my-9">
                  <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                    Enquiry
                  </button>
                </div>
              </div>
              <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
                <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800 text-whit font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>

                <div class="">
                  <img
                    class="w-full rounded-xl"
                    src={UpHealthyExtraLarge}
                    alt="Colors"
                  />
                </div>
                <h1 class="mt-8 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90 text-center">
                  UpHealthy Extra Large
                </h1>
                <div class="my-9">
                  <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                    Enquiry
                  </button>
                </div>
              </div>
              <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
                <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800 text-whit font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>

                <div class="">
                  <img class="w-full rounded-xl" src={Underpads} alt="Colors" />
                </div>
                <h1 class="mt-8 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90  text-center">
                  Underpads
                </h1>
                <div class="my-9">
                  <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                    Enquiry
                  </button>
                </div>
              </div>
              <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
                <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800  font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg ">
                  Purchase
                </p>
                <div class="">
                  <img
                    class="w-full rounded-xl"
                    src={PoroductsPioneer}
                    alt="Colors"
                  />
                </div>
                <h1 class="mt-8 text-gray-800 opacity-90  md:text-xl font-semibold cursor-pointer text-center ">
                  Products Pioneer
                </h1>
                <div class="my-9">
                  <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cosumables;
