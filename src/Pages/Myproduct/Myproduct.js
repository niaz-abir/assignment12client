import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovide";
import Sellproducts from "./Sellproducts/Sellproducts";

const Myproduct = () => {
  const { user } = useContext(Authcontext);
  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await fetch(
        `https://assignment12-server.vercel.appproducts?email=${user?.email}`
      );
      const data = await response.json();
      return data;
    },
  });
  return (
    <div>
      {product.map((sellproduct) => (
        <Sellproducts sellproduct={sellproduct}></Sellproducts>
      ))}
    </div>
  );
};

export default Myproduct;
