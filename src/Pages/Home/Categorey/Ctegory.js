import React, { useEffect, useState } from "react";
import Categorycard from "./Categorycard";

const Ctegory = () => {
  const [categorey, setcatgorey] = useState([]);

  useEffect(() => {
    fetch("https://booknokery.vercel.app/categorey")
      .then((res) => res.json())
      .then((data) => setcatgorey(data));
  }, []);

  return (
    <div className="bg-black pt-12 pb-16">
      <h1 className="text-2xl mb-4 text-all pb-8 ml-12 font-bold">
        Our product categorey
      </h1>
      <div className="grid ml-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
