import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovide";
import useUserType from "../../Hook/useUserType";
import "./Navbar.css";
import { AiFillRead } from "react-icons/ai";
import { FaBars, FaUser } from "react-icons/fa";

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
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-between pt-8 pr-8 mr-8 text-white shadow shadow-gray-900 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content rounded-box w-52"
            >
              <Link to="/home" className="mr-4 font-bold ">
                Home
              </Link>
              <Link to="/online-books" className="mr-4 font-bold ">
                Online-Book
              </Link>
              <Link to="/book" className="mr-4 font-bold ">
                Product
              </Link>
              <Link to="/community" className="mr-4 font-bold">
                Community
              </Link>
              <Link to="/blog" className="mr-2 font-bold ">
                Blog
              </Link>
              <Link to="/wish-list" className="mr-2 font-bold ">
                WishList
              </Link>
              <Link to="/my-order-product" className="mr-2 font-bold ">
                My Order
              </Link>

              {!user && (
                <Link to="/login" className="mr-2 text-2xl ">
                  Login
                </Link>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <AiFillRead className="text-all hidden lg:block text-[30px]"></AiFillRead>
            <Link to="/" className=" text-[18px] lg:text-[30px]">
              Book Nookery
            </Link>
          </div>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 menu menu-horizontal text-[18px]">
            <Link to="/home" className="p-3 mr-4 rounded-md hover:bg-gray-800 ">
              Home
            </Link>
            <Link
              to="/community"
              className="p-3 mr-4 rounded-md hover:bg-gray-800 "
            >
              Community
            </Link>
            <Link
              to="/online-books"
              className="p-3 mr-4 rounded-md hover:bg-gray-800 "
            >
              Online-Book
            </Link>
            <Link to="/book" className="p-3 mr-4 rounded-md hover:bg-gray-800 ">
              Product
            </Link>
            <Link
              to="/blog"
              className="p-3 ml-2 mr-4 rounded-md hover:bg-gray-800 "
            >
              Blog
            </Link>

            {!user && (
              <Link to="/login" className="mr-2 ">
                Login
              </Link>
            )}

            <div className="ml-4 dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img
                      className="w-8 mr-2 rounded lg:w-14 tooltip"
                      src={user?.photoURL}
                      alt=""
                    ></img>
                  ) : (
                    <div className="flex justify-center items-center mt-2  text-[20px]">
                      <FaUser className=" text-[26px] text-[#80b7eb]"></FaUser>
                    </div>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-secondary rounded-box w-52"
              >
                <li>
                  <Link to="/wish-list">WishList</Link>
                </li>
                <li>
                  <Link to="/my-order-product">My Order</Link>
                </li>
                {user && (
                  <Link
                    onClick={handlelogout}
                    className="ml-2 mr-2 text-2xl nav-menu"
                  >
                    Logout
                  </Link>
                )}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
