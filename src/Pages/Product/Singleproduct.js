import React from "react";

const Singleproduct = ({ oneproduct, setModaldata }) => {
  const {
    name,
    img,
    type,
    location,
    resaleprice,
    orginalprice,
    yearofuse,
    posttime,
    sellername,
    verify,
  } = oneproduct;
  return (
    <div>
      <div className="card w-96 border-2 rounded-xl border-sky-500 bg-black shadow-xl">
        <figure className="pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body items-center text-white text-center">
          <h2 className="card-title">{name}</h2>
          <div className="flex gap-2  justify-evenly">
            <p>location: {location}</p>
            <p>sellername: {sellername}</p>
          </div>
          <div className="flex gap-2  justify-evenly">
            <p>resaleprice: {resaleprice}</p>
            <p>orginalprice :{orginalprice}</p>
          </div>
          <div className="flex gap-2  justify-evenly">
            <p>yearofuse: {yearofuse}</p>
            {/* <p>{posttime}</p> */}

            <p>verify:{verify}</p>
          </div>

          <div className="card-actions">
            <label
              onClick={() => setModaldata(oneproduct)}
              htmlFor="bookingModal"
              className="btn btn-all"
            >
              Booking Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
