import { ToastContainer } from "react-toastify";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <div className="font-mulish">
      <Toaster></Toaster>

      <ToastContainer></ToastContainer>
      <div className="container mx-auto  px-5 lg:px-10">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
