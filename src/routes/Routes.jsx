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
import Sidebar from "../component/SideBar";
import SingleBlog from "../component/SingleBLog";
import SingleRecept from "../component/SingleRecept";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import BlogPage2 from "../pages/BlogPage2";
import BlogPage3 from "../pages/BlogPage3";
import BlogPage4 from "../pages/BlogPage4";
import BlogPage5 from "../pages/BlogPage5";
import ContactUs from "../pages/ContactUs";
import Help from "../pages/Help";
import Login from "../pages/Login";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import Recept from "../pages/Recept";
import ReceptPage2 from "../pages/ReceptPage2";
import ReceptPage3 from "../pages/ReceptPage3";
import ReceptPage4 from "../pages/ReceptPage4";
import ReceptPage5 from "../pages/ReceptPage5";
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
            
          path: "/blog/:id",
          element: < SingleBlog/>
        },
        {
            
          path: "/recept/:id",
          element: < SingleRecept/>
        },
 
 {
  path: "Terms of Service",
  element: <Service />,
}, 
 {
  path: "recept/2",
  element: <ReceptPage2 />,
}, 
 {
  path: "recept/3",
  element: <ReceptPage3 />,
}, 
 {
  path: "recept/4",
  element: <ReceptPage4 />,
}, 
 {
  path: "recept/5",
  element: <ReceptPage5 />,
}, 
{
  path: "Blog/2",
  element: <BlogPage2 />,
},
{
  path: "Blog/3",
  element: <BlogPage3 />,
},
{
  path: "Blog/4",
  element: <BlogPage4 />,
},
{
  path: "Blog/5",
  element: <BlogPage5 />,
},
      ],
    },

    {
      path: '/',
      element: <Navbar />,
      children: [
           {
            index: true,
            element: <Sidebar />,

           },
           {
            
            path: "help",
            element: < Help/>

          },
        
      ]
 },





















  ]);
  return <div>{routing}</div>;
};

export default Routes;
