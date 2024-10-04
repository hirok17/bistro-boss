import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivetRout = ({children}) => {
    const {user, loading}=useAuth();
    const location=useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg absolute top-[35%] left-[35%]"></span>;
    }
    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
       
};

export default PrivetRout;