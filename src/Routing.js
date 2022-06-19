import React from "react";
import App from "./App";

import { Routes, Route } from "react-router-dom";
import Archive from "./Pages/Archive";
import Home from "./Pages/Home";
import UploadPost from "./Pages/UploadPost";
import ViewBlog from "./Pages/ViewBlog";
import Layout2 from "./Layout2";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="allpost">
          <Route path="" element={<Archive />} />
          <Route path=":c_id" element={<Archive />} />
        </Route>
        <Route path="post">
          <Route path=":id" element={<ViewBlog />} />
        </Route>
      </Route>

      <Route path="uploadpost" element={<Layout2 />}>
        <Route index element={<UploadPost />} />
      </Route>
    </Routes>
  );
};

export default Routing;
