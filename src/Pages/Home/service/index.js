import React from "react";
import { FaCarSide, FaReadme } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";

const Service = () => {
  const allServices = [
    {
      id: "1",
      name: "Home Delivery",
      icon: <FaCarSide />,
      details:
        "We always try to give great home delivery for people .Here are lot of people order there book and try to give review .We try give our best product.",
    },
    {
      id: "1",
      name: "E-Book Haven",
      icon: <FaReadme />,
      details:
        "We always try to give great home delivery for people .Here are lot of people order there book and try to give review .We try give our best product.",
    },
    {
      id: "1",
      name: "Deal of the Day",
      icon: <MdOutlineLocalOffer />,
      details:
        "We always try to give great home delivery for people .Here are lot of people order there book and try to give review .We try give our best product.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl mt-14">
      <h1 className="pb-8 text-3xl font-bold text-center">
        Service what we provide
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3">
        {allServices?.map((service) => (
          <div key={service?.id} className="px-8 py-10 bg-gray-800 rounded-md">
            <div className="flex gap-2 text-[#6297c9] text-[24px] items-center   font-bold ">
              <h2>{service?.icon}</h2>
              <h2>{service?.name}</h2>
            </div>
            <hr className="w-[285px] mt-2 border-t-2 border-blue-500"></hr>
            <p className="pt-2 text-justify">{service?.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
