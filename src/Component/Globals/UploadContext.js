import React, { useState, createContext } from "react";
import { globStateInValue } from "../../Functions/useFullFunction";
export const UploadContext = createContext();

export const UploadProvider = (props) => {
  const [post, setPost] = useState(globStateInValue);
  return (
    <UploadContext.Provider value={[post, setPost]}>
      {props.children}
    </UploadContext.Provider>
  );
};
