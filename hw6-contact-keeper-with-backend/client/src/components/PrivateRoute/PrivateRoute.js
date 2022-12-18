import { useContext } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../../contexts/AuthContext/AuthContext";

const PrivateRoute = (props) => {
    const { component: Component } = props;
    const { state } = useContext(authContext);
    const { isAuthenticated } = state;

    if (isAuthenticated) {
        return <Component />;
    }
    return <Navigate to="/login" />;
};

export default PrivateRoute;
