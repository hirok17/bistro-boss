import Cover from "../component/sheard/Cover";
import banner from "../assets/menu/banner3.jpg";
import HeaderTitle from "../component/sheard/HeaderTitle";
import useMenu from "../Hooks/useMenu";
import CategoryItem from "../component/sheard/CategoryItem";
import banner2 from "../assets/menu/dessert-bg.jpeg";
import banner3 from "../assets/menu/pizza-bg.jpg";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menus] = useMenu();
    const offered = menus.filter(menu => menu.category === 'offered');
    const dessert = menus.filter(menu => menu.category === 'dessert');
    const pizza = menus.filter(menu => menu.category === 'pizza');
    return (
        <section>
            <Cover banner={banner} title="OUR MENU" info="Would you like to try a dish?"></Cover>
            <div className="container mx-auto">
                <div>
                    <HeaderTitle subheading="---Don't miss---" heading="TODAY'S OFFER"></HeaderTitle>
                    <CategoryItem item={offered}></CategoryItem>
                </div>
                <div className="text-center">
                    <button className="btn px-8 py-5 border-b-2 border-[#1F2937] rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </div>
                {/* dessert */}
                <div className="mt-10">
                    <Cover banner={banner2} title="DESSERTS" info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"></Cover>
                    <CategoryItem item={dessert}></CategoryItem>
                    <div className="text-center mb-6">
                        <button className="btn px-8 py-5 border-b-2 border-[#1F2937] rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                    </div>
                </div>

                {/* pizza */}
                <div className="pb-9">
                    <Cover banner={banner3} title="PIZZA" info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"></Cover>
                    <CategoryItem item={pizza}></CategoryItem>
                    <div className="text-center">
                        <Link to={`/shop`}><button className="btn px-8 py-5 border-b-2 border-[#1F2937] rounded-lg">ORDER YOUR FAVOURITE FOOD</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;