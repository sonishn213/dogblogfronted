import React, { useState, useEffect } from "react";
import Dimage from "../images/Dimage.png";
import LatestPost from "../Component/LatestPost/LatestPost";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import CardPost from "../Component/Card/CardPost";
import useFetch from "../Hooks/useFetch";
import ImageGrid from "../Component/ImageGrid/ImageGrid";
import OverlayReadMore from "../Component/overlayReadmore/OverlayReadMore";
const ViewBlog = () => {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const [post, setPostList] = useState({});

  let url2 = `${process.env.REACT_APP_BACKEND_HOST}/getSinglePost.php?id=${id}`;
  const [data, loading, error] = useFetch(url2);
  if (error) {
    console.log("Error while fetching data");
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      if (!data.error) {
        setPostList(data.result[0]);
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    }
  }, [data]);
  const [imgUrl, setImgUrl] = useState("");
  const [url1, setUrl] = useState("");

  useEffect(() => {
    if (post.title) {
      setImgUrl(`${process.env.REACT_APP_BACKEND_HOST}/` + post.mainImg);
      setUrl(
        `${process.env.REACT_APP_BACKEND_HOST}/getSingleCollection.php?c_id=${post.c_id}`
      ); //latest post related to same collection
    }
  }, [post]);

  return (
    <>
      <section className="pb-20">
        <div className="fluid-container ">
          <div className=" w-2/3 mx-auto pb-20">
            <article className=""></article>
            <article className=" ">
              <p className="text-slate-500 my-4">
                Published on {post.created_At}
              </p>
              <h1 className=" mb-12 ">{post.title}</h1>
              <div className="  overflow-hidden rounded-lg mb-10">
                <img className="max-w-full w-full object-fill " src={imgUrl} />
              </div>
              <div className="text-lg space-y-6">
                {parse(post.content || "")}
              </div>
            </article>
          </div>
          <h2 className="mb-6">Related Articles</h2>
        </div>
        <div className="relative">
          <ImageGrid limit={3} url={url1} />
          <OverlayReadMore />
        </div>
      </section>
    </>
  );
};

export default ViewBlog;
