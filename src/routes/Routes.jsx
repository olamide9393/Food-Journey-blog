import React from "react";
import { useRoutes } from "react-router-dom";
import Fruits from "../category/Fruits";
import Meat from "../category/Meat";
import MilkProduct from "../category/MilkProduct";
import Smoothies from "../category/Smoothies";
import Vegan from "../category/Vegan";
import Vegetables from "../category/Vegetables";
import AdminDashboard from "../component/AdminDashboard";
import CreateBlog from "../component/CreateBlog";
import HomePage from "../component/HomePage";
import Navbar from "../component/Navbar";
import SingleBlog from "../component/SingleBLog";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import Help from "../pages/Help";
import Login from "../pages/Login";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import Recept from "../pages/Recept";
import Register from "../pages/Register";
import Service from "../pages/Service";

const Routes = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "fruits",
          element: <Fruits />,
        },
        {
          path: "meat",
          element: <Meat />,
        },
        {
          path: "milk-product",
          element: <MilkProduct />,
        },
        {
          path: "smoothies",
          element: <Smoothies />,
        },
        {
          path: "vegan",
          element: <Vegan />,
        },
        {
          path: "vegetables",
          element: <Vegetables />,
        },
        {
          path: "Admin-dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "About-Us",
          element: <AboutUs />,
        },
        {
          path: "Blog",
          element: <Blog />,
        },
        {
          path: "Contact-Us",
          element: <ContactUs />,
        },
        {
          path: "Help",
          element: <Help />,
        },
        {
          path: "Privacy & policy",
          element: <PrivacyAndPolicy />,
        },
        {
          path: "recept",
          element: <Recept />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "Createblog",
          element: <CreateBlog />,
        },
        {
          path: '/more/:id',
          element: <SingleBlog/>
 }, 
 {
  path: "Terms of Service",
  element: <Service />,
}, 
      ],
    },
  ]);
  return <div>{routing}</div>;
};

export default Routes;
