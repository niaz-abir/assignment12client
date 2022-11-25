import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";
import Singleproduct from "./Singleproduct";
// import { MdVerifiedUser } from "react-icons/fa";

const Product = () => {
  const params = useParams();
  const [modalData, setModaldata] = useState({});

  const { data: products = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(
        `https://assignment12-server.vercel.app/categorey/${params.type}`
        // "https://assignment12-server.vercel.app/categorey/History"
      );
      console.log(params.type);
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
            setModaldata={setModaldata}
          ></Singleproduct>
        ))}
      </div>
      <BookingModal modalData={modalData}></BookingModal>
    </div>
  );
};

export default Product;
