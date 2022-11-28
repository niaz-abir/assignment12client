import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovide";

const Myorder = () => {
  const { user } = useContext(Authcontext);

  const { data: myorders = [] } = useQuery({
    queryKey: ["myorders"],
    queryFn: async () => {
      const response = await axios.get(
        `https://assignment12-server.vercel.apporders?email=${user?.email}`
      );
      return response.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>product</th>
              <th>price</th>
              <th>phone</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {myorders.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{order.item}</td>
                <td>{order.price}</td>
                <td>{order.phone}</td>
                <td className="btn btn-all">payment</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorder;
