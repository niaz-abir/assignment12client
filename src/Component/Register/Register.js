import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";

const Register = () => {
  const { createuser, googleSignin } = useContext(Authcontext);
  const googleprovider = new GoogleAuthProvider();
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const drone = form.drone.value;
    const password = form.password.value;
    // console.log(name, email, drone, password);
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <h1 className="text-3xl text-center">Signup</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
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
                  className="input input-bordered"
                />
              </div>

              <div className="mt-4">
                <p>Please Select:</p>
                <div>
                  <input
                    type="radio"
                    id="huey"
                    name="drone"
                    value="user"
                    checked
                  ></input>
                  <label for="huey">User</label>
                </div>

                <div>
                  <input type="radio" id="dewey" name="drone" value="seller" />
                  <label for="dewey">Seller</label>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login">Go to Login</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogle} className="btn btn-primary">
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
