import React from "react";

const Branch = ({ single }) => {
  const { img, name, id, location, contact } = single;
  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img className="w-[350px] h-[270px]" src={img} alt="" />
      </figure>
      <div className="ml-6 mt-8 border-b-2 border-sky-600 pb-4 ">
        <h1 className="text-white text-[18px]">
          Branch : <span className="text-all font-bold">{name}</span>
        </h1>
        <h1 className="text-white text-[18px]">Beside {location}</h1>
        <h1 className="text-white text-[18px]">Contact :{contact}</h1>
      </div>
    </div>
  );
};

export default Branch;
