import React from "react";
import img1 from "../../../asset/about us.jpg";

const AboutUs = () => {
  return (
    <div className="pt-24 pl-6 lg:pl-16">
      <h1 className="pb-6 mb-2 ml-4 text-3xl font-bold text-center ">
        Get To Know Us
      </h1>

      <div className="grid grid-cols-1 ml-4 lg:grid-cols-2 ">
        <div>
          <img
            className="ml-4 rounded-md lg:ml-10 h-5/6"
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          ></img>
        </div>
        <div className="pr-8">
          <p className="text-[17px] mt-3 mb-2 text-white">
            <span className="font-bold text-all">Bookworm</span> offer the
            convenience of shopping for books from the comfort of your home or
            office. You can browse through a wide selection of books and place
            an order with just a few clicks. Book selling websites offer a vast
            selection of books, including rare and hard-to-find books that may
            not be available in your local bookstore. Online bookstores often
            offer competitive pricing compared to physical bookstores. This is
            because online sellers don't have to worry about rent, utility
            bills, and other overhead expenses that come with running a
            brick-and-mortar store.
          </p>
          <p className="pt-2">
            {" "}
            Book selling websites are accessible from anywhere in the world,
            making it easy for buyers to purchase books from any part of the
            world.Many online bookstores have customer reviews and
            recommendations, which can help buyers make informed decisions when
            selecting books to purchase.
          </p>

          <div className="mt-4">
            <button className="rounded-sm w-72 btn btn-md">Knows About</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
