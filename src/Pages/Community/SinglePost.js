import React from "react";
import { FaUserSecret } from "react-icons/fa";

const SinglePost = ({ post }) => {
  const { name, image, text } = post;
  return (
    <div>
      <div class="max-w-2xl overflow-hidden bg-secondary text-white rounded-lg shadow-md dark:bg-gray-800 h-[430px]">
        <img class="object-cover w-full h-64" src={image} alt="Article" />

        <div class="p-4">
          <div class="mt-2">
            <div class="flex items-center">
              <div class="flex items-center">
                <FaUserSecret className="text-[#6198ca] text-[1.8rem]"></FaUserSecret>
                <h1
                  href="#"
                  class="mx-2 font-semibold text-[#6198ca] dark:text-gray-200"
                  tabindex="0"
                  role="link"
                  alt=""
                >
                  {name}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <p class="mt-2 text-sm text-white dark:text-gray-400">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
