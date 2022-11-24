import React from "react";
import BookingModal from "./BookingModal";
import Singleproduct from "./Singleproduct";

const Product = () => {
  const productdata = [
    {
      name: "Hygge",
      img: "https://images.unsplash.com/photo-1610558495616-9ce40f904dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGJvb2t8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "History",
      location: "chittagong",
      resaleprice: 210,
      orginalprice: 440,
      yearofuse: 1,
      posttime: new Date(),
      sellername: "Upal Barua",
      verify: "yes",
    },
    {
      name: "Scriptures",
      img: "https://images.unsplash.com/photo-1512239951320-ee158ee09e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      type: "History",
      location: "chittagong",
      resaleprice: 175,
      orginalprice: 310,
      yearofuse: 2,
      posttime: new Date(),
      sellername: "Mahi Uddin",
      verify: "yes",
    },
    {
      name: "Cereal",
      img: "https://images.unsplash.com/photo-1513127696622-593a20aec127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80",
      type: "comics",
      location: "Dhaka",
      resaleprice: 150,
      orginalprice: 250,
      yearofuse: 2,
      posttime: new Date(),
      sellername: "Shariya Asif",
      verify: "yes",
    },
    {
      name: "Making memories",
      img: "https://images.unsplash.com/photo-1598745845211-7d7a22d8cc25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      type: "comics",
      location: "Dhaka",
      resaleprice: 140,
      orginalprice: 310,
      yearofuse: 2,
      posttime: new Date(),
      sellername: "Niaz Abir",
      verify: "yes",
    },
    {
      name: "Full Hofe",
      img: "https://images.unsplash.com/photo-1577627444534-b38e16c9d796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2t8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "Motaviton",
      location: "Khulna",
      resaleprice: 310,
      orginalprice: 620,
      yearofuse: 1,
      posttime: new Date(),
      sellername: "Samir Faizan",
      verify: "yes",
    },
    {
      name: "Milk and Honey",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      type: "Motaviton",
      location: "Khulna",
      resaleprice: 165,
      orginalprice: 310,
      yearofuse: 2,
      posttime: new Date(),
      sellername: "Sabbir Ahmed",
      verify: "yes",
    },
  ];
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 pt-16 pl-8 lg:pl-32  bg-black">
        {productdata.map((oneproduct) => (
          <Singleproduct
            oneproduct={oneproduct}
            key={oneproduct.id}
          ></Singleproduct>
        ))}
      </div>
      <BookingModal></BookingModal>
    </div>
  );
};

export default Product;
