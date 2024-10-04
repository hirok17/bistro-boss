import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import deletePic from "../../assets/Group 85.png"
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((totall, item) => totall + item.price, 0);
    const axiosSecure =useAxiosSecure();

    const handelDelete=(id)=>{
        console.log(id);
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
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
          

            }
          });
    }
    return (
        <div>
            <div className="container text-center mt-16">
                <h2 className="text-2xl font-bold">My Cart</h2>
                <h3 className="text-xl">WANNA ADD MORE?</h3>
            </div>
            <div className="flex justify-center items-center gap-16 mt-6">
                <h3 className="text-3xl font-bold">Total orders: {cart.length}</h3>
                <h3 className="text-3xl font-bold">Total price: ${totalPrice.toFixed(2)}</h3>
                <button className="btn btn-primary">Pay</button>
            </div>
            {/* table data------------ */}
            <div className="max-w-[800px] mx-auto mt-5 overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-300 py-2">
                        <tr className="text-white">

                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        cart.map(item=><>
                             <tr key={item._id}>
                            <td>
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={item.image}
                                        alt="image" />
                                </div>
                            </td>
                            <td>
                              <p>{item.name}</p>
                            </td>
                            <td>
                                <p>${item.price}</p>
                            </td>
                            <th>
                                <img onClick={()=>handelDelete(item._id)} title="Delete" className="cursor-pointer" src={deletePic} alt="" />
                            </th>
                        </tr>
                        </>)
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;