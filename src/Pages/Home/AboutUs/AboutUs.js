import React from "react";
import img1 from "../../../asset/about us.jpg";

const AboutUs = () => {
  return (
    <div className="pt-24 pl-16">
      <h1
        className="ml-6 mb-4 text-2xl font-bold text-all
      "
      >
        About us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-black ml-4 ">
        <div>
          <img className="h-5/6" src={img1} alt=""></img>
        </div>
        <div className="pr-8">
          <h1 className="text-[17px] mt-3 text-white">
            <span className="text-all">Bookworm</span> offer the convenience of
            shopping for books from the comfort of your home or office. You can
            browse through a wide selection of books and place an order with
            just a few clicks. Book selling websites offer a vast selection of
            books, including rare and hard-to-find books that may not be
            available in your local bookstore. Online bookstores often offer
            competitive pricing compared to physical bookstores. This is because
            online sellers don't have to worry about rent, utility bills, and
            other overhead expenses that come with running a brick-and-mortar
            store. Book selling websites are accessible from anywhere in the
            world, making it easy for buyers to purchase books from any part of
            the world.Many online bookstores have customer reviews and
            recommendations, which can help buyers make informed decisions when
            selecting books to purchase.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
