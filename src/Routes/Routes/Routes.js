import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Register from "../../Component/Register/Register";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home/Home";
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
      { path: "/category/:id", element: <h1>TWo picture in category</h1> },
    ],
  },
]);
