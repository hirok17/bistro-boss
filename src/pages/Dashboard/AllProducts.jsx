import HeaderTitle from "../../component/sheard/HeaderTitle";
import useMenu from "../../Hooks/useMenu";
import edite from "../../assets/edite.png";
import del from "../../assets/Group 85.png";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [menus, refetch] = useMenu();
    const axiosSecure =useAxiosSecure();
    const handelDelete=id=>{
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
                axiosSecure.delete(`/menus/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your menu has been deleted.",
                            icon: "success"
                          });
                    }
                })
          

            }
          });
    }
    return (
        <div>
            <div className="mt-10">
                <HeaderTitle heading="All products" subheading="---Hurry Up!---"></HeaderTitle>
            </div>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-lg">Total Products: {menus.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-400 text-white text-base">
                                <th>
                                </th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>price</th>
                                <th>Action</th>
                                <th>Action</th>
                                 
                            </tr>
                        </thead>
                        <tbody>
                           {
                            menus.map((menu, index)=><>
                                      <tr key={menu._id}>
                                <th>
                                     {index +1}
                                </th>
                                <td>
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={menu.image}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td>
                                    <h3>{menu.name}</h3>
                                </td>
                                <td>{menu.category}</td>
                                <td>
                                    <p> ${menu.price}</p>
                                </td>
                                <td>
                                    <Link to={`/dashboard/menu/updated/${menu._id}`}>
                                    <img title="Edite" src={edite} alt="edite" className="cursor-pointer" />
                                    </Link>
                                  
                                </td>

                                <th>
                                    <img onClick={()=>handelDelete(menu._id)} title="Delete" className="cursor-pointer" src={del} alt="" />
                                </th>
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

export default AllProducts;