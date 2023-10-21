import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user)

    if (loading) {
        return <div className="  flex justify-center text-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (!user?.email) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;