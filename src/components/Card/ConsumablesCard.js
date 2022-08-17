import React, { useState } from "react";
import Modal from "react-modal";
import Hapus from "../Assets/1.jpg";
import UpHealthyExtraLarge from "../Assets/2.jpg";
import Underpads from "../Assets/underpads.jpg";
import PoroductsPioneer from "../Assets/poroducts_pioneer.jpg";
import PopUp from "./PopUp";
import Form from "../Form";

const assertMap = {
  Hapus_pic: Hapus,
  Up_Healthy_Extra_Large: UpHealthyExtraLarge,
  Under_pads: Underpads,
  Poroducts_Pioneer: PoroductsPioneer,
};

const ConsumablesCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [popIsOpen, setPopIsOpen] = useState(false);

  const { title, desc, image } = project;

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const setPopIsOpenToTrue = () => {
    setPopIsOpen(true);
  };

  const setPopIsOpenToFalse = () => {
    setPopIsOpen(false);
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
        <div class="my-6 gap-2 justify-center flex">
          <div>
            <>
              <button
                class="mt-4 text-xl w-full text-white bg-pink-500 px-5 py-2 rounded-xl shadow-lg"
                onClick={setModalIsOpenToTrue}
              >
                Details
              </button>

              <Modal
                isOpen={modalIsOpen}
                className="  container  md:px-64 md:mx-auto  mt-44 justify-items-center py-10 "
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
          </div>
          <div>
            <>
              <button
                class="mt-4 text-xl w-full text-white bg-pink-500  px-5 py-2 rounded-xl shadow-lg"
                onClick={setPopIsOpenToTrue}
              >
                Enquiry
              </button>

              <Modal
                isOpen={popIsOpen}
                className="  container  md:px-64 md:mx-auto  mt-14 md:mt-44 justify-items-center py-10 "
                onRequestClose={() => setPopIsOpen(false)}
              >
                <button onClick={setPopIsOpenToFalse}>
                  <div className="flex justify-end text-5xl text-red-700">
                    <ion-icon name="close-circle"></ion-icon>
                  </div>
                 <Form/>
                </button>
              </Modal>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumablesCard;
