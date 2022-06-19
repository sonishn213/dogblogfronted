import React, { useContext, useState, useEffect } from "react";
import { UploadContext } from "../Globals/UploadContext";

import { globStateInValue } from "../../Functions/useFullFunction";
import axios from "axios";
const Publish = () => {
  const [post, setPost] = useContext(UploadContext);

  const HandleSubmit = async () => {
    const fd = new FormData();
    fd.append("title", post.title);
    fd.append("description", post.description);
    fd.append("content", post.content);
    fd.append("collection", post.collection.c_name);
    fd.append("c_id", post.collection.id);
    fd.append("tumbimg", post.tumbImage);
    fd.append("mainimg", post.postMainImage);
    fd.append("published", post.published);

    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/insertPost.php`;
    let response = await axios.post(url1, fd);

    if (!response.data.error) {
      console.log(response.data.message);
      setPost(globStateInValue);
      alert("post saved");
    }
  };
  return (
    <button
      onClick={HandleSubmit}
      className="px-3 py-1 bg-green-400 text-white rounded-lg border-2 border-transparent hover:border-green-600"
    >
      Publish
    </button>
  );
};

export default Publish;
