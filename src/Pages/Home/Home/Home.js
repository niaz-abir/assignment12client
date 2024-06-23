import React from "react";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Service from "../service";
import NewBook from "../NewBook.js/NewBook";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Service />
      <NewBook />
      <Contact />
      <News />
      <Testimonial />
    </div>
  );
};

export default Home;
