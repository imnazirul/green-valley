import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  console.log(location);

  if (loading) {
    return (
      <div className="flex h-[50vh] justify-center items-center">
        {" "}
        <div className="w-24 h-24 border-[8px] border-dashed rounded-full animate-spin border-btn-1"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
