import ShopCart from "../sheard/ShopCart";

const ShopTab = ({items}) => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 items-center">
        {
            items.map(item=><ShopCart key={item._id} item={item}></ShopCart>)
        }
    </div>
    );
};

export default ShopTab;