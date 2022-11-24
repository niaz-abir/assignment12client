import React, { useEffect, useState } from "react";
import Categorycard from "./Categorycard";

const Ctegory = () => {
  const [categorey, setcatgorey] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categorey")
      .then((res) => res.json())
      .then((data) => setcatgorey(data));
  }, []);

  return (
    <div className="bg-black pt-16 pb-16">
      <h1 className="text-3xl text-center text-white pb-8  font-bold">
        Our product categorey
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categorey.map((singlecategtoey) => (
          <Categorycard
            singlecategtoey={singlecategtoey}
            key={singlecategtoey._id}
          ></Categorycard>
        ))}
      </div>
    </div>
  );
};

export default Ctegory;
