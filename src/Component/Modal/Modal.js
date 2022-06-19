import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ display, setShowModal, children }) => {
  // modal code
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{ display: display ? "block" : "none" }}
      className="OUTER_MODAL fixed top-0 left-0 w-screen h-screen bg-slate-500 bg-opacity-75 z-40 p-6 lg:p-20 hidden"
    >
      <div className="INNER_MODAL bg-white h-full w-full p-6 relative flex flex-col  rounded-md overflow-y-auto">
        <div className="text-s-dark-blue  text-lg lg:text-4xl w-full flex justify-end mb-4 ">
          <FaRegWindowClose
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="w-full flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
