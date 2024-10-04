import { useState } from "react";
import useMenu from "../Hooks/useMenu";
import banner from "../assets/menu/banner2.jpg";
import Cover from "../component/sheard/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTab from "../component/shop/ShopTab";

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();
    const dessert = menus.filter(menu => menu.category === 'dessert');
    const pizza = menus.filter(menu => menu.category === 'pizza');
    const salad = menus.filter(menu => menu.category === 'salad');
    const soup= menus.filter(menu => menu.category === 'soup');

  
    return (
        <section>
            <Cover banner={banner} title="OUR SHOP" info="Would you like to try a dish?"></Cover>
            <div className="container mx-auto mt-10 pb-5">
            <Tabs className="text-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPs</Tab>
                        <Tab>Desserts</Tab>
                    </TabList>
                    <TabPanel>
                       <ShopTab items={salad}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={pizza}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={soup}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={dessert}></ShopTab>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Shop;