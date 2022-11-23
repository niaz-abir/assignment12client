import React from "react";

const Categorycard = ({ singlecategtoey }) => {
  const { img, name, id } = singlecategtoey;
  return (
    <div>
      <div className="card w-96  h-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Type: {name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
