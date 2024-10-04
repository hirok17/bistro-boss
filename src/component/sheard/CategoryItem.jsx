import CartItem from "./CartItem";

 
 const CategoryItem = ({item}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 px-4">
        {
            item.map(menu=><CartItem key={menu._id} menu={menu}></CartItem>)
        }
    </div>
    );
 };
 
 export default CategoryItem;