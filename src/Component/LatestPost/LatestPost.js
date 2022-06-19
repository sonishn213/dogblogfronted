import React, { useState, useEffect } from "react";
import CardPost from "../Card/CardPost";
import OverlayReadMore from "../overlayReadmore/OverlayReadMore";
//loading images from DB on load
import useFetch from "../../Hooks/useFetch";

const LatestPost = () => {
  const [postList, setPostList] = useState([]);
  let url2 = `${process.env.REACT_APP_BACKEND_HOST}/getAllPost.php`;
  const [data, loading, error, refetch] = useFetch(url2);
  if (error) {
    console.log("Error while fetching data");
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      if (!data.error) {
        setPostList(data.result);
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    }
  }, [data]);
  return (
    <section id="LatestPost">
      <div className="fluid-container  grid lg:gap-12 lg:grid-cols-3 relative">
        {postList.map((item, key) => {
          if (key < 6) {
            return <CardPost post={item} />;
          }
        })}

        <OverlayReadMore />
      </div>
    </section>
  );
};

export default LatestPost;
