import React from "react";
import SingleReview from "./SingleReview";
import img1 from "../../../asset/review1.jpg";
import img2 from "../../../asset/review12.jpg";
import img3 from "../../../asset/review13.jpg";
import img4 from "../../../asset/review14.jpg";

const Review = () => {
  const allReview = [
    {
      id: 1,
      img: img1,
      name: "Adil Khan",
      review:
        "This is a great website for searching job .I hope everyone can enjoyed it very much.The trainer of this instuite is outsanding. ",
    },
    {
      id: 2,
      img: img2,
      name: "Nadil Ahmed",
      review:
        "job is very important for us .We should sincere it and about our carrier this website help me lot of. ",
    },
    {
      id: 3,
      img: img3,
      name: "Harry kane",
      review:
        "The service of this website is to good .It helps me lot of .I think lot of people can takes help from this website ",
    },
    {
      id: 4,
      img: img4,
      name: "Asfaq Nifun",
      review:
        "In city this website gives us a great environment for job. If anyone can use this website properly he can make a great hardwork",
    },
  ];

  return (
    <div className="bg-black">
      <h2 className=" ml-8 text-2xl text-all font-bold py-5 mb-4 pt-14">
        {" "}
        Users Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4  bg-dark-400 pl-8 gap-4 pb-8 pr-8 ">
        {allReview?.map((single) => (
          <SingleReview single={single} key={single.id}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
