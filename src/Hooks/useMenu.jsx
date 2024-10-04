import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu =()=>{
  const axiosSecure =useAxiosSecure();
  const {data: menus=[], refetch} =useQuery({
        queryKey:['menus'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/menus')
            return res.data;
        }
        
  })
  return [menus, refetch];

};
export default useMenu;