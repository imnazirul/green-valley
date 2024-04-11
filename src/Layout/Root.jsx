import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="container mx-auto font-mulish px-5 lg:px-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
