import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { RiPagesLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
// GrFingerPrint

const AllBook = ({ product, setModalData }) => {
  const { image, name, price, published, writer, page, discount, _id } =
    product;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm overflow-hidden  bg-[#0e1b25] rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full pt-3 h-60"
          src={image}
          alt="avatar"
        />

        <div className="flex items-center px-6 mt-2 ">
          <MdLibraryBooks></MdLibraryBooks>
          <h1 className="mx-3 text-lg font-bold text-[#6297c9] transition-transform hover:translate-y-[-0.5rem] duration-300 ease-in-out">
            {name}
          </h1>
        </div>
        <hr className="mt-2 ml-6 text-[#6297c9] w-44"></hr>

        <div className="px-6 py-2">
          <div className="flex items-center mt-2 text-white dark:text-gray-200">
            <FcBusinessman className="text-[20px]"></FcBusinessman>

            <h1 className="px-2 font-semibold text-[18px]">{writer}</h1>
          </div>

          <div className="flex items-center mt-2 text-white dark:text-gray-200">
            <RiPagesLine className="text-[#6297c9] text-[20px]"></RiPagesLine>

            <h1 className="px-2 text-[16px]">Pages : {page}</h1>
          </div>

          <div className="flex items-center mt-4 text-white dark:text-gray-200">
            <BsCalendar2Date className="text-[#6297c9] text-[20px]"></BsCalendar2Date>
            <h1 className="px-2 text-[16px]">Published : {published}</h1>
          </div>
          <div className="flex items-center mt-4 font-bold text-white dark:text-gray-200">
            <GiMoneyStack className="text-[#6297c9] text-[20px]"></GiMoneyStack>
            <h1 className="px-2 text-[16px]">
              Price {price} of {discount}%
            </h1>
          </div>
        </div>

        {/* start model  */}
        <div className="ml-6">
          <Link to={`/book-details/${_id}`}>
            <button className="w-64 font-bold btn btn-all">Read Details</button>
          </Link>
        </div>

        <div className="mt-3 mb-4 ml-6">
          <label
            onClick={() => setModalData(product)}
            htmlFor="bookingModal"
            className="w-64 font-bold btn btn-two"
          >
            Booking Now
          </label>
        </div>

        {/* Open the modal using ID.showModal() method */}
      </div>
    </div>
  );
};

export default AllBook;
