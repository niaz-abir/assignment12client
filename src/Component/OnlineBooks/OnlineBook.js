import React, { useContext, useEffect } from "react";
// import "./OnlineBook.css";
import { FcBusinessman } from "react-icons/fc";
import { RiPagesLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/WishContext";
import toast, { Toast } from "react-hot-toast";
import { Authcontext } from "../../Context/Authprovide";

const OnlineBook = ({ book }) => {
  const { addToWishlist, wishlist } = useCart();
  const { name, image, published, page, writer, _id } = book;

  const { user } = useContext(Authcontext);

  const handleWish = () => {
    addToWishlist(book);
    toast.success("wish Added Successfully");
  };

  return (
    <section>
      <div class="w-full max-w-sm overflow-hidden  bg-secondary rounded-lg shadow-lg dark:bg-gray-800">
        <div>
          <Link to={`/online-books/${_id}`}>
            <div>
              <img
                class="object-cover object-center w-full pt-3  h-60"
                src={image}
                alt="avatar"
              />
            </div>

            <div class="flex items-center px-6 mt-2 ">
              <MdLibraryBooks></MdLibraryBooks>
              <h1 class="mx-3 text-lg font-bold text-[#6297c9] transition-transform hover:translate-y-[-0.5rem] duration-300 ease-in-out">
                {name}
              </h1>
            </div>
            <hr className="mt-2 ml-6 text-[#6297c9] w-44"></hr>

            <div class="px-6 py-2">
              <div class="flex items-center mt-2  text-white dark:text-gray-200">
                <FcBusinessman className="text-[20px]"></FcBusinessman>

                <h1 class="px-2 font-semibold text-[18px]">{writer}</h1>
              </div>

              <div class="flex items-center mt-2  text-white dark:text-gray-200">
                <RiPagesLine className="text-[#6297c9] text-[20px]"></RiPagesLine>

                <h1 class="px-2 text-[16px]">Pages : {page}</h1>
              </div>

              <div class="flex items-center  mt-4 text-white dark:text-gray-200">
                <BsCalendar2Date className="text-[#6297c9] text-[20px]"></BsCalendar2Date>
                <h1 class="px-2 text-[16px]">Published : {published}</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-3 mb-4 ml-6">
          <button onClick={() => addToWishlist(book)} className=" btn btn-all">
            Add To WishList
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnlineBook;
