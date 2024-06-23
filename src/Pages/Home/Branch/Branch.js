import React from "react";

const Branch = ({ single }) => {
  const { img, name, id, location, contact } = single;
  return (
    <div className="shadow-xl card w-96">
      <figure>
        <img
          className=" w-[300px] h-[270px] lg:w-[350px] lg:h-[270px]"
          src={img}
          alt=""
        />
      </figure>
      <div className="pb-4 mt-8 ml-4 border-b-2 lg:ml-6 border-sky-600 ">
        <h1 className="text-white text-[18px]">
          Branch : <span className="font-bold text-all">{name}</span>
        </h1>
        <h1 className="text-white text-[18px]">Beside {location}</h1>
        <h1 className="text-white text-[18px]">Contact :{contact}</h1>
      </div>
    </div>
  );
};

export default Branch;
