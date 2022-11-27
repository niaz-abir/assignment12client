import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";

const Allbuyer = () => {
  const { data: allbuyer = [] } = useQuery({
    queryKey: ["buyer"],
    queryFn: () =>
      fetch("http://localhost:5000/user/all-buyer").then((res) => res.json()),
  });

  return (
    <div className="mt-8">
      <div className="overflow-x-auto ">
        <table className="table  text-green-600 w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {allbuyer.map((singlebuyer, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{singlebuyer.name}</td>
                <td>{singlebuyer.email}</td>
                <td>{singlebuyer.type}</td>
                <button>delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbuyer;
