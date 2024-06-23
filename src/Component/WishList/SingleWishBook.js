import React from "react";

const SingleWishBook = ({ wish, deleteFromWishlist }) => {
  const { name, page, published, writer, image, _id } = wish;

  return (
    <div className="transition duration-300 shadow-lg hover:shadow-xl shadow-[#5690c5]">
      <div class="flex max-w-md overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800">
        <div class="w-1/3 bg-cover">
          <img src={image} alt=""></img>
        </div>

        <div class="w-2/3 p-4 md:p-4">
          <h1 class="text-[20px]  text-white mb-2 dark:text-white">
            Book Name : {name}
          </h1>
          <h1 class="text-[17px]  text-white dark:text-white">
            Writer : {writer}
          </h1>

          <h1 class="text-[17px]  text-white dark:text-white">
            Published: {published}
          </h1>

          <div class="flex justify-between mt-3 item-center">
            <button
              onClick={() => deleteFromWishlist(wish)}
              className="btn btn-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWishBook;
