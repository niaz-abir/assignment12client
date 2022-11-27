import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const Allseller = () => {
  const { data: allseller = [], refetch } = useQuery({
    queryKey: ["buyer"],
    queryFn: () =>
      fetch("https://assignment12-server.vercel.app/user/all-seller").then(
        (res) => res.json()
      ),
  });

  const handledelte = async (_id) => {
    try {
      const response = await axios.delete(
        `https://assignment12-server.vercel.app/user/delete/${_id}`
      );
      if (response?.data?.deletedCount > 0) {
        refetch();
        toast.success("product deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <button onClick={() => handledelte(singleseller._id)}>
                  delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allseller;
