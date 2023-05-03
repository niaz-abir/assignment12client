import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";
import useUserType from "../../Hook/useUserType";
import "./Navbar.css";
import { AiFillRead } from "react-icons/ai";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const { userType } = useUserType(user?.email);
  console.log(user);
  console.log(userType);
  return (
    <div>
      <div className="navbar pt-8 text-white pr-8 bg-black mr-8 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/categorey">categorey</Link>
            </ul>
          </div>
          <div className="flex gap-4 items-center ml-4">
            <AiFillRead className="text-all text-[30px]"></AiFillRead>
            <Link to="/" className="text-[30px]">
              Bookworm Shack
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="/home" className="mr-4 nav-menu   text-2xl">
              Home
            </Link>
            <Link to="/login" className="mr-2 nav-menu  text-2xl">
              Login
            </Link>
            <Link to="/blog" className="mr-2 ml-2 nav-menu text-2xl">
              Blog
            </Link>
            {/* <Link to="/categorey" className="mr-2 ml-2 nav-menu  text-2xl">
              categorey
            </Link> */}

            {user?.uid && userType == "buyer" && (
              <Link to="/my-order" className="mr-2 ml-2 nav-menu text-2xl">
                My Order
              </Link>
            )}
            {user?.uid && userType == "seller" && (
              <>
                <Link to="/add-product" className="mr-2 ml-2 nav-menu text-2xl">
                  Add Product
                </Link>
                <Link to="/my-product" className="mr-2 ml-2 nav-menu text-2xl">
                  My Product
                </Link>
              </>
            )}

            {user?.uid && userType == "admin" && (
              <>
                <>
                  <Link
                    to="/all-seller"
                    className="mr-2 ml-2 nav-menu text-2xl"
                  >
                    All Sellers
                  </Link>
                  <Link to="/all-buyer" className="mr-2 ml-2 nav-menu text-2xl">
                    All Buyers
                  </Link>
                </>
              </>
            )}
            <Link
              onClick={handlelogout}
              className="mr-2 ml-2 nav-menu  text-2xl"
            >
              Logout
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
