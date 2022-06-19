import React, { useContext, useState, useEffect } from "react";
import { UploadContext } from "../Globals/UploadContext";

const InputField = ({ placeholder, stateKey }) => {
  //
  const [post, setPost] = useContext(UploadContext);
  const handleInput = (e) => {
    setPost((p) => {
      return { ...p, [stateKey]: e.target.value };
    });
  };

  return (
    <input
      type="text"
      value={post.title}
      placeholder={placeholder}
      className="rounded-md px-4 py-2 w-full border-2  border-slate-300 text-lg mb-5"
      onChange={handleInput}
    />
  );
};

export default InputField;
