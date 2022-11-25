import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovide";

const Myproduct = () => {
  const { user } = useContext(Authcontext);
  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await fetch(
        `https://assignment12-server.vercel.app/${user?.email}`
      );
      const data = await response.json();
      return data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myproduct;
