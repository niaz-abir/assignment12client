import React, { useContext, useEffect } from "react";
import { Authcontext } from "../../Context/Authprovide";
import { VscCloseAll } from "react-icons/vsc";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const BookModal = ({ modalData }) => {
  console.log(modalData);
  const { user } = useContext(Authcontext);
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      book: modalData?.name,
      price: modalData?.price,
    },
  });
  useEffect(() => {
    reset({
      email: user?.email,
      book: modalData?.name,
      price: modalData?.price,
    });
  }, [user, modalData, reset]);

  const handleBookSubmit = (formData) => {
    formData.image = modalData?.image;
    fetch("https://booknokery.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("booking successfully");
          navigate("/book");
        }
      });
  };

  return (
    <div>
      <div className="bg-black">
        <input type="checkbox" id="bookingModal" className="modal-toggle" />

        <div className="modal">
          <div className="relative bg-black modal-box">
            <label
              htmlFor="bookingModal"
              className="absolute btn btn-sm btn-circle right-3 top-6"
            >
              <VscCloseAll className="text-[2rem] text-blue-500"></VscCloseAll>
            </label>

            <form onSubmit={handleSubmit(handleBookSubmit)}>
              <h1 className="text-3xl font-bold text-all">
                Your Booking Form :
              </h1>
              <div className="avatar">
                <div className="w-40 rounded">
                  <img src={modalData?.image} alt="" />
                </div>
              </div>
              <div className="w-full max-w-xs bg-black form-control">
                <label className="label">
                  <span className="font-bold label-text text-all">
                    Book Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="book"
                  className="w-full font-bold text-white rounded-sm input input-bordered bg-slate-800"
                  {...register("book", { required: true })}
                  // defaultValue={modalData?.name}
                />
              </div>

              <div className="w-full max-w-xs bg-black form-control">
                <label className="label">
                  <span className="font-bold label-text text-all">price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="w-full text-white rounded-sm input input-bordered bg-slate-800"
                  {...register("price", { required: true })}
                  // defaultValue={modalData?.price}
                />
              </div>
              {/* name */}
              <div className="w-full max-w-xs bg-black form-control">
                <label className="label">
                  <span className="font-bold label-text text-all">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="w-full text-white rounded-sm input input-bordered bg-slate-800"
                  {...register("name", { required: "fill up your name" })}
                />
              </div>
              <div className="w-full max-w-xs bg-black form-control">
                <label className="label">
                  <span className="font-bold label-text text-all">email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="w-full text-white rounded-sm input input-bordered bg-slate-800"
                  {...register("email", { required: true })}
                  // defaultValue={user?.email}
                  required
                />
              </div>
              <div className="w-full max-w-xs bg-black form-control">
                <label className="label">
                  <span className="font-bold label-text text-all">address</span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  className="w-full text-white rounded-sm input input-bordered bg-slate-800"
                  {...register("address", { required: true })}
                  // defaultValue={user?.displayName}
                  required
                />
              </div>
              <div className="w-full max-w-xs bg-black form-control">
                <label className="label">
                  <span className="font-bold label-text text-all">mobile</span>
                </label>
                <input
                  type="number"
                  placeholder="mobile"
                  className="w-full mb-6 text-white rounded-sm input input-bordered bg-slate-800"
                  {...register("mobile", { required: true })}
                  required
                />
              </div>
              <div className="text-red">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key].message}</p>
                ))}
              </div>
              <button className="w-3/4 rounded-sm btn btn-all">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
