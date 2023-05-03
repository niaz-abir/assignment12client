import React from "react";
import { VscPreview } from "react-icons/vsc";

const SingleReview = ({ single }) => {
  const { name, id, img, review } = single;
  return (
    <div className="card h-[300px] shadow-md shadow-dark-mid rounded-none transform hover:scale-105 transition duration-300 border-l-2 border-sky-500">
      <div className="card-body">
        <VscPreview className="text-3xl text-all"></VscPreview>
        <p className="text-white">{review}</p>
        <div className="flex  items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-dark-mid ring-offset-base-100 ring-offset-2">
              <img src={img} alt=""></img>
            </div>
          </div>
          <div>
            <h5 className="text-lg text-white">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
