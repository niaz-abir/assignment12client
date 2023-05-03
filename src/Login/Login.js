import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import "./Login.css";

const Login = () => {
  const { login } = useContext(Authcontext);
  const [error, seterror] = useState("");
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        seterror("Password cannot matched!");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col ">
          <h1 className="text-3xl text-center text-white">Login</h1>
          <p className="text-red-600">{error}</p>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-blue-400 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input bg-gray-400 input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input bg-slate-400 input-bordered"
                  name="password"
                />
                <label className="label">
                  <Link to="/signup" className="text-blue-400">
                    New to Signup first
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-all">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
