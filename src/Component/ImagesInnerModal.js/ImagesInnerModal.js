import React, { useState, useEffect } from "react";

import axios from "axios";
import useFetch from "../../Hooks/useFetch";
const ImagesInnerModal = ({ setUrl, setShowModal }) => {
  const [imageFile, setImageFile] = useState({});
  const [imageList, setImageList] = useState([]);
  //loading images from DB on load

  let url2 = `${process.env.REACT_APP_BACKEND_HOST}/showAllImage.php`;
  const [data, loading, error, refetch] = useFetch(url2);
  if (error) {
    console.log("Error while fetching data");
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      if (!data.error) {
        setImageList(data.result);
      } else {
        console.log(data.message);
      }
    }
  }, [data]);

  // reading image input

  //url to upload image
  const url1 = `${process.env.REACT_APP_BACKEND_HOST}/imageUpload.php`;
  const recieveImage = (e) => {
    //read file from dom
    setImageFile(e.target.files);
    console.log("from onChange");
    console.log(e.target.files);
  };
  const uploadImage = async (e) => {
    //upload image to db
    e.preventDefault();
    const data = new FormData();
    data.append("fileToUpload", imageFile[0], imageFile[0].name);
    console.log(data.get("fileToUpload"));
    let response = await axios.post(url1, data);
    console.log(response.data.message);
    if (!response.data.error) {
      refetch(); //fetch again to reload images
    }
  };

  return (
    <>
      <div className="flex flex-col relative w-full h-full  overflow-auto">
        <section
          id="uploadImage"
          className="w-full flex justify-between item-center"
        >
          <h2>Select Image</h2>

          <form onSubmit={uploadImage} className="flex items-center">
            <input
              type="file"
              name="fileToUpload"
              encType="multipart/form-data"
              onChange={recieveImage}
            />
            <button className="bg-green-500 py-1 px-2">Upload</button>
          </form>
        </section>
        <section id="displayImage" className="  relative h-full mt-6  flex-1 ">
          <div
            style={{ display: loading ? "flex" : "none" }}
            className="absolute text-black bg-white w-full h-full flex justify-center items-center"
          >
            <h1>Loading...</h1>
          </div>
          <div className="grid grid-cols-6 gap-6 ">
            {imageList.map((item) => {
              return (
                <div
                  className="bg-black h-32 text-white overflow-hidden hover:opacity-60 cursor-pointer"
                  id={item.id}
                >
                  <img
                    src={
                      `${process.env.REACT_APP_BACKEND_HOST}/` + item.image_link
                    }
                    data-domain={`${process.env.REACT_APP_BACKEND_HOST}/`}
                    data-link={item.image_link}
                    alt={item.image_link}
                    onClick={(e) => {
                      setUrl((p) => {
                        return {
                          ...p,
                          realUrl: {
                            domain: e.target.dataset.domain,
                            relativeLink: e.target.dataset.link,
                          },
                        };
                      });
                      setShowModal(false);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default ImagesInnerModal;
