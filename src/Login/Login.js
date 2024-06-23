import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authprovide";
import "./Login.css";
import Lottie from "lottie-react";
import logAnimation from "../../src/asset/booking.json";

const Login = () => {
  const { login } = useContext(Authcontext);
  const [error, setError] = useState("");
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
        setError("Password cannot matched!");
      });
  };

  return (
    <div>
      <div className="min-h-screen hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="mt-4">
              <div className="flex justify-center">
                <Lottie
                  className="w-3/4"
                  animationData={logAnimation}
                  loop={true}
                ></Lottie>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm ml-4 rounded-md shadow-2xl lg:ml-14 bg-secondary card">
            <form onSubmit={handleLogin} className="card-body">
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
                <Link to="/signup" className="text-[#6198ca]">
                  Move To SignUp For Password
                </Link>
              </label>
              <div className="mt-6 form-control">
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
