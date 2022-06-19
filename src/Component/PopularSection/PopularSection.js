import React from "react";
import CardPost from "../Card/CardPost";
import OverlayReadMore from "../overlayReadmore/OverlayReadMore";

const PopularSection = () => {
  return (
    <section id="popular post">
      <div className="fluid-container grid lg:gap-12 lg:grid-cols-3 relative">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />

        <OverlayReadMore />
      </div>
    </section>
  );
};

export default PopularSection;
