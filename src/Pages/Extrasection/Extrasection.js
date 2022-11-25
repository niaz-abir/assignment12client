import React from "react";
import pic1 from "../../asset/pi1.jpg";
import pic2 from "../../asset/pic2.jpg";
import pic3 from "../../asset/pic3.jpg";
import pic4 from "../../asset/pic4.jpg";

const Extrasection = () => {
  return (
    <div className="bg-black pt-16 pb-16 pr-8">
      <div className="grid text-center items-center grid-cols-1 lg:grid-cols-2">
        {/* left div */}
        <div>
          <h1 className="text-2xl">Our Brance</h1>
          <h1 className="text-2xl">Chittagong</h1>
          <h1 className="text-2xl">Dhaka</h1>
          <h1 className="text-2xl">Khulna</h1>
          <h1 className="text-2xl">Mirsharai</h1>
        </div>
        {/* rigth div */}
        <div>
          {/* right div menu */}
          <h1 className="text-center text-3xl font-bold text-white">
            ALSO TYPE OF BOOK
          </h1>
          <div className="grid  grid-cols-2 lg:grid-cols-4 text-center items-center  text-white mb-4 border-2 border-green-600 p-4 ">
            <h1 className="text-2xl">Fiction</h1>
            <h1 className="text-2xl">Story</h1>
            <h1 className="text-2xl">Novel</h1>
            <h1 className="text-2xl">Horror</h1>
          </div>

          {/* right div pic */}
          <div className="grid  grid-cols-1 lg:grid-cols-4 justify-center items-center">
            <div>
              <img className="w-1/2" src={pic1} alt=""></img>
            </div>
            <div>
              <img className="w-1/2" src={pic2} alt=""></img>
            </div>
            <div>
              <img className="w-1/2" src={pic3} alt=""></img>
            </div>
            <div>
              <img className="w-1/2" src={pic4} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extrasection;
