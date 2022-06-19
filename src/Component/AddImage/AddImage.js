import React, { useEffect, useState, useContext, useRef } from "react";
import Modal from "../Modal/Modal";
import ImagesInnerModal from "../ImagesInnerModal.js/ImagesInnerModal";
import { UploadContext } from "../Globals/UploadContext";

import image1 from "../../images/Dimage.png";
const AddImage = ({ stateKey }) => {
  const [url, setUrl] = useState({ default: image1, realUrl: null });
  console.log("image from addimage");
  console.log(image1);
  //reset the image to default image
  const resetImage = () => {
    setUrl({ default: image1, realUrl: null });
  };
  //set image to state post when url changes
  const [post, setPost] = useContext(UploadContext);
  useEffect(() => {
    setPost((p) => {
      if (!url.realUrl) {
        return { ...p, [stateKey]: url.default };
      } else {
        return { ...p, [stateKey]: url.realUrl.relativeLink };
      }
    });
  }, [url]);

  //code for modal close and open
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Modal display={showModal} setShowModal={setShowModal}>
        <ImagesInnerModal setUrl={setUrl} setShowModal={setShowModal} />
      </Modal>
      <div className="relative group max-h-64 overflow-hidden">
        <div className="w-full bg-slate-300">
          <img
            src={
              url.realUrl
                ? url.realUrl.domain + url.realUrl.relativeLink
                : url.default
            }
            alt=""
            className="max-w-full bg-opacity-30"
          />
        </div>

        <div className="absolute -z-10 px-12 group-hover:z-20  top-0 w-full h-full bg-slate-900 bg-opacity-50 flex  justify-center items-center  space-x-4">
          <button
            onClick={openModal}
            className="block bg-blue-400 border-white border px-3 hover:text-slate-900 hover:border-transparent hover:bg-white"
          >
            Choose Image
          </button>
          <button
            type="button"
            onClick={resetImage}
            className="block bg-white border-white border px-3 hover:text-slate-900 hover:border-transparent hover:bg-slate-400"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default AddImage;
