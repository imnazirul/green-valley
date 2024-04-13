import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PropertyDetails from "../Shared/PropertyDetails/PropertyDetails";
import ErrorEl from "../Pages/ErrorEL/ErrorEl";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateProfile from "../Pages/UpdataProfile/UpdateProfile";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorEl></ErrorEl>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./../../public/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/property_details/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/user_profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/update_Profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/blogs/blog_details/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("/blogs.json"),
      },
    ],
  },
]);

export default router;
