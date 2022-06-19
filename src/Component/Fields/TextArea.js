import React, { useContext, useState, useEffect } from "react";
import { UploadContext } from "../Globals/UploadContext";

const TextArea = ({ placeholder, stateKey }) => {
  const [post, setPost] = useContext(UploadContext);
  const handleInput = (e) => {
    setPost((p) => {
      return { ...p, [stateKey]: e.target.value };
    });
  };

  return (
    <textarea
      type="text"
      placeholder={placeholder}
      onChange={handleInput}
      className="rounded-md px-4 py-2 mb-3 w-full border-2  border-slate-300 text-lg resize-none "
    ></textarea>
  );
};

export default TextArea;
