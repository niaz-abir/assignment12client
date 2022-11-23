import React, { useEffect, useState } from "react";
import Categorycard from "./Categorycard";

const Ctegory = () => {
  const [categorey, setcatgorey] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setcatgorey(data));
  }, []);
  return (
    <div className="mt-8">
      <h1 className="text-center text-ellipsis text-3xl">
        Our product categorey
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categorey.map((singlecategtoey) => (
          <Categorycard
            singlecategtoey={singlecategtoey}
            key={singlecategtoey.id}
          ></Categorycard>
        ))}
      </div>
    </div>
  );
};

export default Ctegory;
