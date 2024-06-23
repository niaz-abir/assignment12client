import React, { useEffect, useState } from "react";
import OnlineBook from "./OnlineBook";
import Spinner from "../Spinner/Spinner";

const OnlineBooks = () => {
  const [books, setBooks] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredData = books?.filter((item) => {
    if (item && item.type) {
      return item.type.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return false;
  });

  useEffect(() => {
    fetch("https://booknokery.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="mt-12 mb-64">
      <form className="flex justify-center mt-4 ">
        <div className="flex gap-6 text-2xl">
          {/* <RiShoppingBag3Line className="text-4xl font-bold text-green-600"></RiShoppingBag3Line> */}

          <input
            type="text"
            placeholder="search Your Books"
            className=" w-[300px] max-w-xs mr-6 placeholder:italic placeholder:text-slate-400 text-white rounded-md outline-none input bg-[#394b4e]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="rounded-md btn btn-all">Search</button>
      </form>

      {/* fetchingData */}
      <h1 className="mt-6 mb-2 text-[26px] font-semibold text-center text-[#80b7eb] ">
        Search Your Favourite Books{" "}
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-8 ml-4 lg:ml-8 lg:grid-cols-3">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          filteredData?.map((book) => (
            <OnlineBook book={book} key={book?._id}></OnlineBook>
          ))
        )}
      </div>
    </section>
  );
};

export default OnlineBooks;
