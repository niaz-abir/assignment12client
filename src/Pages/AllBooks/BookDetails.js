/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlinePages } from "react-icons/md";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { image, name, type, page, price, published, discount, writer } =
    bookData;
  return (
    <div>
      <div className="py-8 mt-6 text-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row">
            <div className="px-4 md:flex-1">
              <div className="h-[460px] rounded-lg bg-[#232729]  mb-4">
                <img
                  className="object-cover w-full h-full"
                  src={image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <h2 className="flex items-center gap-4 text-3xl font-bold text-all">
                Book Name : {name}
              </h2>
              <h2 className="mb-4 ">
                {" "}
                Written by{" "}
                <span className="text-[20px] font-semibold">{writer}</span>
              </h2>

              <p className="mb-4 text-sm text-gray-300 ">
                This book released from the write and publication launch it
                their maintain rules and regulation .Hopefully everyone will
                read it and enjoyed it.They have the power .
              </p>

              <div className="mb-4 ">
                <h2 className="font-bold text-[22px] pb-4 text-white">
                  Price : {price} of {discount}% discount
                </h2>
                <p className="text-[18px] flex gap-2 items-center text-gray-400">
                  <FaBoxOpen /> Availability: In Stock
                </p>
                <h2 className=" text-[18px] text-gray-400 flex gap-2 items-center">
                  <IoIosListBox />
                  Type: {type}
                </h2>
                <h2 className=" text-[18px] text-gray-400 flex gap-2 items-center ">
                  <MdOutlinePages />
                  Pages: {page}
                </h2>
                <h2 className=" text-[18px] text-gray-400 flex gap-2 items-center">
                  <BsFillCalendarDateFill />
                  Published: {published}
                </h2>
              </div>

              <div>
                <span className="font-bold ">Book Description:</span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Books are one of the most influential and enduring forms of
                  communication in human history. They have the power to inform,
                  entertain, and inspire readers across generations. Whether
                  fiction or non-fiction, books offer a unique opportunity for
                  deep engagement with a subject, allowing readers to explore
                  complex ideas and narratives at their own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
