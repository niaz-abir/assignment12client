import React from "react";
import SingleInfo from "./SingleInfo";

const Info = () => {
  const cardData = [
    {
      id: 1,
      name: "Online Book Buying System",
      description:
        "People can select her favourite books and buy it easily .They have golden Opportunity to take it with lot.",
      advance: "online-payment",
      bgclass: "bg-black",
    },
    {
      id: 2,
      name: "Cash On Delivery",
      description:
        "Our Service is very great about home delivery .People can buy and if he think he can payment cash on delivery.",
      advance: "six-seven days",
      bgclass: "bg-primary",
    },
    {
      id: 3,
      name: "Online Pdf Reading",
      description:
        "People reads lot of book pdf easily in our website specially history book. people read happily.",
      advance: "Life time",

      bgclass: "bg-black",
    },
  ];

  return (
    <div>
      <h1 className="mt-2 mb-2 ml-6 text-2xl font-bold lg:ml-12 text-all">
        See We Provide On
      </h1>
      <hr className="w-[220px] mb-8 ml-4 lg:ml-12 border-t-2 border-blue-500"></hr>
      <div className="grid grid-cols-1 gap-6 mt-10 ml-4 mr-8 lg:ml-12 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((single) => (
          <SingleInfo single={single} key={single?.id}></SingleInfo>
        ))}
      </div>
    </div>
  );
};

export default Info;
