import React, { useState, useEffect } from "react";
import CardPost from "../Card/CardPost";
import OverlayReadMore from "../overlayReadmore/OverlayReadMore";
//loading images from DB on load
import useFetch from "../../Hooks/useFetch";

const ImageGrid = ({ limit, url, setData }) => {
  const [postList, setPostList] = useState([]);

  const [data, loading, error, refetch] = useFetch(url);
  if (error) {
    console.log("Error while fetching data Image grid");
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      if (!data.error) {
        setPostList(data.result);
        if (typeof setData === "function") {
          setData(data.result);
        }
      } else {
        console.log(data.message);
      }
    }
  }, [data]);
  return (
    <section id="imageGrid">
      <div className="fluid-container  grid lg:gap-12 lg:grid-cols-3 relative">
        {postList.map((item, key) => {
          if (key < limit) {
            return <CardPost post={item} />;
          }
        })}
      </div>
    </section>
  );
};

export default ImageGrid;
