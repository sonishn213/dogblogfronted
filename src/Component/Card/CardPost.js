import React from "react";
import Dimage from "../../images/Dimage.png";
import { Link, Outlet } from "react-router-dom";

const CardPost = ({ post }) => {
  let imgUrl = `${process.env.REACT_APP_BACKEND_HOST}/` + post.tumbImg;
  console.log(imgUrl);
  return (
    <div className="card bg-white border border-slate-300">
      <div className="CardImage w-full max-h-60 overflow-y-hidden">
        <img className="max-w-full " src={imgUrl} alt={post.title} />
      </div>
      <div className=" CardDetails py-6 px-3 ">
        <p className="text-neutral-400 mb-1">{post.created_At}</p>
        <h3 className="mb-4 cursor-pointer hover:underline hover:underline-offset-4">
          <Link to={"/post/" + post.id}>{post.title}</Link>
        </h3>
        <div className="flex   whitespace-nowrap flex-wrap ">
          <Link to={`/allpost/${post.c_id}`}>
            <span
              id={post.c_id}
              className="bg-neutral-200 text-neutral-500 hover:bg-neutral-300 px-3 py-0.5 rounded-lg cursor-pointer mr-2 mb-2 transition-all "
            >
              {post.collection}
            </span>
          </Link>
        </div>
        {/* <p className="text-base text-neutral-600  text-ellipsis break-all whitespace-normal">
          {blogDetails.description}
        </p> */}
      </div>
    </div>
  );
};

export default CardPost;
