/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import cover3 from "../../../asset/newcover.jpg";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { RiWifiOffLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="pt-44 lg:pt-20">
      <div className="grid grid-cols-1 gap-6 ml-6 mr-2 lg:ml-32 lg:mr-0 lg:grid-cols-3">
        <div>
          <h1 className="text-[43px] font-bold text-white">
            A New Box Of Books Every Month.
          </h1>
          <p className="mt-2">
            We deliver boxes of fantastic books title, author, subject price
            range, eligibility and more. straight to your door.
          </p>
          <div className="mt-2">
            <button className="font-bold btn btn-all">About us</button>
          </div>
        </div>
        <div className="mt-4">
          {/* <img className="h-5/6" src={cover3} alt=""></img> */}
          <div className="relative">
            <img src={cover3} alt="Your Image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>

        <div className="mt-8 lg:mt-14 text-[27px]">
          <div className="flex items-center gap-2 mb-4 ml-2 text-2xl text-">
            <DiGoogleCloudPlatform className="text-all text-[27px]"></DiGoogleCloudPlatform>
            <h1 className="text-white text-[25px]">Large platform</h1>
          </div>
          <div className="flex gap-2 mb-4 ml-6 text-2xl">
            <MdLibraryBooks className="text-all text-[27px]"></MdLibraryBooks>
            <h1 className="text-white text-[25px]">Ten Thousand books</h1>
          </div>
          <div className="flex gap-2 mb-4 ml-10 text-2xl">
            <MdOutlineSettingsAccessibility className="text-all text-[27px]"></MdOutlineSettingsAccessibility>
            <h1 className="text-white text-[25px]">Lifetime Access</h1>
          </div>
          <div className="flex gap-2 mb-4 text-2xl ml-14">
            <RiWifiOffLine className="text-all text-[27px]"></RiWifiOffLine>
            <h1 className="text-white text-[25px]">Read Offline</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
