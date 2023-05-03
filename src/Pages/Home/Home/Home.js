import React from "react";
import Banner from "../Banner/Banner";
import Ctegory from "../Categorey/Ctegory";
import Review from "../Review/Review";
import AboutUs from "../AboutUs/AboutUs";
import Info from "../Info/Info";
import AllBranch from "../Branch/AllBranch";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Ctegory></Ctegory>
      <Info></Info>
      <Review></Review>
      <AllBranch></AllBranch>
      {/* <Extrasection></Extrasection> */}
    </div>
  );
};

export default Home;
