import React from "react";
import cover from "../../../asset/cover.jpg";
import cover1 from "../../../asset/cover2.jpg";
import cover3 from "../../../asset/newcover.jpg";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { RiWifiOffLine } from "react-icons/ri";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" bg-black pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ml-32">
        <div>
          <h1 className="text-[43px] font-bold text-white">
            A New <span className="all-text">Box Of Books</span> Every Month.
          </h1>
          <p className="mt-2">
            We deliver boxes of fantastic books title, author, subject price
            range, eligibility and more. straight to your door.
          </p>
          <div className="mt-2">
            <button className="btn btn-all">About us</button>
          </div>
        </div>
        <div className="mt-4">
          <img className="h-5/6" src={cover3} alt=""></img>
        </div>

        <div className="mt-8 lg:mt-14 text-[27px]">
          <div className="flex gap-2 items-center text-2xl ml-2 mb-4 text-">
            <DiGoogleCloudPlatform className="text-all text-[27px]"></DiGoogleCloudPlatform>
            <h1 className="text-white text-[25px]">Large platform</h1>
          </div>
          <div className="flex gap-2  text-2xl ml-6 mb-4">
            <MdLibraryBooks className="text-all text-[27px]"></MdLibraryBooks>
            <h1 className="text-white text-[25px]">Ten Thousand books</h1>
          </div>
          <div className="flex gap-2 text-2xl ml-10 mb-4">
            <MdOutlineSettingsAccessibility className="text-all text-[27px]"></MdOutlineSettingsAccessibility>
            <h1 className="text-white text-[25px]">Lifetime Access</h1>
          </div>
          <div className="flex gap-2 text-2xl ml-14 mb-4">
            <RiWifiOffLine className="text-all text-[27px]"></RiWifiOffLine>
            <h1 className="text-white text-[25px]">Read Offline</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
