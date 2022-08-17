import React, { useState } from "react";
import Modal from "react-modal";
import AirBedWithBubbleMattress from "../Assets/alpha-beds.jpg";
import BubbleMattressAirBed from "../Assets/alpha-bed-2.jpg";
import AlphabedBubbleMattress from "../Assets/premium-alphabed.jpg";
import BubbleMattressAirBedwithcot from "../Assets/alpha-beds-3.jpg";
import PopUp from "./PopUp";

const assertMap = {
  Basic_Medical_Cot: AirBedWithBubbleMattress,
  Deluxe_Cot_Without_Wheel: BubbleMattressAirBed,
  Deluxe_Semi_Fowlers_Cot: AlphabedBubbleMattress,
  Head_And_Foot_Adjustable_Cot: BubbleMattressAirBedwithcot,
};

function HospitalCotsCard({ Bedprojects }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { title, desc, image } = Bedprojects;

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-sky-100">
      <div class="max-w-sm bg-white px-6  pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
        <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          Rental
        </p>
        <p class="absolute top-0 right-0 bg-sky-800  font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
          Purchase
        </p>
        <div class="">
          <img class="w-full rounded-xl" src={assertMap[image]} alt="Colors" />
        </div>
        <h1 class="mt-5 text-gray-800 opacity-90  md:text-xl font-semibold cursor-pointer text-center">
          {title}
        </h1>
        <div class="my-6 gap-4 justify-center flex">
          <>
            <button
              class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg"
              onClick={setModalIsOpenToTrue}
            >
              Details
            </button>

            <Modal
              isOpen={modalIsOpen}
              className="  container  px-64 mx-auto  mt-44 justify-items-center py-10 "
              onRequestClose={() => setModalIsOpen(false)}
            >
              <button onClick={setModalIsOpenToFalse}>
                <div className="flex justify-end text-5xl text-red-700">
                  <ion-icon name="close-circle"></ion-icon>
                </div>

                <PopUp desc={desc} />
              </button>
            </Modal>
          </>
          <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default HospitalCotsCard;
