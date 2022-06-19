import React from "react";
import FeaturedPost from "../Component/FeaturedPostSection/FeaturedPost";
import SectionTitle from "../Component/SectionTitle/SectionTitle";
import ShopByTopic from "../Component/shopby/ShopByTopic";
import ImageGrid from "../Component/ImageGrid/ImageGrid";
import OverlayReadMore from "../Component/overlayReadmore/OverlayReadMore";
const Home = () => {
  const url1 = `${process.env.REACT_APP_BACKEND_HOST}/getAllPost.php`; //latest post
  console.log(url1);
  return (
    <>
      <FeaturedPost />
      <SectionTitle value="Explore Topics" />
      <ShopByTopic />
      <SectionTitle value="Latest post" />
      <div className="relative">
        <ImageGrid limit={6} url={url1} />
        <OverlayReadMore />
      </div>
      <div className="my-20"></div>
    </>
  );
};

export default Home;
