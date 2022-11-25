import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";

const Register = () => {
  const { createuser, googleSignin } = useContext(Authcontext);
  const googleprovider = new GoogleAuthProvider();

  const saveuser = async (name, email, type = "buyer") => {
    try {
      const response = await axios.post("http://localhost:5000/user/new", {
        name,
        email,
        type,
      });
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
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        if (user) {
          saveuser(name, email, type);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleSignin(googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col ">
          <h1 className="text-3xl text-center text-white">Signup</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-green-500 ">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input  bg-gray-400 input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input bg-gray-400  input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label text-white">Account type</label>
                <select className="input bg-gray-400 " name="type">
                  <option value="buyer">buyer</option>
                  <option value="seller">seller</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input bg-gray-400 input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="text-green-600">
                    Go to Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-all">Submit</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogle} className="btn btn-all ">
                  SignWithGoogle
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
