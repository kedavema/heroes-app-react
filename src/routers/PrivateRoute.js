import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {

  const { user } = useContext(AuthContext);

  const location = useLocation();

  localStorage.setItem('lastPath', `${location.pathname}${location.search}`);

  return user.logged
            ? children
            : <Navigate to="/login" />
};
