import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Notfound from "../../Component/Notfound/Notfound";
import Register from "../../Component/Register/Register";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Addproduct from "../../Pages/Addproduct/Addproduct";
import Home from "../../Pages/Home/Home/Home";
import BookingModal from "../../Pages/Product/BookingModal";
import Product from "../../Pages/Product/Product";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/navbar", element: <Navbar></Navbar> },
      { path: "/footer", element: <Footer></Footer> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },
      { path: "/product/:type", element: <Product></Product> },
      { path: "/booking", element: <BookingModal></BookingModal> },
      { path: "/add-product", element: <Addproduct></Addproduct> },
      { path: "/*", element: <Notfound></Notfound> },
    ],
  },
]);
