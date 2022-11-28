import React from "react";

const Sellproducts = ({ sellproduct }) => {
  console.log(sellproduct);
  return (
    <div className="bg-black">
      <div className="card w-96  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-green-600">{sellproduct.product}</h2>
          <p className="text-green-600">{sellproduct.price}</p>
          <p className="text-green-600">{sellproduct.purchase}</p>
          <p className="text-green-600">{sellproduct.type}</p>
          <p className="text-green-600">{sellproduct.Location}</p>
          <p className="text-green-600">{sellproduct.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default Sellproducts;
