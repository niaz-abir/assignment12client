import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";
import Singleproduct from "./Singleproduct";
// import { MdVerifiedUser } from "react-icons/fa";

const Product = () => {
  const params = useParams();

  const { data: products = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(
        // `http://localhost:5000/categorey/${params.type}`
        "http://localhost:5000/categorey/History"
      );
      console.log(response.data, params.type);
      return response.data;
    },
  });
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 pt-16 pl-8 lg:pl-32  bg-black">
        {products?.map((oneproduct) => (
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
