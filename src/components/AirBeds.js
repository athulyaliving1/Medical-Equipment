import React from "react";
import AirBedWithBubbleMattress from "./Assets/alpha-beds.jpg";
import BubbleMattressAirBed from "./Assets/alpha-bed-2.jpg";
import AlphabedBubbleMattress from "./Assets/premium-alphabed.jpg";
import BubbleMattressAirBedwithcot from "./Assets/alpha-beds-3.jpg";

function AirBeds() {
  return (
    <div>
      <div className="bg-sky-100">
        <div className="container mx-auto">
          <div className="container mx-auto pt-10">
            <h1 className=" flex justify-center text-2xl font-semibold text-sky-800 ">
              Airbeds (Only For Sales)
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
                  <img
                    class="w-full rounded-xl"
                    src={AirBedWithBubbleMattress}
                    alt="Colors"
                  />
                </div>
                <h1 class="mt-5 text-gray-800 opacity-90  md:text-xl font-semibold cursor-pointer text-center">
                  Air Bed With Bubble Mattress
                </h1>
                <div class="">
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
                    src={BubbleMattressAirBed}
                    alt="Colors"
                  />
                </div>
                <h1 class="mt-11 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90 text-center">
                  Bubble Mattress AirBed
                </h1>
                <div class="">
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
                    src={AlphabedBubbleMattress}
                    alt="Colors"
                  />
                </div>
                <h1 class="mt-11 text-gray-800 md:text-xl font-semibold  cursor-pointer opacity-90  text-center">
                  Alpha bed Bubble Mattress
                </h1>
                <div class="">
                  <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
                    Enquiry
                  </button>
                </div>
              </div>
              <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
                <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  Rental
                </p>
                <p class="absolute top-0 right-0 bg-sky-800  font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
                  Purchase
                </p>
                <div class="">
                  <img
                    class="w-full rounded-xl"
                    src={BubbleMattressAirBedwithcot}
                    alt="Colors"
                  />
                </div>
                <h1 class="mt-5 text-gray-800 opacity-90  md:text-xl font-semibold cursor-pointer text-center">
                  Bubble Mattress Air Bed With Cot
                </h1>
                <div class="">
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

export default AirBeds;
