import React from "react";
import { Link } from "react-router-dom";
const Topic = ({ value }) => {
  return (
    <Link to={`/allpost/${value.id}`}>
      <div className="text-xl capitalize py-1 px-2 bg-slate-900 text-white border border-slate-400 rounded-md cursor-pointer hover:bg-slate-500">
        <p>{value.c_name}</p>
      </div>
    </Link>
  );
};

export default Topic;
