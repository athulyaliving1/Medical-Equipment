import React, { useState } from "react";
import Modal from "react-modal";
import Hapus from "../Assets/1.jpg";
import UpHealthyExtraLarge from "../Assets/2.jpg";
import Underpads from "../Assets/underpads.jpg";
import PoroductsPioneer from "../Assets/poroducts_pioneer.jpg";
import PopUp from "./PopUp";

const assertMap = {
  Hapus_pic: Hapus,
  Up_Healthy_Extra_Large: UpHealthyExtraLarge,
  Under_pads: Underpads,
  Poroducts_Pioneer: PoroductsPioneer,
};

const ConsumablesCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { title, desc, image } = project;

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
              className="container mx-auto mt-44 justify-items-center py-10 bg-zinc-300"
              onRequestClose={() => setModalIsOpen(false)}
            >
              <button
                className="top-6 left-5 text-red-800"
                onClick={setModalIsOpenToFalse}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 top-20 right-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <PopUp desc={desc} />
            </Modal>
          </>
          <button class="mt-4 text-xl w-full text-white bg-pink-500 py-2 rounded-xl shadow-lg">
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsumablesCard;
