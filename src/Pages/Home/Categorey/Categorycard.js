import React from "react";
import { Link } from "react-router-dom";

const Categorycard = ({ singlecategtoey }) => {
  const { img, type, id } = singlecategtoey;
  return (
    <div className="bg-black">
      <Link to={`/product/${singlecategtoey.type}`}>
        <div className="card w-96 h-80 bg-black shadow-md  shadow-green-500">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Type: {type}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categorycard;
