import React from "react";
import img1 from "../../../asset/lib-brance1 (1).png";
import img2 from "../../../asset/lib-brance2(1).png";
import img3 from "../../../asset/lib-branc3(1).png";
import Branch from "./Branch";

const AllBranch = () => {
  const AllBranch = [
    {
      id: 1,
      img: img1,
      name: "Dhaka Branch",
      location: "AH Sadhak",
      contact: "+880181745374",
    },
    {
      id: 2,
      img: img2,
      name: "Sylhet Branch",
      location: "Hakim Sadhak",
      contact: "+880181746394",
    },
    {
      id: 3,
      img: img3,
      name: "Chittagong Branch",
      location: "Aziz Sadhak",
      contact: "+880181746389",
    },
  ];
  return (
    <div className="ml-2 mt-14">
      <h1 className="mb-2 ml-4 text-2xl font-bold lg:ml-12 text-all">
        Where You Find Us
      </h1>
      <hr className="w-[215px] mb-8 ml-4 lg:ml-12 border-t-2 border-blue-500"></hr>

      <div className="grid grid-cols-1 gap-4 pb-8 pl-4 pr-8 lg:pl-8 lg:grid-cols-3 ">
        {AllBranch?.map((single) => (
          <Branch single={single} key={single.id}></Branch>
        ))}
      </div>
    </div>
  );
};

export default AllBranch;
