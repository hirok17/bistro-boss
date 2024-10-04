import { Card } from 'antd';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCart from '../../Hooks/useCart';
const { Meta } = Card;

const ShopCart = ({item}) => {
    const {name, image, recipe, price, _id} =item;
    const navigate=useNavigate();
    const {user}=useAuth();
    const axiosSecure =useAxiosSecure();
    const [, refetch] =useCart();
    const handelTocart=()=>{
        if(user && user?.email){
            const menuItem ={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', menuItem)
            .then(res=>{
                if(res.data.insertedId){
                    toast.success('added to cart');
                    refetch();
                }
                
            })
        }else{
           navigate("/login");
        }
        
    }
    return (
        <div className='text-center'>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={image} />}
            >
                <Meta title={name} description={recipe} />
                <div className='text-center mt-5'>
                <p className='text-lg font-semibold text-[#BB8506]'>$ {price}</p>
                <button onClick={handelTocart} className='btn bg-[#111827] text-[#BB8506] mt-3 px-8 py-2 rounded-lg'>Add to cart</button>
                </div>
            </Card>
        </div>
    );
};

export default ShopCart;