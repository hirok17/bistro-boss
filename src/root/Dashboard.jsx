import { FaCartPlus, FaEnvelopeOpenText, FaHouseCrack, FaProductHunt, FaUserSecret } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] =useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-3 text-white text-lg font-bold">
                   {
                    isAdmin ? <>
                         <li className="mb-4"><NavLink to="/"> <FaHouseCrack />Home</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/add-product"> <FaCartPlus />Add Product</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/products"><FaProductHunt /> All Products</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/manage-order"><FaProductHunt /> Manage Order</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/users"><FaUserSecret /> All Users</NavLink></li>
                  
                    </>
                     :
                     <>
                     <li className="mb-4"><NavLink to="/"> <FaHouseCrack />Home</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/cart"> <FaCartPlus />My Cart</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/booking"><FaUserSecret /> My Booking</NavLink></li>
                    <li className="mb-4"><NavLink to="/dashboard/contact"><FaEnvelopeOpenText /> Contact Us</NavLink></li>
                     </>
                   }
                   
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

