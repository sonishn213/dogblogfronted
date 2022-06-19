import React, { useState } from "react";
import DropDown from "../Component/dropdowns/DropDown";
import AddImage from "../Component/AddImage/AddImage";
import RichEditor from "../Component/RichEditor";
import InputField from "../Component/Fields/InputField";
import TextArea from "../Component/Fields/TextArea";

import Publish from "../Component/Publish/Publish";

import { UploadProvider } from "../Component/Globals/UploadContext";
const UploadPost = () => {
  return (
    <>
      <UploadProvider>
        <section className="fluid-container py-20   border-b-2 border-slate-200 text-right flex justify-between text-slate-600">
          <h2 className="  text-slate-600">New Post</h2>
          <div>
            <Publish />
          </div>
        </section>
        <section className="w-full mb-20">
          <div className="fluid-container grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <h4 className="mb-3">Title</h4>

              <InputField placeholder="Enter the Title" stateKey="title" />
              <h4 className="mb-3">Description</h4>
              <TextArea
                placeholder="Write the Description"
                stateKey="description"
              />
              <h4 className="mb-3">Content</h4>
              <RichEditor initialValue="Enter the content" stateKey="content" />
            </div>

            <div className="col-span-1">
              <h4 className="my-3">Collection</h4>
              <DropDown Dtitle="Collection" stateKey="collection" />
              <h4 className="mb-3 mt-6">Tumbnail image</h4>
              <AddImage stateKey="tumbImage" />
              <h4 className="mb-3 mt-6">Post Main Image</h4>
              <AddImage stateKey="postMainImage" />
            </div>
          </div>
        </section>
      </UploadProvider>
    </>
  );
};

export default UploadPost;
