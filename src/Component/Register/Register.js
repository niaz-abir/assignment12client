import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";
import toast, { Toast } from "react-hot-toast";
import Lottie from "lottie-react";
import reader from "../../asset/reading.json";

const Register = () => {
  const { createUser, googleSignIn } = useContext(Authcontext);
  // const googleprovider = new GoogleAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const saveUser = async (name, email, type = "buyer") => {
    try {
      const response = await axios.post(
        "https://booknokery.vercel.app/user/new",
        {
          name,
          email,
          type,
        }
      );
      console.log(name, email, type);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const type = form.type.value;
    const password = form.password.value;
    // console.log(name, email, drone, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("create user successfully");
        navigate("/");

        if (user) {
          saveUser(name, email, type);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="min-h-screen mt-6 hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="mt-4">
              <h1 className="text-4xl font-bold text-center font-serif text-[#6198ca] ">
                SIGNUP
              </h1>
              <div className="flex justify-center">
                <Lottie
                  className="ml-8 lg:ml-24"
                  animationData={reader}
                  loop={true}
                ></Lottie>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm rounded-md shadow-2xl bg-secondary card">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="text-white rounded-sm input input-bordered bg-slate-800"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="text-white rounded-sm input input-bordered bg-slate-800"
                />
              </div>
              <div className="form-control">
                <label className="text-white label">Account type</label>
                <select className="text-white bg-slate-800 input " name="type">
                  <option value="buyer">buyer</option>
                  <option value="seller">seller</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="text-white rounded-sm input input-bordered bg-slate-800"
                />
              </div>
              <label className="label">
                <Link to="/login" className="text-[#6198ca]">
                  Go to Login
                </Link>
              </label>
              <div className="mt-6 form-control">
                <button className="btn btn-all">Signup</button>
              </div>
              <div className="mt-6 form-control">
                <button onClick={handleGoogle} className="btn btn-all">
                  GoogleSign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
