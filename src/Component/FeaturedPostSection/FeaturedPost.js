import React, { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
const featuredImage =
  "https://images.unsplash.com/photo-1560781854-d3d74a1ba2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRvZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60";
const FeaturedPost = () => {
  const [post, setPostList] = useState({});

  let url2 = `${process.env.REACT_APP_BACKEND_HOST}/getFeaturedPost.php`;
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

  useEffect(() => {
    if (post.title) {
      setImgUrl(`${process.env.REACT_APP_BACKEND_HOST}/` + post.mainImg);
    }
  }, [post]);
  return (
    <section id="featuredSection" className="mt-8">
      <article className="fluid-container lg:flex w-full lg:items-start">
        {/* FEATURED IMAGE */}
        <div className="w-1/2">
          <img src={imgUrl} className="w-full" alt="featured Image" />
        </div>
        {/* FEATURED DETAILS */}
        <div className="w-1/2 p-6">
          <p className="text-neutral-400 mb-1">{post.created_At}</p>
          <Link to={"/post/" + post.id}>
            <h1 className="mb-4 hover:underline underline-offset-10 ">
              {post.title}
            </h1>
          </Link>
          <div className="flex space-x-2 mb-8">
            <Link to={`/allpost/${post.c_id}`}>
              <span
                id={post.c_id}
                className="bg-neutral-200 text-neutral-500 hover:bg-neutral-300 px-3 py-0.5 rounded-lg cursor-pointer mr-2 mb-2 transition-all "
              >
                {post.collection}
              </span>
            </Link>
          </div>
          <p className="text-lg text-neutral-600  text-ellipsis break-all whitespace-normal">
            {post.description}
          </p>
        </div>
      </article>
    </section>
  );
};

export default FeaturedPost;
