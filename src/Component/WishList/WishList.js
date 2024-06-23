import React from "react";
import { useCart } from "../../Context/WishContext";
import SingleWishBook from "./SingleWishBook";

const WishList = () => {
  const { wishlist, deleteFromWishlist } = useCart();

  const handleDelete = (wishId) => {
    // const updatedCart = cart.filter((wish) => wish._id !== wishId);
  };

  return (
    <section className="min-h-[800px]">
      <div>
        <h1 className="text-[30px] ml-6  lg:ml-56 font-bold mt-12 mb-6  text-[#6198ca]">
          Your WishList
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-8 lg:w-2/3 lg:grid-cols-2">
        {wishlist?.books ? (
          wishlist.books?.map((wish) => (
            <SingleWishBook
              wish={wish}
              key={wish._id}
              deleteFromWishlist={deleteFromWishlist}
            />
          ))
        ) : (
          <p>No books added to the wishlist</p>
        )}
      </div>
    </section>
  );
};

export default WishList;
