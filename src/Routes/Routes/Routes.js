import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/navbar", element: <Navbar></Navbar> },
      { path: "/footer", element: <Footer></Footer> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
