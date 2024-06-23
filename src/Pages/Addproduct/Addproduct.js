import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Authcontext } from "../../Context/Authprovide";

const Addproduct = () => {
  const { user } = useContext(Authcontext);
  const handlefiilup = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const product = form.product.value;
    const price = form.price.value;
    const img = form.img.value;
    const purchase = form.purchase.value;
    const type = form.type.value;
    const Description = form.description.value;
    const Location = form.location.value;
    const mobile = form.mobile.value;

    const formdata = {
      name,
      product,
      price,
      img,
      purchase,
      type,
      Description,
      Location,
      mobile,
      seller: user?.email,
    };
    console.log(formdata);
    try {
      const response = await axios.post(
        `https://booknokery.vercel.app/products/new`,
        formdata
      );
      console.log(response);
      if (response?.data?.acknowledged) {
        toast.success("Added product Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pb-8 pt-8 bg-black">
      <h1 className="text-2xl mb-4 font-bold text-green-600 text-center">
        Add a product
      </h1>

      <form onSubmit={handlefiilup}>
        <div className="flex justify-center">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input bg-gray-400 input-bordered  "
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-white">Product-name</span>
              </label>
              <input
                type="text"
                placeholder="Product"
                name="product"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  text-white">img</span>
              </label>
              <input
                type="img"
                placeholder="img"
                name="img"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label text-white">type</label>
              <select className="input bg-gray-400" name="type">
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">purchase</span>
              </label>
              <input
                type="text"
                placeholder="purchase"
                name="purchase"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <input
                type="text"
                placeholder="description"
                name="description"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Location</span>
              </label>
              <input
                type="text"
                placeholder="location"
                name="location"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">mobile</span>
              </label>
              <input
                type="text"
                placeholder="mobile"
                name="mobile"
                className="input bg-gray-400 input-bordered w-full max-w-xs"
              />
            </div>
            <div className="mt-4">
              <button className="btn btn-all w-full">submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
