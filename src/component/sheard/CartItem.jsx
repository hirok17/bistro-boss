
const CartItem = ({menu}) => {
    return (
        <div className="flex gap-3">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={menu.image} alt="" />
            <div>
                <h2 className="text-lg lg:text-5xl font-semibold">{menu.name}...........</h2>
                <p>{menu.recipe}</p>
            </div>
            <p>${menu.price}</p>
        </div>
    );
};

export default CartItem;