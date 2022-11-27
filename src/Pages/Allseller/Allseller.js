import { useQuery } from "@tanstack/react-query";
import React from "react";

const Allseller = () => {
  const { data: allseller = [] } = useQuery({
    queryKey: ["buyer"],
    queryFn: () =>
      fetch("http://localhost:5000/user/all-seller").then((res) => res.json()),
  });
  return (
    <div className="mt-8 mb-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {allseller.map((singleseller, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{singleseller.name}</td>
                <td>{singleseller.email}</td>
                <td>{singleseller.type}</td>
                <button>delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allseller;
