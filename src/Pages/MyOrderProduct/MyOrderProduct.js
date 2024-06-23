import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Context/Authprovide";

import toast, { Toast } from "react-hot-toast";

const MyOrderProduct = () => {
  const { user } = useContext(Authcontext);
  const [allOrderBook, setAllOrderBook] = useState();
  useEffect(() => {
    fetch(`https://booknokery.vercel.app/all-order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        try {
          setAllOrderBook(data);
        } catch (err) {
          console.log(err);
        }
      });
  }, [user]);

  const handleDeleteOrder = (orderId) => {
    fetch(`https://booknokery.vercel.app/all-order/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // Filter out the deleted order from the list
        toast.success("Order Deleted");
        setAllOrderBook((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  return (
    <section>
      <div className="flex justify-center">
        <div>
          <h2 className="pt-8 pb-8 text-2xl font-semibold text-center">
            Your Order List:
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {allOrderBook &&
              allOrderBook?.map((application) => (
                <div
                  key={application?._id}
                  className="bg-[#232729] flex gap-4 items-center rounded-md"
                >
                  <div>
                    <img className=" w-72" src={application?.image} alt="" />
                  </div>
                  <div className="pr-8">
                    <h1 className="text-[24px] font-bold">
                      Book: {application?.book}
                    </h1>
                    <h2 className="text-[20px]">Price: {application?.price}</h2>
                    <h1 className="text-[20px]">
                      Address:{application?.address}
                    </h1>
                    <h1 className="text-[20px]">
                      Mobile: {application?.mobile}
                    </h1>
                    <button
                      onClick={() => handleDeleteOrder(application?._id)}
                      className="px-4 py-2 rounded-md bg-[#6198ca] font-bold w-36 text-black mt-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrderProduct;
