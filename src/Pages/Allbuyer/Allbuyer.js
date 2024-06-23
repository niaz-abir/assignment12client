import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const Allbuyer = () => {
  const { data: allbuyer = [], refetch } = useQuery({
    queryKey: ["buyer"],
    queryFn: () =>
      fetch("https://booknokery.vercel.app/user/all-buyer").then((res) =>
        res.json()
      ),
  });
  const handledelete = async (_id) => {
    try {
      const response = await axios.delete(
        `https://booknokery.vercel.app/user/delete/${_id}`
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
                <button onClick={() => handledelete(singlebuyer._id)}>
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

export default Allbuyer;
