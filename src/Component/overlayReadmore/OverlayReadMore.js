import React from "react";
import { Link } from "react-router-dom";
const OverlayReadMore = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 flex justify-center items-end h-36 w-full pb-3 ">
      <Link to={`/allpost`}>
        <button className="border border-slate-600 bg-white py-2 px-6 text-lg capitalize text-slate-700 hover:border-2 hover:text-slate-900">
          View All
        </button>
      </Link>
    </div>
  );
};

export default OverlayReadMore;
