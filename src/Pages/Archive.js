import React, { useState, useEffect } from "react";
import SectionTitle from "../Component/SectionTitle/SectionTitle";
import ShopByTopic from "../Component/shopby/ShopByTopic";

import { useParams } from "react-router-dom";

//main archive page that uses different components as sections in this page
import ImageGrid from "../Component/ImageGrid/ImageGrid";

const Archive = () => {
  const [order, setOrder] = useState("DESC");
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("All Post");
  const { c_id } = useParams();
  let url1 = "";
  if (c_id) {
    url1 = `${process.env.REACT_APP_BACKEND_HOST}/getSingleCollection.php?c_id=${c_id}&order=${order}`;
  } else {
    url1 = `${process.env.REACT_APP_BACKEND_HOST}/getAllPost.php?order=${order}`;
  }
  useEffect(() => {
    if (data.length > 0) {
      if (c_id) {
        setTitle(data[0].collection);
      } else {
        setTitle("All Post");
      }
    }
  }, [data]);
  return (
    <main className="pb-10">
      <SectionTitle value="Explore By Topic" />
      <ShopByTopic />
      <div className="fluid-container my-20  pb-4 border-b-2 border-slate-200 text-right flex justify-between text-slate-600">
        <h2 className="  text-slate-600">{title}</h2>
        <div>
          <span>Sort By</span>
          <select
            name=""
            id=""
            className="ml-1 w-52 px-5 py-2 bg-white border border-slate-600"
            onChange={(e) => {
              setOrder(e.target.value);
            }}
          >
            <option value="DESC" className="px-5 py-2">
              Latest
            </option>
            <option value="ASC" className="px-5 py-2">
              Oldest
            </option>
          </select>
        </div>
      </div>
      <section>
        <ImageGrid limit={500} url={url1} setData={setData} />
      </section>
    </main>
  );
};

export default Archive;
