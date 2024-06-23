import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Notfound from "../../Component/Notfound/Notfound";
import Register from "../../Component/Register/Register";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Addproduct from "../../Pages/Addproduct/Addproduct";
import Allbuyer from "../../Pages/Allbuyer/Allbuyer";
import Allseller from "../../Pages/Allseller/Allseller";
import Home from "../../Pages/Home/Home/Home";
// import Product from "../../Pages/Product/Product";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

import OnlineBooks from "../../Component/OnlineBooks/OnlineBooks";
import SingleBooks from "../../Component/OnlineBooks/SingleBooks";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import MyOrderProduct from "../../Pages/MyOrderProduct/MyOrderProduct";
import WishList from "../../Component/WishList/WishList";
import Community from "../../Pages/Community/Community";
import Privateroute from "../Privateroute/Privateroute";
import BookDetails from "../../Pages/AllBooks/BookDetails";

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
      {
        path: "/online-books",
        element: (
          <>
            <Privateroute>
              {" "}
              <OnlineBooks></OnlineBooks>
            </Privateroute>
          </>
        ),
      },
      { path: "/wish-list", element: <WishList></WishList> },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/online-books/:id",
        element: <SingleBooks></SingleBooks>,
        loader: ({ params }) =>
          fetch(`https://booknokery.vercel.app/books/${params?.id}`),
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://booknokery.vercel.app/material/${params?.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },

      { path: "/my-order-product", element: <MyOrderProduct></MyOrderProduct> },
      {
        path: "/book",
        element: <Privateroute>{<AllBooks></AllBooks>}</Privateroute>,
      },

      { path: "/add-product", element: <Addproduct></Addproduct> },

      { path: "/all-seller", element: <Allseller></Allseller> },
      { path: "/all-buyer", element: <Allbuyer></Allbuyer> },
      { path: "/*", element: <Notfound></Notfound> },
    ],
  },
]);
