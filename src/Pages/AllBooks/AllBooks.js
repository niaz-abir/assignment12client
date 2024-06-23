import React, { useEffect, useState } from "react";
import AllBook from "./AllBook";
import BookModal from "./BookModal";
import { FaBookDead } from "react-icons/fa";

const AllBooks = () => {
  const [products, setProducts] = useState();
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://booknokery.vercel.app/material")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setLoading(false);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mt-6 text-center lg:gap-4">
        <h1 className="mt-4 mb-2  font-semibold  text-[1.8rem] text-[#80b7eb] ">
          Choose Your Favourite Books{" "}
        </h1>
        <FaBookDead className="text-[1.8rem] text-[#80b7eb] hidden lg:block "></FaBookDead>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 ml-2 lg:ml-8 lg:grid-cols-3  min-h-[800px]">
        {products?.map((product) => (
          <AllBook
            product={product}
            key={product?._id}
            setModalData={setModalData}
          ></AllBook>
        ))}
      </div>
      <BookModal modalData={modalData}></BookModal>
    </div>
  );
};

export default AllBooks;
