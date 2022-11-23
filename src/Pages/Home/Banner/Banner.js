import React from "react";
import cover from "../../../asset/cover.jpg";
import cover1 from "../../../asset/cover2.jpg";
import cover3 from "../../../asset/cover3 (2).jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" bg-black pt-16">
      <div className="carousel w-full lg:w-3/4 mx-auto rounded-lg ">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="cover_img">
            <img src={cover3} alt="" className="w-full" />
          </div>
          <div className="absolute  flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/2">
            <h1 className="text-6xl font-bold text-white ">
              Books is remind <br />
              for us
            </h1>
          </div>

          <div className="absolute lg:block hidden flex  mt-28 justify-between transform -translate-y-1/2 left-24 right-5 top-1/2 ">
            <p className="text-white ">
              Books remains us for good work .We can read lot of Book if we want
              <br />
              .So Books help us greatly .Here are lot of types book here.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="cover_img">
            <img src={cover} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="absolute  flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Books is remind <br />
                for us
              </h1>
            </div>

            <div className="absolute lg:block hidden flex  mt-28 justify-between transform -translate-y-1/2 left-24 right-5 top-2/3">
              <p className="text-white ">
                Books remains us for good work .We can read lot of Book if we
                want
                <br />
                .So Books help us greatly .Here are lot of types book here.
              </p>
            </div>

            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
