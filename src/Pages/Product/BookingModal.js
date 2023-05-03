import { async } from "@firebase/util";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Authcontext } from "../../Context/Authprovide";

const BookingModal = ({ modalData }) => {
  const { user } = useContext(Authcontext);

  const handlebooking = async (event) => {
    event.preventDefault();

    const form = event.target;

    const modaldata = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value,
      meeting: form.meeting.value,
      email: form.email.value,
      item: form.item.value,
      price: form.price.value,
    };

    try {
      const resoponse = await axios.post(
        "https://assignment12-server.vercel.apporders",
        modaldata
      );
      if (resoponse?.data?.acknowledged) {
        toast.success("booking confirmed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black">
      <input type="checkbox" id="bookingModal" className="modal-toggle" />

      <div className="modal">
        <form onSubmit={handlebooking}>
          <div className="modal-box relative bg-black">
            <label
              htmlFor="bookingModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h1 className="text-all text-3xl">Your Booking Form</h1>

            <div className="form-control bg-black w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-all">name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-all">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                name="email"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-all">item</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="item"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
                defaultValue={modalData.name}
                readOnly
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-all">Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="price"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
                defaultValue={modalData.orginalprice}
                readOnly
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-all">Phone</span>
              </label>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-all">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                name="address"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mb-8 w-full max-w-xs">
              <label className="label">
                <span className="label-text text-all">Metting-Location</span>
              </label>
              <input
                type="text"
                placeholder="location"
                name="meeting"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn btn-all  w-3/4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
