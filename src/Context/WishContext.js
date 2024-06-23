import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { Authcontext } from "./Authprovide";
import axios from "axios";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export const WishProvider = ({ children }) => {
  const { user } = useContext(Authcontext);

  const { data: wishlist = {}, refetch } = useQuery(
    ["wishlist", user?.email],
    async () => {
      try {
        const { data } = await axios.get(
          `https://booknokery.vercel.app/wishlist/${user?.email}`
        );
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  );

  const addToWishlist = async (book) => {
    const existingBook = wishlist?.books?.find((item) => item._id === book._id);

    if (existingBook) return;

    try {
      const { data } = await axios.put(
        `https://booknokery.vercel.app/wishlist/${user?.email}`,
        {
          books: [...(wishlist?.books || []), book],
        }
      );

      refetch();
      toast.success("wish Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromWishlist = async (book) => {
    const updatedBooks = wishlist?.books?.filter(
      (item) => item._id !== book._id
    );

    try {
      const { data } = await axios.put(
        `https://booknokery.vercel.app/wishlist/${user?.email}`,
        {
          books: updatedBooks,
        }
      );

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    wishlist,
    addToWishlist,
    deleteFromWishlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
