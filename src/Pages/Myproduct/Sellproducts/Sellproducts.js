import React from "react";

const Sellproducts = ({ sellproduct }) => {
  console.log(sellproduct);
  return (
    <div>
      <h1>{sellproduct.name}</h1>
    </div>
  );
};

export default Sellproducts;
