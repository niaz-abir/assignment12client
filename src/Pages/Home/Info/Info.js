import React from "react";
import SingleInfo from "./SingleInfo";

const Info = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening hours :",
      description: "open 9.00am to 5.00pm everyday",
      text: "text-primary",
      bgclass: "bg-black",
    },
    {
      id: 2,
      name: "visit our main branch :",
      description: "Khulsi Chittagong",
      text: "text-black",
      bgclass: "bg-primary",
    },
    {
      id: 3,
      name: "Contact us :",
      description: "mobile: +8801891625145",
      text: "text-primary",

      bgclass: "bg-black",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl text-all ml-8 font-bold mb-4">Our Info</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ml-8 mr-8">
        {cardData.map((single) => (
          <SingleInfo single={single} key={single?.id}></SingleInfo>
        ))}
      </div>
    </div>
  );
};

export default Info;
