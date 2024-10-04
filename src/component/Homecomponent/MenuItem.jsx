
import HeaderTitle from "../sheard/HeaderTitle";
import CartItem from "../sheard/CartItem";
import useMenu from "../../Hooks/useMenu";

const MenuItem = () => {
  const [menus]=useMenu();
  const populer =menus.filter(menu=>menu.category === 'popular');
    return (
         <section className="container mx-auto mt-9">
            <HeaderTitle subheading="---Check it out---" heading="Popular MENU Item"></HeaderTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 px-4">
                {
                    populer.map(menu=><CartItem key={menu._id} menu={menu}></CartItem>)
                }
            </div>
         </section>
    );
};

export default MenuItem;