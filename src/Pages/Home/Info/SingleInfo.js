import React from "react";

const SingleInfo = ({ single }) => {
  const { name, icons, description, advance, text } = single;
  return (
    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
      <div class="w-full max-w-sm px-4 py-3 bg-secondary text-white rounded-md shadow-md dark:bg-gray-800 h-[250px]">
        <div className="mt-8">
          <h1 class="mt-2 text-lg font-semibold  dark:text-white">{name}</h1>
          <p class="mt-2 text-sm mb-4  dark:text-gray-300">{description}</p>
        </div>
        <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-md dark:bg-blue-300 dark:text-blue-900">
          {advance}
        </span>
      </div>
    </div>
  );
};

export default SingleInfo;
