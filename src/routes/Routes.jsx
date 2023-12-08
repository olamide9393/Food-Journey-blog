import React from "react";
import { useRoutes } from "react-router-dom";
import Fruits from "../blogcategories/Fruits";
import Meat from "../blogcategories/Meat";
import MilkProduct from "../blogcategories/MilkProduct";
import Smoothies from "../blogcategories/Smoothies";
import Vegan from "../blogcategories/Vegan";
import Vegetables from "../blogcategories/Vegetables";
import AdminDashboard from "../component/AdminDashboard";
import CreateBlog from "../component/CreateBlog";
import HomePage from "../component/HomePage";
import Navbar from "../component/Navbar";
import Sidebar from "../component/BlogSideBar";
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
import Desserts from "../receptcategory/Desserts";
import Drinks from "../receptcategory/Drinks";
import GlutenFree from "../receptcategory/GlutenFree";
import Salad from "../receptcategory/Salad";
import Snacks from "../receptcategory/Snacks";
import Vegans from "../receptcategory/Vegans";
import Smoothiess from "../receptcategory/Smoothiess";


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
          element: <SingleBlog />,
        },
        {
          path: "/recept/:id",
          element: <SingleRecept />,
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

        {
          path: "/Blog/fruits",
          element: <Fruits />,
        },
        {
          path: "/Blog/meat",
          element: <Meat />,
        },
        // {
        //   path: "/Blog/legume",
        //   element: <Legu />,
        // },
        {
          path: "/Blog/milk-product",
          element: <MilkProduct />,
        },
        {
          path: "/Blog/smoothies",
          element: <Smoothies />,
        },
        {
          path: "/Blog/vegan",
          element: <Vegan />,
        },
        { 
          path: "/Blog/vegetables",
          element: <Vegetables />,
        },
        {
          path: "recept/desserts",
          element: <Desserts />,
        },
     
        {
          path: "recept/drinks",
          element: <Drinks />,
        },
        {
          path: "/recept/gluten-free",
          element: <GlutenFree />,
        },
        {
          path: "recept/salad",
          element: <Salad />,
        },
        {
          path: "recept/smoothies",
          element: <Smoothiess />,
        },
        {
          path: "recept/snacks",
          element: <Snacks />,
        },
        {
          path: "recept/vegan",
          element: <Vegans />,
        },
      ],
    },

    //     {
    //       path: '/',
    //       element: <Navbar />,
    //       children: [
    //            {
    //             index: true,
    //             element: <Sidebar />,

    //            },
    //            {

    //             path: "help",
    //             element: < Help/>

    //           },

    //       ]
    //  },
  ]);
  return <div>{routing}</div>;
};

export default Routes;
