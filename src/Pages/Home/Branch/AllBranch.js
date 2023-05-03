import React from "react";
import img1 from "../../../asset/lib-brance1.jpg";
import img2 from "../../../asset/lib-brance2.jpg";
import img3 from "../../../asset/lib-branc3.jpg";
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
    <div className="mt-14 ml-2">
      <h1 className="text-2xl mb-6 text-all font-bold ml-8">All Branch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 pl-8 gap-4 pb-8 pr-8 ">
        {AllBranch?.map((single) => (
          <Branch single={single} key={single.id}></Branch>
        ))}
      </div>
    </div>
  );
};

export default AllBranch;
