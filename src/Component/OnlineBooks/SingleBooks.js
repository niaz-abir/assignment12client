import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdLibraryBooks } from "react-icons/md";

const SingleBooks = () => {
  const bookData = useLoaderData();
  const { name, reading, writer, published } = bookData;
  return (
    <div className="w-3/4 mx-auto mt-12">
      <h1 className="text-[1.5rem] font-bold text-[#7297b9] pb-2">
        {" "}
        Book Name : {name}
      </h1>
      <h1 className="text-[1rem] font-bold">{writer}</h1>
      <h1 className="text-[1rem] font-bold mb-6"> Published : {published}</h1>
      <p className="text-[18px] tracking-widest">
        <MdLibraryBooks className="text-[#7297b9]"></MdLibraryBooks>
        {reading}
      </p>
    </div>
  );
};

export default SingleBooks;
