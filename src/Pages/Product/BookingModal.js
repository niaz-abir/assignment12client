import React, { useContext } from "react";
import { Authcontext } from "../../Context/Authprovide";

const BookingModal = ({ modalData }) => {
  const { user } = useContext(Authcontext);
  return (
    <div className="bg-black">
      <input type="checkbox" id="bookingModal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative bg-black">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-green-600 text-3xl">Your Booking Form</h1>

          <div className="form-control bg-black w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-green-600">name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input bg-gray-400 input-bordered w-full max-w-xs"
              name="name"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-green-600">Email</span>
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
              <span className="label-text  text-green-600">item</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input bg-gray-400 input-bordered w-full max-w-xs"
              defaultValue={modalData.name}
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-green-600">Price</span>
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
              <span className="label-text  text-green-600">Phone</span>
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
              <span className="label-text  text-green-600">Address</span>
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
              <span className="label-text text-green-600">
                Metting-Location
              </span>
            </label>
            <input
              type="text"
              placeholder="location"
              className="input bg-gray-400 input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-all  w-3/4">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
