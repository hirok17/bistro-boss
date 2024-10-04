import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure =axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate =useNavigate();
    const {logOut} =useAuth();
    axiosSecure.interceptors.request.use((config)=>{
        const token=localStorage.getItem('access-token');
        console.log('your token:', token);
        config.headers.authorization =`Bearer ${token}`;
        return config;
    }, (err)=>{
        return Promise.reject(err);
    })
    //  response interceptor
    axiosSecure.interceptors.response.use((response)=>{
        return response;
    }, async(err)=>{
        const errStatus= err.response.status;
        if(errStatus === 401 || errStatus === 403){
            await logOut();
            navigate('/login');
        }
      
        return Promise.reject(err);
    })

    return axiosSecure;
}

export default useAxiosSecure;


