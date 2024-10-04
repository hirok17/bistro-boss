import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import deleteIcon from "../../assets/Group 85.png";
import roleIcon from "../../assets/Group 86.png";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const deleteUser =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        console.log(res.data);
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your user has been deleted.",
                            icon: "success"
                          });
                    }
                })
          

            }
          });
    }

    const makeAdmin =(id)=>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                refetch();
                toast.success('user is an admin now');
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mt-16">MANAGE ALL USERS</h2>
            <div className="max-w-[800px] mx-auto">
                <h3 className="text-2xl font-semibold">Total users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-300 text-white rounded">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                          
                        </thead>
                        <tbody>
                            {
                                users.map((user, index)=><>
                                   <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role ==='admin' ? 'admin' :
                                    <img onClick={()=>makeAdmin(user._id)} className="cursor-pointer" src={roleIcon} alt="" />
                                    }</td>
                                <td><img onClick={()=>deleteUser(user._id)} className="cursor-pointer" src={deleteIcon} alt="" /></td>
                            </tr>
                                </>)
                            }
                         
                          
                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;