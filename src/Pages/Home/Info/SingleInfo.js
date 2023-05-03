import React from "react";

const SingleInfo = ({ single }) => {
  const { name, icons, description, bgclass, text } = single;
  return (
    <div>
      <div
        className={`card p-6 h-[200px] rounded-md text-white lg:card-side shadow-xl ${bgclass} ${text} border-2 border-sky-500 `}
      >
        {/* <figure>
          <img className="w-24" src={icons} alt="Movie" />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleInfo;
