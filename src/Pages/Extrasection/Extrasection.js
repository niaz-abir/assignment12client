import React from "react";
import pic1 from "../../asset/pi1.jpg";
import pic2 from "../../asset/pic2.jpg";
import pic3 from "../../asset/pic3.jpg";
import pic4 from "../../asset/pic4.jpg";
import pic5 from "../../asset/pic5 (1).jpg";
import pic6 from "../../asset/ll.jpg";
import pic7 from "../../asset/mm.jpg";
import pic8 from "../../asset/pic5 (4).jpg";
import "./Extracetion.css";
const Extrasection = () => {
  return (
    <div className="bg-black pt-16 pb-16 pr-8">
      <div className="grid text-center items-center gap-4 lg:gap-0  grid-cols-1 lg:grid-cols-2">
        {/* left div */}
        <div>
          <h1 className="text-4xl text-green-600 mb-4">OUR BRANCE</h1>
          <h1 className="text-2xl mb-2 alt-nav text-white">CHITTAGONG</h1>
          <h1 className="text-2xl mb-2 alt-nav text-white">DHAKA</h1>
          <h1 className="text-2xl mb-2 alt-nav text-white">KHULNA</h1>
          <h1 className="text-2xl mb-2 alt-nav text-white">MIRSHARAI</h1>
        </div>
        {/* rigth div */}
        <div>
          {/* right div menu */}
          <h1 className="text-center text-3xl font-bold mb-4 text-white">
            ALSO TYPE OF BOOK
          </h1>
          <div className="grid  grid-cols-2 lg:grid-cols-4 text-center items-center  text-white mb-4 rounded-lg border-2 border-green-600 p-4 ">
            <h1 className="text-2xl ">Fiction</h1>
            <h1 className="text-2xl">Story</h1>
            <h1 className="text-2xl">Novel</h1>
            <h1 className="text-2xl">Horror</h1>
          </div>

          {/* right div pic */}
          <div className="grid gap-4 ml-32 lg:ml-2 grid-cols-1 lg:grid-cols-4 justify-center items-center">
            <div>
              <img className="w-1/2 rounded-lg" src={pic1} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic2} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic3} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic4} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic5} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic6} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic7} alt=""></img>
            </div>
            <div>
              <img className="w-1/2 rounded-lg" src={pic8} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extrasection;
