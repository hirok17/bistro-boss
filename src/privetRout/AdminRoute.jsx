import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} =useAuth();
    const [isAdmin, isPending] =useAdmin();
    const location=useLocation();
   
    if(loading || isPending){
        return <span className="loading loading-infinity loading-lg absolute top-[35%] left-[35%]"></span>;
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default AdminRoute;