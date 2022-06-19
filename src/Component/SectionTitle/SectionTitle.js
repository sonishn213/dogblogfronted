import React from "react";

const SectionTitle = ({ value }) => {
  return (
    <section className="SectionTitle">
      <div className="fluid-container">
        <h2 className=" my-10 pb-3  capitalize border-b-2 border-slate-200 text-slate-600">
          {value}
        </h2>
      </div>
    </section>
  );
};

export default SectionTitle;
