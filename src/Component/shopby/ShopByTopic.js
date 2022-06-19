import React, { useState, useEffect } from "react";
import Topic from "./Topic";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
const ShopByTopic = () => {
  const [postList, setPostList] = useState([]);
  let url2 = `${process.env.REACT_APP_BACKEND_HOST}/getAllCollection.php`;
  const [data, loading, error] = useFetch(url2);
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
    <section>
      <div className="fluid-container flex space-x-2 flex-wrap">
        <Link to={`/allpost`}>
          <div className="text-xl capitalize py-1 px-2 bg-slate-900 text-white border border-slate-400 rounded-md cursor-pointer hover:bg-slate-500">
            <p>All Posts</p>
          </div>
        </Link>
        {postList.map((item) => {
          return <Topic value={item} />;
        })}
      </div>
    </section>
  );
};

export default ShopByTopic;
